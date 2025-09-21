"use server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL_LIVE || "http://localhost:1337";
const CT = "/articles";

export async function fetchBlogs() {
  if (!STRAPI_URL || STRAPI_URL === "http://localhost:1337") {
    console.error(
      "STRAPI_URL is not defined or is localhost, please check NEXT_PUBLIC_STRAPI_URL_LIVE environment variable."
    );
    // Or throw an error to stop the build if this is a critical requirement
    // throw new Error("STRAPI_URL is not properly configured.");
  }
  console.log("Fetching blogs from:", STRAPI_URL + CT);
  const res = await fetch(STRAPI_URL + CT + "?populate=cover");
  if (!res.ok)
    throw new Error(
      `Fetch failed: ${res.status} ${res.statusText} from ${STRAPI_URL + CT}`
    );
  const json = await res.json();
  return json.data;
}
