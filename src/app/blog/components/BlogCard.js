/*
import getMediaUrl from "@/utils";
import Image from "next/image";
import Link from "next/link";

// Example card component:
// - make the link dynamic
// - center the image within a fixed area
// - use Tailwind utilities instead of inline styles where possible
*/
import getMediaUrl from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ item }) {
  return (
    <Link
      href={`/blog/detail?name=${item.slug}`}
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="h-[200px] bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-2xl">
        {item?.cover?.url ? (
          <Image
            alt={item.title || "cover"}
            src={getMediaUrl(item.cover.url)}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-lg">No image</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
          {item.description}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-indigo-600 font-medium">
            Read more →
          </span>
          <span className="text-xs text-gray-400">
            {item.publishedAt
              ? new Date(item.publishedAt).toLocaleDateString()
              : ""}
          </span>
        </div>
      </div>
    </Link>
  );
}
