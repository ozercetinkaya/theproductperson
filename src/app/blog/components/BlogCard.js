/*import { getMediaUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link"; */

/* export default function BlogCard({ item }) {
  return (
    <Link
      // Burası dinamik hale getirelecek "{}""
      href="/blog/1"
      className="min-w-[420px] max-w-md h-[400px] bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div
        className="rounded-xl mb-2"
        // TODO: aşağıdaki property'ler tailwind'de className'e çevirelecek
        style={{
          maxHeight: "200px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {item?.cover?.url ? (
          <Image
            alt="mainimage"
            src={getMediaUrl(item.cover.url)}
            width={200} // oran hesabı için
            height={120}
            style={{ width: "100%", height: "auto" }} // dinamik genişlik
          />
        ) : (
          <Image
            src={"https://placehold.co/600x400?text=No%20Image"}
            alt="placeholder"
            width={200} // oran hesabı için
            height={120}
            className="rounded-xl mb-2"
            style={{ width: "100%", height: "auto" }} // dinamik genişlik
            unoptimized
          />
        )}
      </div>
      */ {
  /* <Image src={item.cover} /> */
}
/*<h1 className="text-xl font-bold mb-2">{item.title}</h1>
      <h2 className="text-gray-600 mb-2">{item.description}</h2>
    </Link>
  );
}*/
import { getMediaUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ item }) {
  return (
    <Link
      href={`/blog/detail?name=${item.slug}`}
      className="min-w-[420px] max-w-md h-[400px] bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="flex items-center justify-center overflow-hidden max-h-[200px] rounded-xl mb-2">
        {item?.cover?.url ? (
          <Image
            alt="mainimage"
            src={getMediaUrl(item.cover.url)}
            width={200}
            height={120}
            className="w-full h-auto"
          />
        ) : (
          <Image
            src="https://placeon.site/600/400/png/6b7280?text=600x400&font=opensans&fontSize=24"
            alt="placeholder"
            width={200}
            height={120}
            className="w-full h-auto"
            unoptimized
          />
        )}
      </div>

      <h1 className="text-xl font-bold mb-2">{item.title}</h1>
      <h2 className="text-gray-600 mb-2 mt-4">{item.description}</h2>
    </Link>
  );
}
