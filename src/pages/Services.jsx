import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { servicesData } from "../components/data/services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Ask Medical Billing</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of medical billing, RCM, and practice management services designed to boost your revenue and streamline operations."
        />
      </Helmet>

      <div className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto text-center mb-16 sm:mb-20 px-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
          >
            Our Suite of{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] bg-clip-text text-transparent">
              Expert Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We offer a comprehensive range of solutions to meet the unique needs
            of your medical practice. Let us handle the complexities of billing
            so you can focus on patient care.
          </motion.p>
        </section>

        {/* Services List */}
        <section className="max-w-7xl mx-auto">
          <div className="space-y-16 sm:space-y-20">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index === 0 ? 0 : index * 0.1, // first one instantly
                  ease: "easeOut",
                }}
                className={`group grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`p-6 sm:p-8 rounded-3xl border border-[#0ea5e9]/30 shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl hover:border-[#0ea5e9]/50 transition-all duration-300 ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    alt={service.title}
                    src={service.imageUrl}
                    className="w-full h-60 sm:h-80 object-cover rounded-2xl shadow-md"
                  />
                </motion.div>

                {/* Content Section */}
                <div className="space-y-5 sm:space-y-6 px-1">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 sm:p-4 rounded-2xl w-fit bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] shadow-md">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-slate-700 text-sm sm:text-base"
                      >
                        <CheckCircle className="h-5 w-5 text-[#0ea5e9] mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-[#e91e63] hover:bg-[#c2185b] text-white shadow-md"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1f3b57] mt-20 sm:mt-24 text-white rounded-3xl p-8 sm:p-10 text-center shadow-inner"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Elevate Your Practice?
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto text-gray-200">
            Let us create a customized service plan that fits your practice's
            specific needs and goals.
          </p>
          <a
            href="/BookAppointment"
            className="inline-block bg-[#e91e63] hover:bg-[#c2185b] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;






















// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { servicesData } from '../components/data/services';

// const ServicesPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Our Services - Ask Medical Billing</title>
//         <meta
//           name="description"
//           content="Explore our comprehensive suite of medical billing, RCM, and practice management services designed to boost your revenue and streamline operations."
//         />
//       </Helmet>

//       {/* Outer Background */}
//       <div className="py-20 px-6 bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen">
//         {/* Header Section */}
//         <section className="max-w-7xl mx-auto text-center mb-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
//           >
//             Our Suite of{' '}
//             <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] bg-clip-text text-transparent">
//               Expert Services
//             </span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-xl text-slate-600 max-w-3xl mx-auto"
//           >
//             We offer a comprehensive range of solutions to meet the unique needs
//             of your medical practice. Let us handle the complexities of billing
//             so you can focus on patient care.
//           </motion.p>
//         </section>

//         {/* Services List */}
//         <section className="max-w-7xl mx-auto">
//           <div className="space-y-20">
//             {servicesData.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.8, delay: index * 0.15 }}
//                 className={`group grid lg:grid-cols-2 gap-12 items-center ${
//                   index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
//                 }`}
//               >
//                 {/* Image Section */}
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: 'spring', stiffness: 200, damping: 10 }}
//                   className={`p-8 rounded-3xl border border-[#0ea5e9]/30 shadow-xl bg-white/80 backdrop-blur-md hover:shadow-2xl hover:border-[#0ea5e9]/50 transition-all duration-300 ${
//                     index % 2 !== 0 ? 'lg:col-start-2' : ''
//                   }`}
//                 >
//                   <img
//                     alt={service.title}
//                     src={service.imageUrl}
//                     className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                   />
//                 </motion.div>

//                 {/* Content Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-4 rounded-2xl w-fit bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] shadow-lg">
//                       <service.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h2 className="text-3xl font-bold text-slate-800">
//                       {service.title}
//                     </h2>
//                   </div>
//                   <p className="text-slate-600 text-lg leading-relaxed">
//                     {service.shortDescription}
//                   </p>
//                   <ul className="space-y-3">
//                     {service.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="flex items-start text-slate-700"
//                       >
//                         <CheckCircle className="h-5 w-5 text-[#0ea5e9] mr-3 mt-1 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Learn More Button */}
//                     <Link
//                     to={`/services/${service.slug}`}
//                     className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-[#e91e63] hover:bg-[#c2185b] text-white"
//                   >
//                     Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         {/* <section className="mt-24 rounded-3xl bg-gradient-to-r from-[#0ea5e9]/30 to-[#14b8a6]/30">
//           <div className="max-w-7xl mx-auto text-center py-20 px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-4xl mx-auto"
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
//                 Ready to Elevate Your Practice?
//               </h2>
//               <p className="text-xl text-slate-600 mb-8">
//                 Let us create a customized service plan that fits your
//                 practice's specific needs and goals.
//               </p>
//               <button
//                 className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] hover:from-[#0284c7] hover:to-[#0d9488] text-white"
//               >
//                 Request a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </motion.div>
//           </div>
//         </section> */}
//         {/* CTA Section */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="bg-[#1f3b57] mt-24 text-white rounded-3xl p-10 text-center shadow-inner"
//                 >
//                   <h2 className="text-3xl font-bold mb-3">Ready to Elevate Your Practice?</h2>
//                   <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200">
//                     Let us create a customized service plan that fits your practice's specific needs and goals.
//                   </p>
//                   <a
//                     href="/BookAppointment"
//                     className="inline-block  bg-[#e91e63] hover:bg-[#c2185b] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
//                   >
//                     Contact Us Today
//                   </a>
//                 </motion.div>
//       </div>
//     </>
//   );
// };

