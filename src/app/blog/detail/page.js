// app/blog/[slug]/page.jsx
import React from "react";
import Image from "next/image";

export default async function BlogDetail({ params }) {
  const slug = params?.slug;

  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL_LIVE ||
    "https://theproductpersonbackend-production.up.railway.app" ||
    "http://localhost:1337";
  const CT = "articles";
  const res = await fetch(
    STRAPI_URL + CT + "?name=" + slug + "?populate=cover"
  );
  if (!res.ok) {
    console.error("Fetch failed for blogs:", res.status, res.statusText);
  }
  const json = await res.json();
  const blogs = json?.data || [];

  return (
    <div>
      <h1>BlogDetail</h1>
      {/* <p>{blogs[0].title}</p>
      <p>{blogs[0].description}</p> */}
    </div>
  );
}
