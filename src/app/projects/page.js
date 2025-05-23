import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-between bg-[#F8F5F2] text-center py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Illustration */}
        <div className="relative w-full h-[200px] sm:h-[280px] md:h-[340px] -mt-6">
          <Image
            src="/illustration-under-construction-projects.svg"
            alt="Under Construction"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text + Button */}
        <div className="mt-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#332E2E]">
            Projects section is under construction!
          </h2>
          <p className="mt-2 text-[#555] text-lg">
            I'm currently preparing a selection of projects that highlight my skills in frontend development, SQL, and design.
            You'll soon find examples of my work along with links to companies I've collaborated with in the past. Stay tuned—more updates are on the way!
          </p>
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