// export default ServicesPage;























// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { servicesData } from '../components/data/services';

// const ServicesPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Our Services - Ask Medical Billing</title>
//         <meta
//           name="description"
//           content="Explore our comprehensive suite of medical billing, RCM, and practice management services designed to boost your revenue and streamline operations."
//         />
//       </Helmet>

//       <div className="py-20 px-6 bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen">
//         {/* Header */}
//         <section className="container mx-auto text-center mb-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
//           >
//             Our Suite of{' '}
//             <span className="bg-gradient-to-r from-[#03a9f4] to-[#e91e63] bg-clip-text text-transparent">
//               Expert Services
//             </span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-xl text-gray-200 max-w-3xl mx-auto"
//           >
//             We offer a comprehensive range of solutions to meet the unique needs
//             of your medical practice. Let us handle the complexities of billing
//             so you can focus on patient care.
//           </motion.p>
//         </section>

//         {/* Services */}
//         <section className="container mx-auto">
//           <div className="space-y-16">
//             {servicesData.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8 }}
//                 className={`grid lg:grid-cols-2 gap-12 items-center ${
//                   index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
//                 }`}
//               >
//                 {/* Image */}
//                 <div
//                   className={`p-8 rounded-3xl border border-[#03a9f4]/30 shadow-xl bg-white/10 backdrop-blur-md ${
//                     index % 2 !== 0 ? 'lg:col-start-2' : ''
//                   }`}
//                 >
//                   <img
//                     alt={service.title}
//                     src={service.imageUrl}
//                     className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-4 rounded-2xl w-fit bg-gradient-to-br from-[#03a9f4] to-[#e91e63]">
//                       <service.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h2 className="text-3xl font-bold text-white">
//                       {service.title}
//                     </h2>
//                   </div>
//                   <p className="text-gray-200 text-lg leading-relaxed">
//                     {service.shortDescription}
//                   </p>
//                   <ul className="space-y-3">
//                     {service.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="flex items-start text-gray-100"
//                       >
//                         <CheckCircle className="h-5 w-5 text-[#03a9f4] mr-3 mt-1 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Link
//                     to={`/services/${service.slug}`}
//                     className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-[#03a9f4] hover:bg-[#e91e63] text-white"
//                   >
//                     Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="mt-24 py-20 px-6 rounded-3xl bg-gradient-to-r from-[#03a9f4]/30 to-[#e91e63]/30">
//           <div className="container mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-4xl mx-auto"
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Elevate Your Practice?
//               </h2>
//               <p className="text-xl text-gray-200 mb-8">
//                 Let us create a customized service plan that fits your
//                 practice's specific needs and goals.
//               </p>
//               <button
//                 onClick={() => alert('🚧 Quote System Coming Soon!')}
//                 className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#03a9f4] to-[#e91e63] hover:from-[#0288d1] hover:to-[#c2185b] text-white"
//               >
//                 Request a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ServicesPage;














// import React from "react";
// import { Briefcase, FileText, Shield, Users, ClipboardList, Settings } from "lucide-react";

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "Medical Billing Services",
//       description:
//         "Accurate and timely claims from start to finish. Maximize reimbursement and reduce errors.",
//       points: [
//         "Electronic & Paper Claim Submission",
//         "Aggressive Follow-up on Unpaid Claims",
//         "Denial Management and Appeals",
//       ],
//       icon: <Briefcase className="w-12 h-12 text-sky-400" />,
//     },
//     {
//       title: "Revenue Cycle Management (RCM)",
//       description:
//         "Optimize cash flow and long-term profitability with a holistic revenue cycle approach.",
//       points: [
//         "Comprehensive Financial Analysis",
//         "Workflow Optimization",
//         "Fee Schedule Analysis",
//       ],
//       icon: <FileText className="w-12 h-12 text-sky-400" />,
//     },
//     {
//       title: "Medical Coding & Auditing",
//       description:
//         "Certified coders ensure accuracy and compliance for maximum reimbursement.",
//       points: [
//         "CPT, ICD-10, and HCPCS Coding",
//         "Specialty-Specific Coding",
//         "Regular Coding Audits",
//       ],
//       icon: <ClipboardList className="w-12 h-12 text-sky-400" />,
//     },
//     {
//       title: "Credentialing Services",
//       description:
//         "Enroll and manage providers seamlessly to accept a wide range of insurance plans.",
//       points: [
//         "New Provider Enrollment",
//         "Re-credentialing and Maintenance",
//         "CAQH Management",
//       ],
//       icon: <Users className="w-12 h-12 text-sky-400" />,
//     },
//     {
//       title: "Compliance & Security",
//       description:
//         "Stay ahead of regulatory changes and keep data secure with HIPAA compliance.",
//       points: [
//         "Full HIPAA Compliance",
//         "Secure Data Management",
//         "Regular Risk Assessments",
//       ],
//       icon: <Shield className="w-12 h-12 text-sky-400" />,
//     },
//     {
//       title: "Practice Management Consulting",
//       description:
//         "Enhance operational efficiency, patient satisfaction, and financial performance.",
//       points: [
//         "Operational Workflow Analysis",
//         "Technology Integration Advice",
//         "Patient Engagement Strategies",
//       ],
//       icon: <Settings className="w-12 h-12 text-sky-400" />,
//     },
//   ];

