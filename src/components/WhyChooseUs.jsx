import React from "react";
import { ShieldCheck, Clock, Settings, BarChart3, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#03a9f4]" />,
      title: "HIPAA-Compliant & Secure",
      description:
        "We prioritize your patients’ privacy with HIPAA-compliant processes and advanced data security protocols.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#03a9f4]" />,
      title: "Faster Reimbursements",
      description:
        "Accelerate your revenue flow with optimized billing cycles, quicker claim submissions, and reduced denials.",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#03a9f4]" />,
      title: "Customized Solutions",
      description:
        "Every practice is unique—we tailor our services to match your specialty and workflow.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#03a9f4]" />,
      title: "Transparent Reporting",
      description:
        "Stay informed with clear metrics, detailed reports, and open communication.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f8f9fc] py-16 px-4 overflow-x-hidden overflow-y-hidden">
      {/* Decorative background accents */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#007bff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#e91e63]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[#1f3b57] mb-2">
            Why <span className="text-[#03a9f4]">Choose</span> Us?
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#e91e63] rounded-full mb-4"></div>
          <p className="text-lg text-[#2c3e50]/80 max-w-2xl mx-auto">
            With ASK Medical Billing, you get more than just a billing service —
            you get a trusted partner focused on your growth and data protection.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f3b57] group-hover:text-[#e91e63] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-[#2c3e50]/70 mt-2 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 h-[2px] w-0 bg-[#e91e63] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-base md:text-lg text-[#2c3e50]/80 mb-5">
            📞 Contact us today to streamline your billing process and boost your profitability.
          </p>
          <a
            href="/BookAppointment"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e91e63] to-[#e91e63]/90 hover:from-[#e91e63]/90 hover:to-[#e91e63]/80 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <PhoneCall className="w-5 h-5" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}


















// import React from "react";
// import { ShieldCheck, Clock, Settings, BarChart3, PhoneCall } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <ShieldCheck className="w-8 h-8 text-[#03a9f4]" />,
//       title: "HIPAA-Compliant & Secure",
//       description:
//         "We prioritize your patients’ privacy with HIPAA-compliant processes and advanced data security protocols.",
//     },
//     {
//       icon: <Clock className="w-8 h-8 text-[#03a9f4]" />,
//       title: "Faster Reimbursements",
//       description:
//         "Accelerate your revenue flow with optimized billing cycles, quicker claim submissions, and reduced denials.",
//     },
//     {
//       icon: <Settings className="w-8 h-8 text-[#03a9f4]" />,
//       title: "Customized Solutions",
//       description:
//         "Every practice is unique—we tailor our services to match your specialty and workflow.",
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8 text-[#03a9f4]" />,
//       title: "Transparent Reporting",
//       description:
//         "Stay informed with clear metrics, detailed reports, and open communication.",
//     },
//   ];

//   return (
//     <section className="relative bg-white py-16 px-4">
//       {/* Decorative accents */}
//       <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#03a9f4]/15 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#e91e63]/15 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1f3b57] mb-3">
//             Why Choose Us?
//           </h2>
//           <div className="mx-auto w-16 h-1 bg-[#e91e63] rounded-full mb-4"></div>
//           <p className="text-base md:text-lg text-[#2c3e50]/80 max-w-2xl mx-auto leading-relaxed">
//             With ASK Medical Billing, you get more than just a billing service —
//             you get a trusted partner dedicated to protecting your data and growing your practice.
//           </p>
//         </motion.div>

//         {/* Features */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="group bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="mb-3">{feature.icon}</div>
//               <h3 className="text-lg font-semibold text-[#1f3b57] mb-2 group-hover:text-[#e91e63] transition-colors duration-300">
//                 {feature.title}
//               </h3>
//               <p className="text-sm text-[#2c3e50]/70 leading-relaxed">
//                 {feature.description}
//               </p>
//               <div className="mt-4 h-[2px] w-0 bg-[#e91e63] rounded-full group-hover:w-12 transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-16 text-center"
//         >
//           <p className="text-base md:text-lg text-[#2c3e50]/80 mb-5">
//             📞 Contact us today to streamline your billing process and boost your profitability.
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e91e63] to-[#e91e63]/90 hover:from-[#e91e63]/90 hover:to-[#e91e63]/80 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
//           >
//             <PhoneCall className="w-5 h-5" />
//             Get in Touch
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




























// import React from "react";
// import { ShieldCheck, Clock, Settings, BarChart3, PhoneCall } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <ShieldCheck className="w-10 h-10 text-[#03a9f4]" />,
//       title: "HIPAA-Compliant & Secure",
//       description:
//         "We prioritize your patients’ privacy with robust HIPAA-compliant processes and advanced data security protocols.",
//     },
//     {
//       icon: <Clock className="w-10 h-10 text-[#03a9f4]" />,
//       title: "Faster Reimbursements",
//       description:
//         "Accelerate your revenue flow with optimized billing cycles, quicker claim submissions, and reduced denials.",
//     },
//     {
//       icon: <Settings className="w-10 h-10 text-[#03a9f4]" />,
//       title: "Customized Solutions",
//       description:
//         "Every practice is unique—we tailor our services to meet your specialty, workflow, and operational needs.",
//     },
//     {
//       icon: <BarChart3 className="w-10 h-10 text-[#03a9f4]" />,
//       title: "Transparent Reporting",
//       description:
//         "Stay informed with detailed reporting, clear metrics, and open communication at every step.",
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-[#224a6e] via-[#1f3b57] to-[#03a9f4] text-white py-20 px-4 overflow-hidden">
//       {/* Decorative blurred shapes */}
//       <div className="absolute -top-16 -left-16 w-60 h-60 bg-pink-500/30 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
//             Why Choose Us?
//           </h2>
//           <div className="mx-auto w-24 h-1 bg-pink-500 rounded-full mb-6"></div>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
//             With ASK Medical Billing, you get more than just a billing service—  
//             you get a partner dedicated to streamlining your revenue cycle, protecting your data, and empowering your practice’s growth.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-200 leading-relaxed">{feature.description}</p>
//               {/* Hover accent */}
//               <div className="absolute bottom-4 left-6 h-[3px] w-0 bg-pink-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
//             📞 Contact us today to streamline your billing process and boost your practice’s profitability.
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
//           >
//             <PhoneCall className="w-5 h-5" />
//             Get in Touch
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
