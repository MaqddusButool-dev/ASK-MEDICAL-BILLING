import React, { useState } from "react";
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

  return (
    <main className="bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3b57]">
            Our Medical Billing & RCM Services
          </h2>
          <p className="text-lg mt-4 text-[#1f3b57] max-w-3xl mx-auto">
            Streamline your healthcare practice and boost financial performance with our full-spectrum medical billing and revenue cycle solutions.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-6 md:p-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3 border-r border-blue-100 pr-4">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center px-4 py-3 rounded-lg w-full text-left text-base md:text-lg transition duration-300 font-medium tracking-wide
                    ${
                      activeIndex === idx
                        ? "bg-blue-50 text-[#0288D1] shadow-sm"
                        : "text-gray-700 hover:bg-blue-50/50"
                    }`}
                >
                  <CheckCircle className="mr-3 text-[#0288D1]" />
                  {service.title}
                </button>
              ))}
            </div>

            <div className="md:col-span-2 pl-0 md:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-800"
                >
                  <h3 className="text-3xl font-semibold text-[#1f3b57] mb-6">
                    {services[activeIndex].title}
                  </h3>
                  <ul className="space-y-5 text-base md:text-lg">
                    {services[activeIndex].description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#03a9f4] mr-3 mt-1">✔</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-[#1f3b57] to-[#13293d] rounded-3xl shadow-inner p-10 text-center relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

          <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-white">
            Why Choose ASK Medical Billing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Partnering with us means fewer headaches and higher collections—all with full transparency, responsive communication, and dedicated support.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </main>
  );
}






















// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ActivitySquare,
//   ShieldCheck,
//   ClipboardCheck,
//   FileCheck2,
//   DollarSign,
//   UserCheck,
// } from "lucide-react";

// const services = [
//   {
//     title: "Medical Billing",
//     icon: <DollarSign className="w-5 h-5 mr-2 text-[#0288D1]" />,
//     description: [
//       "We manage claims processing, submission, and follow-ups to ensure faster reimbursements and fewer denials.",
//       "We ensure every claim is correctly submitted with accurate documentation.",
//       "Our billing team minimizes delays and maximizes revenue collection for your practice.",
//     ],
//   },
//   {
//     title: "Medical Coding",
//     icon: <FileCheck2 className="w-5 h-5 mr-2 text-[#0288D1]" />,
//     description: [
//       "Our certified coders use the latest ICD-10, CPT, and HCPCS codes.",
//       "We reduce coding errors that lead to claim denials.",
//       "We maintain compliance with payer policies and healthcare regulations.",
//     ],
//   },
//   {
//     title: "AR Management",
//     icon: <ActivitySquare className="w-5 h-5 mr-2 text-[#0288D1]" />,
//     description: [
//       "We track outstanding claims and aggressively follow up on unpaid bills.",
//       "Customized aging reports highlight the performance of your receivables.",
//       "Our goal is to minimize aging AR and improve financial outcomes.",
//     ],
//   },
//   {
//     title: "Credentialing",
//     icon: <UserCheck className="w-5 h-5 mr-2 text-[#0288D1]" />,
//     description: [
//       "We help providers enroll and stay current with insurance networks.",
//       "We handle CAQH updates, revalidations, and document management.",
//       "You get timely alerts and guidance through the entire credentialing process.",
//     ],
//   },
//   {
//     title: "Denial Management",
//     icon: <ShieldCheck className="w-5 h-5 mr-2 text-[#0288D1]" />,
//     description: [
//       "We analyze denial reasons and implement corrective actions.",
//       "Appeals are managed quickly to recover lost revenue.",
//       "We prevent recurring denials through root-cause analysis and training.",
//     ],
//   },
// ];

// export default function ServicesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     // <main className="bg-[#E3F2FD] min-h-screen py-24 px-6">
//     //   <div className="max-w-7xl mx-auto">
//     //     <h2 className="text-4xl md:text-5xl font-bold text-center text-[#01579B] mb-16">
//     //       Our Specialized Services
//     //     </h2>

//     //     <div className="grid md:grid-cols-3 gap-10">
//     //       {/* Left Navigation */}
//     //       <div className="space-y-2">
//     //         {services.map((service, idx) => (
//     //           <button
//     //             key={idx}
//     //             onClick={() => setActiveIndex(idx)}
//     //             className={`flex items-center px-4 py-3 rounded-lg w-full text-left text-lg transition duration-300 font-medium tracking-wide
//     //               ${
//     //                 activeIndex === idx
//     //                   ? "bg-white shadow-md text-[#0288D1]"
//     //                   : "text-gray-700 hover:bg-white/70"
//     //               }`}
//     //           >
//     //             {service.icon}
//     //             {service.title}
//     //           </button>
//     //         ))}
//     //       </div>

//     //       {/* Right Content */}
//     //       <div className="md:col-span-2">
//     //         <AnimatePresence mode="wait">
//     //           <motion.div
//     //             key={activeIndex}
//     //             initial={{ opacity: 0, y: 20 }}
//     //             animate={{ opacity: 1, y: 0 }}
//     //             exit={{ opacity: 0, y: -20 }}
//     //             transition={{ duration: 0.5 }}
//     //             className="bg-white rounded-xl p-8 shadow-lg text-gray-800"
//     //           >
//     //             <h3 className="text-3xl font-semibold text-[#0288D1] mb-6">
//     //               {services[activeIndex].title}
//     //             </h3>
//     //             <ul className="space-y-5 text-lg">
//     //               {services[activeIndex].description.map((point, i) => (
//     //                 <li key={i} className="flex items-start">
//     //                   <span className="text-[#0288D1] mr-3 mt-1">✔</span>
//     //                   <p>{point}</p>
//     //                 </li>
//     //               ))}
//     //             </ul>
//     //           </motion.div>
//     //         </AnimatePresence>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </main>
//     <main className="bg-[#E3F2FD] min-h-screen py-24 px-4">
//   <div className="max-w-7xl mx-auto">
//     <h2 className="text-4xl md:text-5xl font-bold text-center text-[#01579B] mb-16">
//       Our Specialized Services
//     </h2>

//     {/* Combined Card */}
//     <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-6 md:p-12">
//       <div className="grid md:grid-cols-3 gap-10">
//         {/* Left Navigation */}
//         <div className="space-y-3 border-r border-blue-100 pr-4">
//           {services.map((service, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveIndex(idx)}
//               className={`flex items-center px-4 py-3 rounded-lg w-full text-left text-base md:text-lg transition duration-300 font-medium tracking-wide
//                 ${
//                   activeIndex === idx
//                     ? "bg-blue-50 text-[#0288D1] shadow-sm"
//                     : "text-gray-700 hover:bg-blue-50/50"
//                 }`}
//             >
//               {service.icon}
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Right Content */}
//         <div className="md:col-span-2 pl-0 md:pl-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="text-gray-800"
//             >
//               <h3 className="text-3xl font-semibold text-[#0288D1] mb-6">
//                 {services[activeIndex].title}
//               </h3>
//               <ul className="space-y-5 text-base md:text-lg">
//                 {services[activeIndex].description.map((point, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="text-[#0288D1] mr-3 mt-1">✔</span>
//                     <p>{point}</p>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>

