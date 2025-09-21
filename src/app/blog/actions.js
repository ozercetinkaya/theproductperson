"use server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL_LIVE ||
  "https://theproductpersonbackend-production.up.railway.app" ||
  "http://localhost:1337";
const CT = "/articles";

export async function fetchBlogs() {
  const res = await fetch(STRAPI_URL + CT + "?populate=cover");
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json.data || [];
}
