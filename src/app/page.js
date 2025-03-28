import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";




export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

/*<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
        <h1 className="text-4xl font-bold">The Product Person</h1>
        <p className="text-lg mt-4">Welcome to my personal website.</p>*/