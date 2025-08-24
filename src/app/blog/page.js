import Image from "next/image";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import url from "../../../constants";

export default async function BlogPage() {
  const page = "/articles";
  const res = await fetch(url + page + "?populate=cover");
  const json = await res.json();
  const blogs = json.data;

  /* TODOS:
    1.Buraya kart tasarımı yapılacak.
    2. Server'dan gelen arrayı kart ile döndür.
      örn: blogs.map(e => {
        return <BlogCard title={e.title} description={e.description} />  
      })
  */
  return (
    <section className="min-h-[80vh] bg-[#F8F5F2] py-12 px-16">
      {blogs && blogs.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-left">
          {blogs.map((item, i) => (
            <BlogCard item={item} key={"blog" + i} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#332E2E]">
            No blog posts yet 📝
          </h2>
          <p className="mt-2 text-[#555] text-lg">
            Content is coming soon. Stay tuned!
          </p>
        </div>
      )}
      -
      {/*
<div className="relative w-full h-[200px] sm:h-[280px] md:h-[340px] -mt-6">
  <Image
    src="/illustration-under-construction.svg"
    alt="Under Construction"
    fill
    className="object-contain"
    priority
  />
</div>
*/}
      {/* Text + Button */}
      {/*
      <div className="mt-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#332E2E]">
          Blog is under construction 🚧
        </h2>
        <p className="mt-2 text-[#555] text-lg">
          Stay tuned — articles, ideas and experiments are coming soon!
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-[#0095AF] hover:bg-[#007A91] text-white font-semibold py-3 px-8 rounded-2xl shadow transition"
        >
          Return Home
        </Link>
      </div>*/}
    </section>
  );
}
