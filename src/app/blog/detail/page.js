// app/blog/[slug]/page.jsx
import React from "react";
import Image from "next/image";

export default async function BlogDetail({ params }) {
  const slug = params?.slug;
  return <div>BlogDetail</div>;
}
