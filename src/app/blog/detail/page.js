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

  return <div>BlogDetail</div>;
}
