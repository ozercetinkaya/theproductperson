import BlogCard from "./components/BlogCard";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL_LIVE ||
  "https://theproductpersonbackend-production.up.railway.app/api" ||
  "http://localhost:1337";
const CT = "/articles";

export default async function BlogPage() {
  console.log(STRAPI_URL + CT + "?populate=cover");
  const res = await fetch(STRAPI_URL + CT + "?populate=cover");
  if (!res.ok) {
    console.error("Fetch failed for blogs:", res.status, res.statusText);
  }
  const json = await res.json();
  const blogs = json?.data || [];

  /* TODOS:
    1.Buraya kart tasarımı yapılacak.
    2. Server'dan gelen arrayı kart ile döndür.
      örn: blogs.map(e => {
        return <BlogCard title={e.title} description={e.description} />  
      })
  */
  return (
    <section className="min-h-[80vh] bg-[#F8F5F2] py-12 px-6 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#332E2E]">
            Blog
          </h1>
          <p className="mt-3 text-lg text-[#555] max-w-2xl mx-auto">
            Writings, experiences and short notes — thoughts on product
            management, design and technology.
          </p>
        </header>

        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((item, i) => (
              <BlogCard item={item} key={"blog" + i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center text-center py-20">
            <div className="w-full max-w-md">
              <img
                src="/illustration-under-construction.svg"
                alt="Coming soon"
                className="mx-auto mb-6 w-48 h-48 object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#332E2E]">
              Henüz içerik yok
            </h2>
            <p className="mt-2 text-[#555]">
              İçerikler hazırlanıyor — yakında paylaşılıyor. Lütfen daha sonra
              tekrar kontrol edin.
            </p>
            <a
              href="/"
              className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg shadow"
            >
              Anasayfaya dön
            </a>
          </div>
        )}
      </div>
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
