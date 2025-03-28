import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#F8F5F2] text-[#332E2E] py-24 px-8 sm:px-16 md:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-12">
      
        {/* Illustration */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center -translate-x-12">
          <Image
            src="/illustration-main-page.svg" // kendi görseline göre güncelle
            alt="Illustration"
            width={360}
            height={360}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold mb-4">I'm Özer Çetinkaya</h2>
          <p className="text-xl mb-6">
            Product Person | Software Development & Cloud Solutions <br />
            UX/UI Design & Digital Experience | Tech Industry
          </p>
          <a
            href="/about"
            className="inline-flex items-center bg-[#FFE473] text-[#332E2E] font-semibold py-3 px-7 rounded-2xl shadow hover:bg-yellow-400 transition"
          >
            Go to About
            <ArrowRight className="ml-2 w-5 h-5 stroke-[2]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
