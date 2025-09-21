export default function getMediaUrl(url) {
  const isProduction = process.env.NODE_ENV == "production";
  if (!url) return "";
  // Strapi bazen "/uploads/.." (relative) ya da "localhost:1337/.." (protokolsüz) döndürebilir
  if (url.startsWith("http")) return url;
  if (url.startsWith("//")) return `http:${url}`;
  if (url.startsWith("localhost:")) return `http://${url}`;
  return isProduction
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
    : `${process.env.NEXT_PUBLIC_STRAPI_URL_LOCAL}${url}`;
}
