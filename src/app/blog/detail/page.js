/*const BlogDetail = async ({ params }) => {
  const slug = (await params?.slug) || false;
  if (!/^\d+$/.test(slug)) return <p>İstenilen blog bulunamadı</p>; // sadece rakam
  const id = Number(slug);
  return <p>{id}</p>;
};
export default BlogDetail;

 TODO
    1- Sayfanın tasarımı yapılacak.
    2- Strapi'ye detay için istek atılacak.
*/

// app/blog/[slug]/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import getMediaUrl from "@/utils";

export default function BlogDetailClient() {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const CT = "articles";

  function normalize(row) {
    const rec = row.attributes ?? row; // v4/v5 normalize
    const title = rec.title ?? "Untitled";
    const body = rec.content ?? rec.description ?? "";

    const coverV5 = rec.cover;
    const coverV4 = row.attributes?.cover?.data?.attributes;
    const cover = coverV5 || coverV4 || null;

    const coverSrc = cover
      ? getMediaUrl(cover.formats?.large?.url || cover.url)
      : "https://placehold.co/1280x720?text=No%20Image";

    return { title, body, cover, coverSrc };
  }

  async function fetchBySlugOrId(param) {
    const base = `${STRAPI_URL}/${CT}`;

    // önce slug ile dene
    const urlStr = `${base}?filters[slug][$eq]=${encodeURIComponent(
      param
    )}&populate=cover`;
    const res = await fetch(urlStr);
    if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
    const json = await res.json();
    const row = json.data?.[0];
    if (row) return normalize(row);

    // yoksa id ile dene
    if (/^\d+$/.test(param)) {
      const urlId = `${base}/${param}?populate=cover`;
      const res2 = await fetch(urlId);
      if (!res2.ok) throw new Error(`Fetch failed ${res2.status}`);
      const json2 = await res2.json();
      const row2 = json2.data;
      if (row2) return normalize(row2);
    }
    return null;
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const param = (() => {
      try {
        const u = new URL(window.location.href);
        // varsayılan: path'ten son segment veya query param 'slug' veya 'name'
        const pathParts = u.pathname.split("/").filter(Boolean);
        const lastSeg = pathParts[pathParts.length - 1] ?? "";
        const qSlug = u.searchParams.get("slug") || u.searchParams.get("name");
        return qSlug || lastSeg || "";
      } catch (err) {
        return "";
      }
    })();

    if (!param) {
      setError("Invalid slug or id");
      setLoading(false);
      return;
    }

    fetchBySlugOrId(param)
      .then((d) => {
        if (!mounted) return;
        if (!d) setError("Requested blog not found.");
        setData(d);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "İstek sırasında hata oluştu");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <main className="bg-white pt-3 pb-10">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mt-8">
            <div className="p-6 sm:p-8 animate-pulse">
              <div className="rounded-xl bg-gray-100 w-full h-56 sm:h-64 md:h-72" />
              <div className="mt-6 h-8 w-3/4 bg-gray-200 rounded-md" />
              <div className="mt-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded-md w-full" />
                <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                <div className="h-4 bg-gray-200 rounded-md w-4/6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );

  if (error)
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mt-12 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">
              Something went wrong
            </h2>
            <p className="mt-2 text-sm text-gray-600">{error}</p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  setLoading(true);
                  setError(null);
                  // tetikle: aynı effect yeniden çağrılmayacağı için reload kullanıyoruz
                  window.location.reload();
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Retry
              </button>
              <a href="/blog" className="text-sm text-gray-600 hover:underline">
                Back to all blogs
              </a>
            </div>
          </div>
        </section>
      </main>
    );

  const looksHtml = /<\/?[a-z][\s\S]*>/i.test(data.body || "");
  const paragraphs = !looksHtml
    ? (data.body || "").split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <nav className="mt-6" aria-label="breadcrumb">
          <a href="/blog" className="text-sm text-indigo-600 hover:underline">
            ← All blogs
          </a>
        </nav>

        <article className="mt-6">
          <header>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              {data.title}
            </h1>
          </header>

          <figure className="mt-6 rounded-2xl overflow-hidden bg-gray-100">
            {data.coverSrc ? (
              <Image
                src={data.coverSrc}
                alt={data.title}
                width={1280}
                height={720}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                sizes="(max-width: 640px) 100vw, 768px"
                priority
                unoptimized={!data.cover}
              />
            ) : (
              <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
            {data.cover?.caption && (
              <figcaption className="sr-only">{data.cover.caption}</figcaption>
            )}
          </figure>

          <div className="mt-8 prose prose-lg max-w-none text-gray-800">
            {looksHtml ? (
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
            ) : (
              paragraphs.map((p, i) => (
                <p key={i} className="leading-8 first:mt-0">
                  {p}
                </p>
              ))
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
