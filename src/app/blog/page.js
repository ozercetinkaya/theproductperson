import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="w-full bg-[#F8F5F2] text-center py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Illustration */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] -mt-28">
          <Image
            src="/illustration-under-construction.svg"
            alt="Under Construction"
            fill
            className="object-contain -translate-y-[16px]"
            priority
          />
        </div>

        {/* Text + Button shifted up */}
        <div className="-translate-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold mt-8 text-[#332E2E]">
            Blog is under construction 🚧
          </h2>
          <p className="mt-2 text-[#555] text-lg">
            Stay tuned — articles, ideas and experiments are coming soon!
          </p>

          {/* Return Home Button */}
          <Link
            href="/"
            className="inline-block mt-6 bg-[#0095AF] hover:bg-[#007A91] text-white font-semibold py-3 px-8 rounded-2xl shadow transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
