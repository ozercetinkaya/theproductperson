"use client";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState, useEffect } from "react";



const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const experience = document.getElementById("experience");

      if (!about || !experience) return;

      const aboutTop = about.getBoundingClientRect().top;
      const experienceTop = experience.getBoundingClientRect().top;

      if (experienceTop < 100) {
        setActiveSection("experience");
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full bg-[#F8F5F2] text-[#332E2E] py-20 px-4">
      <div className="max-w-6xl mx-auto">


   {/* Ana grid */}
   <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-20 items-start">

  {/* Sol sabit içerik – mobilde de görünür */}
  <div className="flex md:sticky md:top-10 min-h-screen flex-col gap-12 px-6 md:px-8 pt-2 pb-4 bg-[#F8F5F2] text-[#332E2E]">
{/* Üst Bilgi */}
<div>
  <h1 className="text-5xl font-extrabold leading-tight mb-2">Özer Çetinkaya</h1>
  <h2 className="text-xl text-[#555] mb-8">Product Owner</h2>
  <p className="text-[#555] text-base leading-relaxed max-w-xs">
    I build user-driven, technically sound digital product experiences that connect strategy with real-world execution.
  </p>
</div>

{/* Navigation */}
<nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest mt-4">
  <a
    href="#about"
    className={`pl-4 border-l-2 ${
      activeSection === "about"
        ? "border-[#0095AF] text-[#332E2E]"
        : "border-transparent text-[#aaa] hover:text-[#332E2E] hover:border-[#0095AF]"
    }`}
  >
    About
  </a>
  <a
    href="#experience"
    className={`pl-4 border-l-2 ${
      activeSection === "experience"
        ? "border-[#0095AF] text-[#332E2E]"
        : "border-transparent text-[#aaa] hover:text-[#332E2E] hover:border-[#0095AF]"
    }`}
  >
    Experience
  </a>

  <div className="pt-4">
    <a
      href="/ozer-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#0095AF] hover:bg-[#007A91] text-white font-semibold py-3 px-6 rounded-xl shadow transition"
    >
      Download CV (PDF)
    </a>
  </div>
</nav>
</div>




{/* Sağ içerik */}
<div className="md:col-span-1 max-w-[700px] w-full space-y-8 text-base leading-relaxed text-[#332E2E]">

{/* Tanıtım Metni */}
 <div className="space-y-4">
  <div id="about" className="scroll-mt-10 mb-12">
  <p>
  Results-oriented Product Owner with over six years of experience leading the development of digital, web, and mobile products. Skilled in agile methodologies, backlog management, and cross-functional team collaboration—aligning backend, frontend, and mobile teams through stand-ups, retrospectives, and clear communication.
 </p>
 <p>
  Certified as an AWS Cloud Practitioner, with a solid understanding of cloud fundamentals and how they support product innovation. Proficient in SQL for extracting insights to guide decision-making, and experienced in collaborating with UX/UI designers, developers, and marketing teams to create seamless user experiences.
  </p>
   <p>
  Combining a user-centered mindset with technical fluency, I leverage AI-driven insights, user research, usability testing, and high-fidelity wireframes (Figma) to drive product improvements. Passionate about problem-solving, innovation, and continuous growth, I aim to contribute to meaningful and impactful product journeys.
  </p>
  <p>
  In my spare time, I enjoy playing basketball, running, reading, hanging out with loved ones, and diving into video games.
  </p>
 </div>
 </div>

            {/* Deneyimler */}
<div id="experience" className="scroll-mt-10 space-y-8">

{/* Endeksa */}
      <a
      href="https://www.endeksa.com" // ya da "#" koyabilirsin
      target="_blank"
      rel="noopener noreferrer"
      className="block group rounded-xl border border-[#e0e0e0] hover:border-[#0095AF] hover:bg-[#f0fbfd] transition p-6">
       <div className="flex items-center justify-between">
       <div className="flex items-center gap-3">
       <Image
        src="/endeksa-logo.svg"
        alt="Endeksa Logo"
        width={144}
        height={36}
        className="object-contain"
      />
      <span className="text-md font-semibold text-[#332E2E]">
        - Product Owner (2022/2024)
        {/* Sağ üstte hover ile çıkan ok */}
      </span>
      <SquareArrowOutUpRight className="w-5 h-5 text-[#0095AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
       </div>
      </div>

     {/* Açıklama */}
     <p className="mt-4">
     Endeksa is a tech startup specializing in online real estate valuation, dedicated to providing innovative solutions in the property market. I worked with a software team of more than 15 members including backend, frontend, and mobile developers.
     </p>
  
      {/* Madde listesi */}
     <ul className="list-disc pl-5 mt-2 space-y-1">
     <li>Conducted daily stand-ups and retrospective meetings with backend, frontend, and mobile teams.</li>
     <li>Held weekly meetings with the customer experience team to collect feedback and produce technical or design specs for the product. Improved user experience by creating high-fidelity wireframes with Figma.</li>
     <li>Completed the redesign process of Endeksa's mobile app from scratch in collaboration with mobile developers and designers, resulting in a 550% increase in active users.</li>
      <li>Played a key role in enhancing Endeksa Atlas, integrating AI-powered market analysis and property valuation features.</li>
      <li>Organized vital developments and customizations for Spain and Portugal markets, coordinating product development and go to market activities.</li>
     </ul>
    </a>
    </div>

{/* ⭐️ Kbox Global */}
<a
  href="https://www.linkedin.com/company/kboxglobal/posts/"
  target="_blank"
  rel="noopener noreferrer"
  className="block group rounded-xl border border-[#e0e0e0] hover:border-[#0095AF] hover:bg-[#f0fbfd] transition p-6"
>
  {/* Başlık kısmı: logo + pozisyon + ikon */}
  <div className="flex items-center gap-3">
    <Image
      src="/kboxglobal_logo.jpeg"
      alt="Kbox Global Logo"
      width={68}
      height={24}
      className="object-contain"
    />
    <span className="text-md font-semibold text-[#332E2E]">
      - Product Owner (2020/2022)
    </span>
    <SquareArrowOutUpRight className="w-5 h-5 text-[#0095AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
  </div>

  {/* Açıklama */}
  <p className="mt-4">
  Kbox Global is a food delivery startup focused on connecting restaurants with
consumers. I worked in a software development team of over 20 developers, including
backend and frontend.
  </p>

  {/* Liste */}
  <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>Conducted daily stand-ups and retrospective meetings with backend, frontend, and mobile teams.</li>
    <li>Organized necessary developments to provide a smoother experience for direct-to-consumers web application.</li>
    <li>Managed the API connections to synchronize restaurant menus with major food delivery platforms, including UberEats, Deliveroo, and DoorDash.</li>
    <li>Served as the primary point of contact between the Kbox Global team in the UK and food aggregators' integration teams in both the UK and US.</li>
    <li>Developed direct-to-consumer channels and organized vital developments to enhance the user experience for the application, enabling seamless food delivery to customers.</li>
  </ul>
</a>


{/* ⭐️ Userspots */}
            {/* ⭐️ Userspots */}
<a
  href="https://www.userspots.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="block group rounded-xl border border-[#e0e0e0] hover:border-[#0095AF] hover:bg-[#f0fbfd] transition p-6"
>
  {/* Başlık kısmı: logo + pozisyon + ikon */}
  <div className="flex items-center gap-3">
    <Image
      src="/userspots-logo.svg"
      alt="Userspots Logo"
      width={144}
      height={36}
      className="object-contain"
    />
    <span className="text-md font-semibold text-[#332E2E]">
      - Project Manager (2018/2020)
    </span>
    <SquareArrowOutUpRight className="w-5 h-5 text-[#0095AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
  </div>

  {/* Açıklama */}
  <p className="mt-4">
  As a Project Manager at Userspots, one of Turkey's leading UX/UI design agencies, I managed over 19 projects, managing scoping meetings, prioritizing user experience
  design, and ensuring timely deliverables.
  </p>

  {/* Liste */}
  <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>Managed more than 19 redesign projects as a Project Manager at Userspots.</li>
    <li>Conducted scoping meetings with clients, prioritizing user experience research and overseeing design work.</li>
    <li>Conducted four UX research projects as a precursor to later stage UX redesign
        sprints, delivering high-quality project outputs within timelines to ensure client
        satisfaction.</li>
    <li>Additionally, I contributed to innovation projects (IoX Digital), design thinking
       and MVP workshops with different companies.</li>
  </ul>
</a>


  {/* ⭐️ DesignTool */}
<div className="block group rounded-xl border border-[#e0e0e0] hover:border-[#0095AF] hover:bg-[#f0fbfd] transition p-6 cursor-default">
  {/* Başlık kısmı: logo + pozisyon + ikon */}
  <div className="flex items-center gap-3">
    <Image
      src="/designtool-logo.svg" // dosya adını uzantıya göre değiştir
      alt="DesignTool Logo"
      width={136}
      height={32}
      className="object-contain"
    />
    <span className="text-md font-semibold text-[#332E2E]">
      - Project Manager (2017/2018)
    </span>
    <SquareArrowOutUpRight className="w-5 h-5 text-[#0095AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
  </div>

  {/* Açıklama */}
  <p className="mt-4">
    I was responsible for end-to-end customer projects for LG Electronics. I coordinated the projects from ideation phase, to planning, technical drawing and all the way to the physical implementation phase.
  </p>

  {/* Liste */}
  <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>Managed end-to-end customer projects, coordinating from ideation through planning, technical drawings, and physical implementation.</li>
    <li>Oversaw the installation of campaign fields at shopping malls and commercial launch events, ensuring seamless execution and client satisfaction.</li>
  </ul>
</div>



  {/* ⭐️ Intema */}

<a
  href="https://www.intemamutfak.com.tr/"
  target="_blank"
  rel="noopener noreferrer"
  className="block group rounded-xl border border-[#e0e0e0] hover:border-[#0095AF] hover:bg-[#f0fbfd] transition p-6"
>
  {/* Başlık: Logo + pozisyon + ok */}
  <div className="flex items-center justify-between">
  {/* Sol: logo + pozisyon */}
  <div className="flex items-center gap-3">
    <Image
      src="/intema-logo.svg"
      alt="Intema Logo"
      width={68}
      height={24}
      className="object-contain"
    />
    <span className="text-md font-semibold text-[#332E2E]">
      - Project Manager (2016/2017)
    </span>
      {/* Sağ üst: hover ile çıkan ok */}
  <SquareArrowOutUpRight className="w-5 h-5 text-[#0095AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
  </div>


</div>

  {/* Açıklama */}
  <p className="mt-4">
    Eczacibaşi is one of the largest and most respected companies in Turkey, specializing in pharmaceuticals, consumer products, and building materials. I worked there as a project manager on departmental digital transformation projects.
  </p>

  {/* Liste */}
  <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>As a specialist within the HR organization, I successfully transitioned manual processes to a digitalization using proprietary software and shared Excel sheets, significantly reducing inefficiencies.</li>
    <li>I organized internal events and workshops, ensuring effective internal communication while managing the company’s fleet.</li>
  </ul>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutPage;