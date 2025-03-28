import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="w-full bg-[#F8F5F2] text-center py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Illustration */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] -mt-32">
          <Image
            src="/illustration-under-construction-projects.svg"
            alt="Under Construction"
            fill
            className="object-contain scale-[0.88] translate-x-[32px]"
            priority
          />
        </div>

        {/* Text + Button shifted up */}
        <div className="translate-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold -mt-4 text-[#332E2E]">
            Projects section is under construction!
          </h2>
          <p className="mt-4 text-[#555] text-lg">
            I'm currently preparing a selection of projects that highlight my skills in frontend development, SQL, and design.
            You'll soon find examples of my work along with links to companies I've collaborated with in the past. Stay tuned—more updates are on the way!
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
