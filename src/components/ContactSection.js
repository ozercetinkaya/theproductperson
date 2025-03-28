"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const res = await fetch("https://formspree.io/f/mkgjvryd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="bg-[#0095AF] text-[#332E2E] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Sol: Form */}
        <div className="w-full max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-lg mb-8 text-white">
            Want to collaborate or just say hello? Feel free to reach out!
          </p>

          {submitted ? (
            <div className="bg-white text-[#0095AF] p-8 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Thanks!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-[#ddd] rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-[#ddd] rounded-md"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full h-40 p-4 border border-[#ddd] rounded-md"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-[#FFE473] text-[#332E2E] font-semibold py-3 px-6 rounded-2xl shadow hover:bg-[#007A91] hover:text-white transition flex items-center gap-2 pr-6"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 stroke-[2]" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sağ: Logo ve Sosyal */}
<div className="w-[480px] h-[460px] bg-[#f8f5f2] rounded-3xl shadow-xl p-8 pt-6 flex flex-col items-center text-center ml-auto mr-16 mt-6 justify-between">
  {/* Logo */}
  <div className="w-[240px] h-[240px] relative -mt-12 mb-2">
    <Image src="/tpplogo2.svg" alt="Logo" fill className="object-contain" />
  </div>

  {/* Başlık ve Telif */}
  <div className="flex flex-col items-center -mt-16">
    <h3 className="text-3xl font-extrabold text-[#332E2E] mb-1">
      TheProductPerson
    </h3>
    <p className="text-base font-semibold text-[#333] mb-3 tracking-wide">
      DIGITAL PRODUCT MANAGEMENT
    </p>
    <p className="text-sm text-gray-500 mb-4">
      © {new Date().getFullYear()} - All rights reserved.
    </p>
  </div>

  {/* Sosyal İkonlar */}
  <div className="flex justify-center gap-8 text-3xl">
    <a href="https://www.instagram.com/ozercetinkaya/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-pink-700 transition">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/in/ozercetinkaya/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-blue-900 transition">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="mailto:ozercetinka@gmail.com" className="text-[#F87666] hover:text-[#e25a4f] transition-colors duration-300">
      <i className="fas fa-envelope"></i>
    </a>
  </div>
</div>




      </div>
    </section>
  );
};

export default ContactSection;
