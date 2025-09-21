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
export const runtime = "edge";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getMediaUrl } from "@/utils";
import url from "../../../../constants";

const STRAPI_URL = url;
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

async function fetchOne(param) {
  const base = `${STRAPI_URL}/${CT}`;
  // önce slug
  const urlStr = `${base}?filters[slug][$eq]=${encodeURIComponent(
    param
  )}&populate=cover`;
  console.log(urlStr);
  const res = await fetch(urlStr);
  if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
  const json = await res.json();
  const row = json.data?.[0];
  console.log(row);
  if (row) return normalize(row);

  // yoksa id
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

export default function BlogDetailClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!slug) return;
    setLoading(true);
    fetchOne(slug)
      .then((res) => {
        if (!mounted) return;
        if (!res) {
          router.replace("/404");
          return;
        }
        setData(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [slug, router]);

  if (loading)
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mt-6 h-24 flex items-center justify-center">
            Yükleniyor…
          </div>
        </section>
      </main>
    );

  if (error)
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mt-6 text-red-600">Bir hata oluştu.</div>
        </section>
      </main>
    );

  if (!data) return null;

  const looksHtml = /<\/?[a-z][\s\S]*>/i.test(data.body || "");
  const paragraphs = !looksHtml
    ? (data.body || "").split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative mt-6 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden mx-auto">
          <Image
            src={data.coverSrc}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 768px"
            priority
            unoptimized={!data.cover}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h1>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        {looksHtml ? (
          <div
            className="prose prose-lg max-w-none mt-6 text-justify prose-p:text-justify prose-p:indent-8 prose-headings:text-left [hyphens:auto]"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        ) : (
          <div className="mt-6 text-lg text-gray-800 space-y-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-8 indent-8 text-justify [hyphens:auto]"
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
