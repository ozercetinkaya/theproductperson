// src/app/about.js
import AboutMe from '../components/AboutMe'; // AboutMe bileşenini import ediyoruz

const AboutPage = () => {
  return (
    <div>
      <AboutMe /> {/* AboutMe bileşenini burada render ediyoruz */}
    </div>
  );
};


export default function AboutPage() {
    return (
      <div>
        <AboutMe />
      </div>
    );
  }