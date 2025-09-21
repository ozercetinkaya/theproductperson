export const runtime = "edge";

const STRAPI_URL =
  "theproductpersonbackend-production.up.railway.app" ||
  "http://localhost:1337";
const CT = "articles";

function normalize(row) {
  const rec = row.attributes ?? row;
  const title = rec.title ?? "Untitled";
  const body = rec.content ?? rec.description ?? "";

  const coverV5 = rec.cover;
  const coverV4 = row.attributes?.cover?.data?.attributes;
  const cover = coverV5 || coverV4 || null;

  const coverSrc = cover
    ? `${STRAPI_URL}${cover.formats?.large?.url || cover.url}`
    : "https://placehold.co/1280x720?text=No%20Image";

  return { title, body, cover, coverSrc };
}

export async function fetchOne(param) {
  const base = `${STRAPI_URL}/${CT}`;
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
