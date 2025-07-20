import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Boxes, Cog } from "lucide-react";

export default function GetStartedSection() {
  const items = [
    {
      title: "Assess",
      description:
        "Schedule a meeting with us. Our experts are here to understand your challenges and goals so we can identify the right solution — even if it doesn’t involve us.",
      icon: <Briefcase className="w-12 h-12 text-gray-700" style={{ color: "#03a9f4" }} />,
    },
    {
      title: "Build",
      description:
        "Let our training and implementation teams take over. We create the strategy, configure the systems, and deliver the solution in your EHR seamlessly.",
      icon: <Boxes className="w-12 h-12 text-gray-700" style={{ color: "#03a9f4" }} />,
    },
    {
      title: "Consult",
      description:
        "Healthcare is changing. Our Client Success Teams exist to provide long-term planning and consulting that differentiates your business.",
      icon: <Cog className="w-12 h-12 text-gray-700" style={{ color: "#03a9f4" }} />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1f3b57] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s <span className="text-[#03a9f4] "> Get Started </span> 
          <div className=" w-16 h-1 bg-[#e91e63] rounded-full mb-3"></div>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="mb-4 ">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f3b57] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





















// import React from "react";
// import { motion } from "framer-motion";
// import { Briefcase, Boxes, Cog } from "lucide-react"; // you can replace with your icons or images

// export default function GetStartedSection() {
//   const items = [
//     {
//       title: "Assess",
//       description:
//         "Schedule a meeting with our experts to discuss your current challenges, goals, and workflows. We’ll assess your unique needs — and recommend the right solution, even if it doesn’t involve ASK Medical Billing.We believe in honest value, not just selling services.",
//       icon: <Briefcase className="w-10 h-10 text-orange-500" />,
//     },
//     {
//       title: "Build",
//       description:
//         "LOur training and implementation teams will develop a customized billing strategy, configure the systems, and integrate seamlessly into your EHR and processes. Fast, frictionless onboarding tailored to your practice.",
//       icon: <Boxes className="w-10 h-10 text-purple-500" />,
//     },
//     {
//       title: "Consult",
//       description:
//         "Our dedicated Client Success Team offers long-term strategic guidance to optimize revenue, stay compliant, and grow your practice.Because healthcare is evolving — and so should your billing partner.",
//       icon: <Cog className="w-10 h-10 text-blue-500" />,
//     },
//   ];

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Let&apos;s Get Started
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {items.map((item, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center flex flex-col items-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               <div className="mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
