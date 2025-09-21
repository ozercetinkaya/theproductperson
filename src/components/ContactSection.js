"use client";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "./contact/actions";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clientAction = async (formData) => {
    try {
      await sendContactForm(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form gönderimi başarısız oldu:", error);
      setIsSubmitted(false); // Hata durumunda gönderimi false yap
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0095AF] text-[#332E2E] py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Sol: Form */}
        <div className="w-full max-w-lg pl-6 md:pl-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-lg mb-8 text-white">
            Want to collaborate or just say hello? Feel free to reach out!
          </p>

          {isSubmitted ? (
            <div className="bg-white text-[#0095AF] p-8 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Thanks!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form action={clientAction} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-[#ddd] rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-[#ddd] rounded-md"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full h-40 p-4 border border-[#ddd] rounded-md"
                required
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

        {/* Sağ: Logo & Info (mobilde daha kompakt) */}
        <div className="w-full md:max-w-md bg-[#f8f5f2] rounded-3xl shadow-xl p-6 flex flex-col items-center text-center mx-auto md:ml-24">
          <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] relative mb-4">
            <Image
              src="/tpplogo2.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#332E2E]">
            TheProductPerson
          </h3>
          <p className="text-sm sm:text-base font-semibold text-[#333] mb-2 tracking-wide">
            DIGITAL PRODUCT MANAGEMENT
          </p>
          <p className="text-xs text-gray-500 mb-4">
            © {new Date().getFullYear()} - All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-2xl sm:text-3xl">
            <a
              href="https://www.instagram.com/ozercetinkaya/"
              target="_blank"
              className="text-[#E1306C] hover:text-pink-700 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ozercetinkaya/"
              target="_blank"
              className="text-[#0A66C2] hover:text-blue-900 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:ozercetinka@gmail.com"
              className="text-[#F87666] hover:text-[#e25a4f] transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
