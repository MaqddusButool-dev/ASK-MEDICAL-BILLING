// src/components/BillingAppointmentSection.jsx
import doctorImage from "../assets/hero1.jpg";

export default function BillingAppointmentSection() {
  return (
    <section className="bg-[#1f3b57]  rounded-[2rem] my-16 mx-4 md:mx-20 overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 text-white gap-10 md:gap-0">
        
        {/* Left Content with animation */}
        <div className="md:w-1/2 space-y-6 animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Comprehensive Medical Billing Services <br className="hidden md:block" /> Across the USA
          </h2>
          <p className="text-sm md:text-base text-[#e0e0e0]">
            ASK Medical Billing delivers complete, compliant, and client-focused RCM solutions. Whether you're a small practice or a large healthcare facility, we streamline your workflow — from coding and claim submissions to collections and reporting — so you stay focused on patient care.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#03a9f4] focus:border-[#03a9f4] shadow-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#03a9f4] focus:border-[#03a9f4] shadow-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#03a9f4] focus:border-[#03a9f4] shadow-sm col-span-1 md:col-span-2"
            />
            <button
              type="submit"
              className="bg-[#e91e63] hover:bg-[#d81b60] text-white font-semibold rounded-md py-3 col-span-1 md:col-span-2 transition duration-300 shadow-md"
            >
              Get An Appointment
            </button>
          </form>
        </div>

        {/* Right Image with animation */}
        <div className="md:w-1/2 flex justify-center animate-fade-in-right">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-full max-w-[320px] md:max-w-[400px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
