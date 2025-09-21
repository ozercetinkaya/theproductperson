// app/blog/[slug]/page.jsx
export const runtime = "edge";
import React from "react";
import Image from "next/image";
// import { getMediaUrl } from "@/utils";
import { fetchOne } from "./actions";

export default async function BlogDetail({ params }) {
  const slug = params?.slug;
  const data = await fetchOne(slug);

  if (!data) {
    // Veri bulunamazsa 404 sayfasına yönlendir
    // Next.js sunucu bileşenlerinde redirect kullanırken Next.js'in 'next/navigation' modülünden 'notFound' kullanılması tavsiye edilir.
    // Ancak direkt bir redirect için 'next/navigation'dan 'redirect' de kullanılabilir.
    // Şimdilik null döndürüp Next.js'in 404'ü işlemesini sağlayabiliriz veya özel bir 404 component'i gösterebiliriz.
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mt-6 h-24 flex items-center justify-center">
            İstenilen blog bulunamadı.
          </div>
        </section>
      </main>
    );
  }

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
