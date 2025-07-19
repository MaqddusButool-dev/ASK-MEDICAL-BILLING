import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "End-to-End Medical Billing",
      description: [
        "Complete management of the billing process—from claim creation and submission to payment posting and follow-ups."
      ]
    },
    {
      title: "Revenue Cycle Management (RCM)",
      description: [
        "Optimize your practice's cash flow through accurate coding, denial management, and streamlined workflows."
      ]
    },
    {
      title: "Insurance Verification & Authorization",
      description: [
        "Ensure eligibility and obtain prior authorizations quickly and efficiently."
      ]
    },
    {
      title: "Payment Posting & Reconciliation",
      description: [
        "Track and post payments accurately to maintain financial clarity and ensure proper accounting."
      ]
    },
    {
      title: "Denial Management",
      description: [
        "Analyze and appeal claim denials to reduce revenue leakage and increase collection rates."
      ]
    },
    {
      title: "Credentialing & Compliance Support",
      description: [
        "Assistance with provider credentialing, payer enrollments, and maintaining regulatory compliance."
      ]
    },
    {
      title: "Patient Billing & Support",
      description: [
        "Clear, timely, and professional patient statements and billing support for better patient satisfaction."
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen py-5 ">
      <div className="max-w-7xl mx-auto">
       
        {/* Calendly Booking */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1f3b57] text-center mb-6">
            {/* Book a Free RCM Audit with Us */}
            Comprehensive Medical Billing Services <br className="hidden md:block" /> Across the USA
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mb-6">
            {/* Schedule a call with our specialists to discover how we can improve your revenue cycle and increase collections with ease. */}
             ASK Medical Billing delivers complete, compliant, and client-focused RCM solutions. Whether you're a small practice or a large healthcare facility, we streamline your workflow — from coding and claim submissions to collections and reporting — so you stay focused on patient care.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/alisajjadkamran/medical-billing-rcm-audit-with-askmedicalbilling"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </div>
    </main>
  );
}













// import { useEffect } from "react";

// export default function CalendlyInline() {
//   useEffect(() => {
//     // Dynamically load Calendly script
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup if component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget"
//       data-url="https://calendly.com/alisajjadkamran/medical-billing-rcm-audit-with-askmedicalbilling"
//       style={{ minWidth: "320px", height: "700px" }}
//     ></div>
//   );
// }
















// import { useEffect } from "react";

// export default function CalendlyBadge() {
//   useEffect(() => {
//     // Create and append the CSS link
//     const link = document.createElement("link");
//     link.href = "https://assets.calendly.com/assets/external/widget.css";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     // Create and append the script
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Calendly) {
//         window.Calendly.initBadgeWidget({
//           url: "https://calendly.com/alisajjadkamran/medical-billing-rcm-audit-with-askmedicalbilling",
//           text: "Schedule time with me",
//           color: "#0069ff",
//           textColor: "#ffffff",
//           branding: true,
//         });
//       }
//     };
//     document.body.appendChild(script);

//     // Cleanup on unmount
//     return () => {
//       document.head.removeChild(link);
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null; // No UI needed, the badge appears automatically
// }
