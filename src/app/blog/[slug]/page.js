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
export const runtime = "edge";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMediaUrl } from "@/utils";
import url from "../../../../constants";

const STRAPI_URL = url;
const CT = "articles"; // plural API ID

async function fetchOne(param) {
  const base = `${STRAPI_URL}/${CT}`;

  // 1) önce slug

  const url = `${base}?filters[slug][$eq]=${encodeURIComponent(
    param
  )}&populate=cover`;
  const res = await fetch(url, { cache: "no-store" });
  if (res.ok) {
    const json = await res.json();
    const row = json.data?.[0];
    if (row) return normalize(row);
  }

  // 2) yoksa ve sayıysa id
  if (/^\d+$/.test(param)) {
    const url = `${base}/${param}?populate=cover`;
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const row = json.data;
      if (row) return normalize(row);
    }
  }
  return null;
}

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

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const data = await fetchOne(slug);
  if (!data) return notFound();

  const looksHtml = /<\/?[a-z][\s\S]*>/i.test(data.body || "");
  const paragraphs = !looksHtml
    ? (data.body || "").split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      {/* Kapak: içerik genişliğinde, ortalanmış ve daha kısa */}
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

      {/* Başlık: sola yaslı */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h1>
      </section>

      {/* Gövde: justify + paragraf girintisi */}
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
