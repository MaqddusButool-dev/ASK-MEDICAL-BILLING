import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import img from "../assets/hero1.jpg";

export default function AboutUs() {
  const highlights = [
    {
      title: "HIPAA-Compliant & Secure",
      description:
        "Your data is handled with the highest security standards and full HIPAA compliance to safeguard sensitive information.",
    },
    {
      title: "Faster Reimbursements",
      description:
        "Our optimized processes and proactive follow-ups ensure your practice gets paid quickly and efficiently.",
    },
    {
      title: "Customized Solutions",
      description:
        "We tailor our services to fit the unique needs of your practice, no matter the size or specialty.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stay in control with clear, detailed reporting and open communication at every stage of the billing process.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is always ready to assist, providing responsive, reliable support whenever you need it.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f3b57] mb-4">
            About <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] bg-clip-text text-transparent font-extrabold">ASK Medical Billing</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We are a trusted medical billing and revenue cycle management partner
            committed to helping healthcare providers achieve financial clarity
            and operational excellence.
          </p>
        </motion.div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt="Our Team at Work"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-[#1f3b57] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              At ASK Medical Billing, we go beyond basic billing services. We
              partner with healthcare providers to optimize their revenue cycle,
              reduce administrative burdens, and ensure compliance with industry
              regulations.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether you run a small private practice or a large specialty clinic,
              our team leverages cutting-edge technology and proven workflows to
              deliver tailored, result-driven solutions.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#1f3b57]"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-[#03a9f4] w-7 h-7 mr-2" />
                  <h3 className="text-xl font-semibold text-[#1f3b57]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1f3b57] text-white rounded-3xl p-10 text-center shadow-inner"
        >
          <h2 className="text-3xl font-bold mb-3">Ready to Work With Us?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200">
            Let us help you streamline your billing process and boost your
            practice’s profitability. We’re just one click away from transforming
            your revenue cycle.
          </p>
          <a
            href="/BookAppointment"
            className="inline-block bg-gradient-to-r from-[#03a9f4] to-[#0288d1] hover:brightness-110 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}






















// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import img from "../assets/hero1.jpg";

// export default function AboutUs() {
//   const highlights = [
//     {
//       title: "HIPAA-Compliant & Secure",
//       description:
//         "Your data is handled with the highest security standards and full HIPAA compliance to safeguard sensitive information.",
//     },
//     {
//       title: "Faster Reimbursements",
//       description:
//         "Our optimized processes and proactive follow-ups ensure your practice gets paid quickly and efficiently.",
//     },
//     {
//       title: "Customized Solutions",
//       description:
//         "We tailor our services to fit the unique needs of your practice, no matter the size or specialty.",
//     },
//     {
//       title: "Transparent Reporting",
//       description:
//         "Stay in control with clear, detailed reporting and open communication at every stage of the billing process.",
//     },
//     {
//       title: "Dedicated Support",
//       description:
//         "Our team is always ready to assist, providing responsive, reliable support whenever you need it.",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] text-gray-800 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1f3b57]">
//             About <span className="text-pink-500"></span> <span className="text-[#03a9f4]">ASK Medical Billing </span>
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
//             We are a trusted medical billing and revenue cycle management
//             partner committed to helping healthcare providers achieve financial
//             clarity and operational excellence.
//           </p>
//         </motion.div>

//         {/* Intro Section */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src={img}
//               alt="About Us"
//               className="rounded-2xl shadow-xl w-full object-cover"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex flex-col justify-center"
//           >
//             <h2 className="text-3xl font-semibold mb-4 text-[#1f3b57]">
//               Who We Are
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               At ASK Medical Billing, we go beyond basic billing services. We
//               partner with healthcare providers to optimize their revenue
//               cycle, reduce administrative burdens, and ensure compliance with
//               industry regulations.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Our experienced team leverages cutting-edge technology and
//               proven workflows to deliver outstanding results. Whether you run a
//               small private practice or a large specialty clinic, we provide
//               customized solutions that drive growth and efficiency.
//             </p>
//           </motion.div>
//         </div>

//         {/* Highlights Grid */}
//         <div className="mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center text-3xl font-bold mb-12 text-[#1f3b57]"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <CheckCircle className="text-[#03a9f4] w-8 h-8 mr-3" />
//                   <h3 className="text-xl font-semibold text-[#1f3b57]">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Call To Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-[#1f3b57] text-white rounded-2xl shadow-inner p-10 text-center"
//         >
//           <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
//             Let us help you streamline your billing process and boost your
//             practice’s profitability. We are just a click away from transforming
//             your revenue cycle management.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
//           >
//             Contact Us Today
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