//   return (
//     <div className="bg-[#1f3b57] min-h-screen text-white">
//       {/* Header */}
//       <header className="py-12 text-center">
//         <h1 className="text-4xl font-bold">Our Suite of <span className="text-sky-400">Expert Services</span></h1>
//         <p className="mt-4 max-w-3xl mx-auto text-gray-200">
//           We offer a comprehensive range of solutions to meet the unique needs of your medical practice.
//         </p>
//       </header>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className="bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-600 mb-4">{service.description}</p>
//             <ul className="text-sm text-gray-700 space-y-2 mb-4">
//               {service.points.map((point, pIdx) => (
//                 <li key={pIdx} className="flex items-center">
//                   <span className="w-2 h-2 rounded-full bg-[#03a9f4] mr-3"></span>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-auto bg-[#03a9f4] text-white px-4 py-2 rounded-lg hover:bg-[#e91e63] transition-colors">
//               Learn More →
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <div className="bg-[#2c3e50] py-12 mt-12">
//         <h2 className="text-3xl font-bold text-center mb-4">Ready to Elevate Your Practice?</h2>
//         <p className="text-center mb-6 text-gray-300">
//           Let us create a customized service plan that fits your specific needs and goals.
//         </p>
//         <div className="text-center">
//           <button className="bg-[#03a9f4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e91e63] transition-colors">
//             Request a Free Consultation
//           </button>
//         </div>
//       </div>

      
//     </div>
//   );
// }

























// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "End-to-End Medical Billing",
//       description: [
//         "Complete management of the billing process—from claim creation and submission to payment posting and follow-ups."
//       ]
//     },
//     {
//       title: "Revenue Cycle Management (RCM)",
//       description: [
//         "Optimize your practice's cash flow through accurate coding, denial management, and streamlined workflows."
//       ]
//     },
//     {
//       title: "Insurance Verification & Authorization",
//       description: [
//         "Ensure eligibility and obtain prior authorizations quickly and efficiently."
//       ]
//     },
//     {
//       title: "Payment Posting & Reconciliation",
//       description: [
//         "Track and post payments accurately to maintain financial clarity and ensure proper accounting."
//       ]
//     },
//     {
//       title: "Denial Management",
//       description: [
//         "Analyze and appeal claim denials to reduce revenue leakage and increase collection rates."
//       ]
//     },
//     {
//       title: "Credentialing & Compliance Support",
//       description: [
//         "Assistance with provider credentialing, payer enrollments, and maintaining regulatory compliance."
//       ]
//     },
//     {
//       title: "Patient Billing & Support",
//       description: [
//         "Clear, timely, and professional patient statements and billing support for better patient satisfaction."
//       ]
//     }
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <main className="bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1f3b57]">
//             Our Medical Billing & RCM Services
//           </h2>
//           <p className="text-lg mt-4 text-[#1f3b57] max-w-3xl mx-auto">
//             Streamline your healthcare practice and boost financial performance with our full-spectrum medical billing and revenue cycle solutions.
//           </p>
//         </div>

//         <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-6 md:p-12">
//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="space-y-3 border-r border-blue-100 pr-4">
//               {services.map((service, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`flex items-center px-4 py-3 rounded-lg w-full text-left text-base md:text-lg transition duration-300 font-medium tracking-wide
//                     ${
//                       activeIndex === idx
//                         ? "bg-blue-50 text-[#0288D1] shadow-sm"
//                         : "text-gray-700 hover:bg-blue-50/50"
//                     }`}
//                 >
//                   <CheckCircle className="mr-3 text-[#0288D1]" />
//                   {service.title}
//                 </button>
//               ))}
//             </div>

//             <div className="md:col-span-2 pl-0 md:pl-8">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-gray-800"
//                 >
//                   <h3 className="text-3xl font-semibold text-[#1f3b57] mb-6">
//                     {services[activeIndex].title}
//                   </h3>
//                   <ul className="space-y-5 text-base md:text-lg">
//                     {services[activeIndex].description.map((point, i) => (
//                       <li key={i} className="flex items-start">
//                         <span className="text-[#03a9f4] mr-3 mt-1">✔</span>
//                         <p>{point}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-24 bg-gradient-to-r from-[#1f3b57] to-[#13293d] rounded-3xl shadow-inner p-10 text-center relative overflow-hidden"
//         >
//           <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

//           <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-white">
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
//     </main>
//   );
// }




