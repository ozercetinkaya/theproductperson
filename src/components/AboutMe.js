// src/components/AboutMe.js
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="py-12 px-32 bg-[#f8f5f2]">
      <div className="flex items-center gap-10">
        {/* Fotoğraf kısmı */}
        <div className="w-1/3">
          <Image
            src="/profile.jpg" // Burada doğru resim yolunu verin
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        
        {/* Yazı kısmı */}
        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-[#332E2E] mb-4">I'm Özer Çetinkaya</h1>
          <p className="text-lg text-gray-700 mb-4">
            I’m a passionate product manager, software developer, and UX/UI designer. 
            I focus on creating user-centric products that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
