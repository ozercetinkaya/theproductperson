import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-auto sm:h-[600px] bg-[#FFE473] border-l-2 border-[#0095AF] px-4 sm:px-[80px] pt-[0px] flex flex-col sm:flex-row items-center justify-between overflow-hidden">
      
      {/* Yazı alanı */}
      <div className="max-w-2xl sm:mr-auto sm:ml-[80px] pt-8 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#332E2E] mb-4">
          Listening, Data, and AI for Smarter Products
        </h1>
        <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
          As a product manager, I collaborate closely with designers and developers to understand challenges from every angle. Each discussion shapes intuitive, user-friendly solutions. I combine UX research with data-driven decisions, using AI to optimize workflows and enhance product performance. Continuous learning, supported by design exploration and AI-driven insights, keeps our products evolving and delivering exceptional user experiences.
        </p>
        <a
          href="/blog"
          className="mt-8 inline-flex items-center bg-[#0095AF] text-white font-semibold py-3 px-7 rounded-2xl shadow hover:bg-[#007A91] transition"
        >
          Start Reading
          <ArrowRight className="ml-2 w-6 h-6 stroke-[2]" />
        </a>
      </div>

      {/* Fotoğraf */}
      <img
  src="/ozer-photo-hero.png"
  alt="Özer Çetinkaya"
  className="absolute bottom-20 right-36 w-[380px] h-auto object-contain hide-under-1212"
/>

    </section>
  );
};

export default Hero;