//   );
// }



































// import React from "react";
// import { CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "End-to-End Medical Billing",
//       description:
//         "Complete management of the billing process—from claim creation and submission to payment posting and follow-ups.",
//     },
//     {
//       title: "Revenue Cycle Management (RCM)",
//       description:
//         "Optimize your practice's cash flow through accurate coding, denial management, and streamlined workflows.",
//     },
//     {
//       title: "Insurance Verification & Authorization",
//       description:
//         "Ensure eligibility and obtain prior authorizations quickly and efficiently.",
//     },
//     {
//       title: "Payment Posting & Reconciliation",
//       description:
//         "Track and post payments accurately to maintain financial clarity and ensure proper accounting.",
//     },
//     {
//       title: "Denial Management",
//       description:
//         "Analyze and appeal claim denials to reduce revenue leakage and increase collection rates.",
//     },
//     {
//       title: "Credentialing & Compliance Support",
//       description:
//         "Assistance with provider credentialing, payer enrollments, and maintaining regulatory compliance.",
//     },
//     {
//       title: "Patient Billing & Support",
//       description:
//         "Clear, timely, and professional patient statements and billing support for better patient satisfaction.",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#13293d] via-[#1f3b57] to-[#03a9f4] text-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
//             Our Medical Billing & RCM Services
//           </h1>
//           <div className="mx-auto w-24 h-1 bg-pink-500 rounded-full mb-6"></div>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
//             All services are tailored to the specific needs of your practice—whether small or large, specialty or general.
//           </p>
//         </motion.div>

