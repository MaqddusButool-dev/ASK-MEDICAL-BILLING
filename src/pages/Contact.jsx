// src/pages/ContactPage.jsx
import { MapPin, Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
  
    <div className="bg-[#f9f9f9] text-[#2c3e50] py-20 px-4 md:px-20">
      
      {/* Section Container */}
      <div className="grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl relative">
        
        {/* Vertical Line */}
        <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-[1px] bg-[#e0e0e0] z-10"></div>

        {/* Contact Form */}
        <form className="space-y-6 z-20 md:pr-10">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03a9f4] bg-white shadow-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03a9f4] bg-white shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                placeholder="123-456-7890"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03a9f4] bg-white shadow-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03a9f4] bg-white shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#e91e63] hover:bg-[#d81b60] text-white font-semibold py-3 px-70 rounded-md transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 z-20 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-sm text-gray-700">
            Reach out to ASK Medical Billing for reliable, secure, and scalable healthcare billing solutions tailored to your needs.
          </p>
          <div className="space-y-5 mt-8">
            <div className="flex items-center gap-4">
              <Phone className="text-[#03a9f4]" />
              <span>+92-300-1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="text-[#03a9f4]" />
              <span>www.askmedicalbilling.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#03a9f4]" />
              <span>contact@askmedicalbilling.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#03a9f4]" />
              <span>Plot 123, Medical Zone, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Our Location</h3>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="ASK Medical Billing Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.258591501163!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzE0LjMiTiA3NMKwMjEnMzIuMSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
