// src/components/HeroSlider.jsx
import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Your Trusted Medical Billing Partner",
    subtitle: "Maximize Revenue, Minimize Stress with ASK Medical Billing",
  },
  {
    id: 2,
    image: hero2,
    title: "End-to-End Revenue Cycle Management",
    subtitle: "Experience Seamless Billing and Patient Care Support",
  },
  {
    id: 3,
    image: hero3,
    title: "Secure, HIPAA-Compliant Solutions",
    subtitle: "Delivering Innovation with Reliability in Healthcare Billing",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[80vh] md:h-[90vh] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-[#1f3b57]/60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {slide.title}
        </h2>
        <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mb-6">
          {slide.subtitle}
        </p>
        <a
          href="https://calendly.com/alisajjadkamran/medical-billing-rcm-audit-with-askmedicalbilling?month=2025-07"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300"
        >
          Book a Free RCM Audit
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#e91e63] scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}