//         {/* Service Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-white to-gray-50 text-[#2c3e50] rounded-3xl shadow-xl p-6 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//             >
//               {/* Decorative background hover effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

//               <div className="flex items-center mb-4 relative z-10">
//                 <CheckCircle className="text-[#03a9f4] w-8 h-8 mr-3" />
//                 <h2 className="text-xl font-semibold text-[#1f3b57] group-hover:text-pink-600 transition-colors duration-300">
//                   {service.title}
//                 </h2>
//               </div>
//               <p className="text-gray-700 leading-relaxed relative z-10">
//                 {service.description}
//               </p>

//               {/* Hover underline animation */}
//               <div className="absolute bottom-4 left-6 h-[3px] w-0 bg-pink-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-24 bg-gradient-to-r from-[#1f3b57] to-[#13293d] rounded-3xl shadow-inner p-10 text-center relative overflow-hidden"
//         >
//           {/* Decorative glow */}
//           <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

//           <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
//             Why Choose ASK Medical Billing?
//           </h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
//             Partnering with us means fewer headaches and higher collections—all with full transparency, responsive communication, and dedicated support.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
//           >
//             Get Started Today
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



















// import React from "react";
// import { CheckCircle } from "lucide-react"; // For icons, make sure lucide-react is installed
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "End-to-End Medical Billing",
//       description:
//         "Complete management of the billing process—from claim creation and submission to payment posting and follow-ups.",
//     },
//     {
//       title: "Revenue Cycle Management (RCM)",
//       description:
//         "Optimize your practice's cash flow through accurate coding, denial management, and streamlined workflows.",
//     },
//     {
//       title: "Insurance Verification & Authorization",
//       description:
//         "Ensure eligibility and obtain prior authorizations quickly and efficiently.",
//     },
//     {
//       title: "Payment Posting & Reconciliation",
//       description:
//         "Track and post payments accurately to maintain financial clarity and ensure proper accounting.",
//     },
//     {
//       title: "Denial Management",
//       description:
//         "Analyze and appeal claim denials to reduce revenue leakage and increase collection rates.",
//     },
//     {
//       title: "Credentialing & Compliance Support",
//       description:
//         "Assistance with provider credentialing, payer enrollments, and maintaining regulatory compliance.",
//     },
//     {
//       title: "Patient Billing & Support",
//       description:
//         "Clear, timely, and professional patient statements and billing support for better patient satisfaction.",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#1f3b57] to-[#03a9f4] text-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Medical Billing & RCM Services
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
//             All services are tailored to the specific needs of your practice—whether small or large, specialty or general.
//           </p>
//         </motion.div>

//         {/* Service Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white text-[#2c3e50] rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
//             >
//               <div className="flex items-center mb-4">
//                 <CheckCircle className="text-[#03a9f4] w-8 h-8 mr-3" />
//                 <h2 className="text-xl font-semibold text-[#1f3b57]">
//                   {service.title}
//                 </h2>
//               </div>
//               <p className="text-gray-700 leading-relaxed flex-grow">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-[#1f3b57] rounded-2xl shadow-inner p-8 text-center"
//         >
//           <h2 className="text-3xl font-bold mb-4">Why Choose ASK Medical Billing?</h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
//             Partnering with us means fewer headaches and higher collections—all with full transparency, responsive communication, and dedicated support.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-[#e91e63] hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
//           >
//             Get Started Today
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
