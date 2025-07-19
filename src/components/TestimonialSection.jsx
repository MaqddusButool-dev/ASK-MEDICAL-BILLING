import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Olivia Wilson",
    img: "https://via.placeholder.com/80",
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Shawn Garcia",
    img: "https://via.placeholder.com/80",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Pedro Fernandes",
    img: "https://via.placeholder.com/80",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Anna Taylor",
    img: "https://via.placeholder.com/80",
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Michael Smith",
    img: "https://via.placeholder.com/80",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // handle resize to dynamically change itemsToShow
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    // if we still have cards left beyond the visible range
    if (startIndex + itemsToShow < testimonials.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsToShow
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#13293d] via-[#1f3b57] to-[#03a9f4] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonial
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className={`absolute left-2 md:left-4 z-10 p-3 rounded-full shadow-lg bg-[#03a9f4] hover:bg-[#e91e63] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e91e63] ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={startIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 transition-all duration-300">
            {visibleTestimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white text-[#2c3e50] p-6 rounded-2xl shadow-lg max-w-sm w-full md:w-80 transition-transform hover:scale-105"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#03a9f4]"
                />
                <h3 className="text-lg font-semibold mb-1 text-center">
                  {t.name}
                </h3>
                <div className="flex justify-center text-[#e91e63] mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < t.stars ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic text-center">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`absolute right-2 md:right-4 z-10 p-3 rounded-full shadow-lg bg-[#03a9f4] hover:bg-[#e91e63] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e91e63] ${
              startIndex + itemsToShow >= testimonials.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={startIndex + itemsToShow >= testimonials.length}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}













// // src/components/TestimonialSection.jsx
// import { useState, useEffect } from "react";
// import { useSwipeable } from "react-swipeable";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     role: "Family Physician, Texas",
//     feedback:
//       "ASK Medical Billing transformed our revenue cycle. Their professionalism, transparency, and timely reporting helped us recover lost revenue and reduce administrative burden.",
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Lee",
//     role: "Cardiologist, California",
//     feedback:
//       "Since partnering with ASK, our billing is streamlined and efficient. Their team is always responsive, accurate, and HIPAA-compliant. Highly recommended!",
//   },
//   {
//     id: 3,
//     name: "Dr. Aisha Khan",
//     role: "Pediatrician, New York",
//     feedback:
//       "We’ve seen a significant improvement in cash flow and reduced claim denials. ASK’s customized solutions work perfectly for our busy clinic.",
//   },
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setFade(true), 200);
//     return () => clearTimeout(timer);
//   }, [current]);

//   const handleNext = () => {
//     setFade(false);
//     setTimeout(() => setCurrent((prev) => (prev + 1) % testimonials.length), 200);
//   };

//   const handlePrev = () => {
//     setFade(false);
//     setTimeout(() =>
//       setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length),
//       200
//     );
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//     preventScrollOnSwipe: true,
//     trackMouse: true,
//   });

//   return (
//     <section className="bg-[#1f3b57] text-white py-16 px-4 md:px-20 overflow-hidden">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
//           What Our Clients Say
//         </h2>
//         <p className="text-[#e0e0e0] animate-fade-in-up delay-200">
//           Hear directly from the healthcare professionals we support
//         </p>
//       </div>

//       <div className="relative flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#03a9f4] hover:bg-[#0288d1] text-white rounded-full z-10 transition sm:flex hidden"
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Testimonial Content */}
//         <div
//           {...swipeHandlers}
//           className={`max-w-3xl mx-auto text-center transition-opacity duration-500 ease-in-out animate-fade-in-up ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <p className="text-lg md:text-xl leading-relaxed text-[#e0e0e0]">
//             "{testimonials[current].feedback}"
//           </p>
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-white">
//               {testimonials[current].name}
//             </h4>
//             <span className="text-sm text-[#03a9f4]">
//               {testimonials[current].role}
//             </span>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#03a9f4] hover:bg-[#0288d1] text-white rounded-full z-10 transition sm:flex hidden"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }














// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Dr. Sarah Khan",
//     title: "Cardiologist, HealthCare+",
//     image: "/testimonials/client1.jpg",
//     message:
//       "ASK Medical Billing has transformed our practice. Their team is incredibly professional, responsive, and efficient. We've seen a 25% increase in our revenue!",
//     rating: 5,
//   },
//   {
//     name: "Dr. Ahmed Raza",
//     title: "Dental Surgeon, Smile Clinic",
//     image: "/testimonials/client2.jpg",
//     message:
//       "Reliable, accurate, and compliant. I can finally focus on patient care while ASK handles all the complexities of billing and insurance.",
//     rating: 5,
//   },
//   {
//     name: "Dr. Sana Malik",
//     title: "Neurologist, NeuroCare",
//     image: "/testimonials/client3.jpg",
//     message:
//       "Their reporting and transparency are unmatched. I always know where my revenue stands—highly recommended!",
//     rating: 4,
//   },
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);

//   const handleChange = (next) => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrent(next);
//       setFade(true);
//     }, 200);
//   };

//   const handlePrev = () => {
//     const prevIndex = current === 0 ? testimonials.length - 1 : current - 1;
//     handleChange(prevIndex);
//   };

//   const handleNext = () => {
//     const nextIndex = current === testimonials.length - 1 ? 0 : current + 1;
//     handleChange(nextIndex);
//   };

//   return (
//     <section className="bg-[#1f3b57] text-white py-20 px-4 md:px-20 relative overflow-hidden">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
//         <p className="text-[#e0e0e0] mt-3 max-w-xl mx-auto">
//           Trusted by healthcare providers across the USA for reliable and scalable medical billing solutions.
//         </p>
//       </div>

//       {/* Arrows (Hidden on mobile) */}
//       <button
//         onClick={handlePrev}
//         className="hidden sm:flex absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-[#03a9f4] hover:bg-[#0398dc] p-2 rounded-full z-10 transition"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>

//       <button
//         onClick={handleNext}
//         className="hidden sm:flex absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-[#03a9f4] hover:bg-[#0398dc] p-2 rounded-full z-10 transition"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>

//       {/* Testimonial Card */}
//       <div
//         className={`max-w-3xl mx-auto transition-opacity duration-500 ${
//           fade ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl text-center">
//           <div className="flex flex-col items-center gap-4">
//             <img
//               src={testimonials[current].image}
//               alt={testimonials[current].name}
//               className="w-20 h-20 rounded-full object-cover border-2 border-[#03a9f4]"
//             />
//             <h4 className="text-xl font-semibold text-white">
//               {testimonials[current].name}
//             </h4>
//             <p className="text-sm text-[#e0e0e0]">{testimonials[current].title}</p>
//             <p className="text-[#e0e0e0] italic max-w-xl">{testimonials[current].message}</p>
//             <div className="flex justify-center gap-1">
//               {[...Array(testimonials[current].rating)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 text-[#e91e63] fill-[#e91e63]" />
//               ))}
//               {[...Array(5 - testimonials[current].rating)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 text-gray-400" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
