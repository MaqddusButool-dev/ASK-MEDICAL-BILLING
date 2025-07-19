import React, { useState } from "react";

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] text-white py-16 px-4">
      <div className="max-w-8xl mx-auto bg-white text-[#2c3e50] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#1f3b57] text-white py-10 px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Policies & Legal
          </h1>
          <p className="text-center text-sm md:text-lg max-w-3xl mx-auto opacity-90">
            Learn more about how ASK Medical Billing protects your data and the
            terms under which we provide our services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center bg-gray-100 border-b">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-6 py-3 text-sm md:text-base font-semibold transition-colors ${
              activeTab === "privacy"
                ? "text-white bg-[#03a9f4]"
                : "text-[#2c3e50] hover:text-[#e91e63]"
            } rounded-t-lg`}
          >
            🔒 Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-6 py-3 text-sm md:text-base font-semibold transition-colors ${
              activeTab === "terms"
                ? "text-white bg-[#03a9f4]"
                : "text-[#2c3e50] hover:text-[#e91e63]"
            } rounded-t-lg`}
          >
            📜 Terms & Conditions
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12 space-y-8">
          {activeTab === "privacy" ? (
            <>
              {/* Privacy Policy */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1f3b57]">
                  🔐 Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective Date: <strong>[Insert Date]</strong>
                  <br />
                  ASK Medical Billing respects your privacy and is committed to
                  protecting the personal and business information you share
                  with us. This Privacy Policy explains what data we collect,
                  how we use it, and how we safeguard it, in compliance with
                  HIPAA guidelines and industry best practices.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  1. Information We Collect
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Personal Contact Information: Name, email, phone.</li>
                  <li>
                    Client Business Details: Practice information, billing data,
                    preferences.
                  </li>
                  <li>
                    Protected Health Information (PHI) during service delivery.
                  </li>
                  <li>
                    Website Usage Data: Analytics, cookies, and usage stats.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  2. How We Use Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>To respond to inquiries and support client relationships.</li>
                  <li>
                    To process billing and revenue cycle management (RCM)
                    services.
                  </li>
                  <li>
                    To improve our website, security measures, and user
                    experience.
                  </li>
                  <li>To comply with legal obligations and HIPAA standards.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  3. HIPAA Compliance & Business Associate Agreements (BAA)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We operate as a Business Associate under the HIPAA Privacy
                  Rule. For each healthcare provider we support, we enter into a
                  Business Associate Agreement (BAA) to define permitted uses of
                  PHI, ensure confidentiality, and establish breach notification
                  procedures. We strictly follow administrative, technical, and
                  physical safeguards as required by HIPAA.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  4. Data Security
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement SSL encryption, access controls, audit trails,
                  and secure cloud infrastructure to safeguard your data. While
                  we strive for maximum protection, no online platform can
                  guarantee 100% security.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  5. Information Sharing
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not sell or trade your data. We may share information
                  only with trusted service providers (e.g., secure
                  clearinghouses) and only as required to deliver contracted
                  services or comply with legal obligations.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  6. Your Rights
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You may request access, updates, or deletion of your data at
                  any time by contacting us directly.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  7. Updates to this Policy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this Privacy Policy periodically. Any changes
                  will be reflected on this page with a revised effective date.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  8. Contact Us
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  📧 Email: support@example.com <br />
                  📞 Phone: +1 (123) 456-7890
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Terms & Conditions */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1f3b57]">
                  📜 Terms & Conditions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective Date: <strong>[Insert Date]</strong>
                  <br />
                  By accessing or using the ASK Medical Billing website and
                  services, you agree to be bound by the following terms and
                  conditions.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  1. Services Provided
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We provide medical billing and revenue cycle management (RCM)
                  services to licensed healthcare entities. All services are
                  subject to individual agreements and availability.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  2. User Responsibilities
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Clients must provide accurate, up-to-date information for
                  processing. Any misuse of our platform or submission of false
                  data is strictly prohibited.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  3. Intellectual Property
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All content, branding, and materials on this website are the
                  property of ASK Medical Billing. They may not be reproduced,
                  distributed, or modified without written permission.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  4. Payment Terms
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Payment terms are outlined in individual contracts. Late
                  payments may result in suspension of services.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  5. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are not liable for indirect or incidental damages, delays,
                  or data loss except in cases of gross negligence.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  6. Indemnification
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You agree to indemnify ASK Medical Billing against any claims,
                  losses, or damages arising from misuse of our website or
                  services.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  7. Termination & Cancellation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Clients may terminate services with written notice, subject to
                  the terms of their service agreement. We reserve the right to
                  suspend services for violations.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  8. Governing Law
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These terms are governed by the laws of the State of [Insert
                  State]. Any disputes will be resolved in the courts of that
                  state.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1f3b57]">
                  9. Contact Us
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  📧 Email: support@example.com <br />
                  📞 Phone: +1 (123) 456-7890
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}





















// import React from "react";

// export default function PrivacyPolicy() {
//   return (
//     <section className="bg-gradient-to-br from-[#1f3b57] to-[#03a9f4] text-white min-h-screen py-16 px-4">
//       <div className="max-w-8xl mx-auto bg-white text-[#2c3e50] rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-[#1f3b57] text-white py-12 px-6 md:px-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">🔒 Privacy Policy</h1>
//           <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
//             We respect your privacy and are committed to protecting the personal information you share with us.
//             Below is a detailed outline of how we collect, use, and safeguard your data in compliance with HIPAA and industry standards.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="p-6 md:p-12 space-y-10">
//           {/* Section */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">1. Information We Collect</h2>
//             <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
//               <li>Personal information: name, email address, phone number, and details submitted via forms.</li>
//               <li>Business information: practice details and service preferences during onboarding.</li>
//               <li>Protected Health Information (PHI) shared during billing services.</li>
//               <li>Website usage data through analytics tools (cookies, interactions, etc.).</li>
//             </ul>
//           </div>

//           {/* Section */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">2. How We Use Your Information</h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               We process the collected information to:
//             </p>
//             <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
//               <li>Respond to inquiries and manage client relationships efficiently.</li>
//               <li>Deliver accurate and secure billing and RCM services.</li>
//               <li>Enhance and personalize your website and service experience.</li>
//               <li>Comply with legal, regulatory, and contractual obligations.</li>
//             </ul>
//           </div>

//           {/* HIPAA */}
//           <div className="bg-[#f9f9f9] p-6 rounded-xl border-l-4 border-[#e91e63] shadow-sm">
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">3. HIPAA Compliance & Business Associate Agreement</h2>
//             <p className="text-gray-700 leading-relaxed">
//               As a Business Associate under HIPAA, we offer a signed BAA to all healthcare providers we work with, ensuring the confidentiality, integrity, and security of PHI. We never use or disclose PHI beyond service delivery, except as required by law.
//             </p>
//           </div>

//           {/* Security */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">4. Data Security</h2>
//             <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
//               <li>Encryption (SSL/HTTPS) for data transmissions.</li>
//               <li>Strict access controls and audit trails.</li>
//               <li>HIPAA-compliant cloud infrastructure with routine security checks.</li>
//             </ul>
//           </div>

//           {/* Sharing */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">5. Information Sharing</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We do not sell or trade personal data. We may share information only with trusted partners (e.g., clearinghouses) necessary to provide our services, or as required by law.
//             </p>
//           </div>

//           {/* Cookies */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">6. Cookies and Tracking</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Our website uses cookies and similar technologies to track user interactions and improve performance. You may manage or disable cookies through your browser settings at any time.
//             </p>
//           </div>

//           {/* Rights */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">7. Your Rights</h2>
//             <p className="text-gray-700 leading-relaxed">
//               You can request access, correction, or deletion of your personal data. To exercise these rights, please reach out to us through the contact details below.
//             </p>
//           </div>

//           {/* Updates */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">8. Changes to This Policy</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We may update this Privacy Policy periodically. All changes will be posted here with an updated effective date.
//             </p>
//           </div>

//           {/* Contact */}
//           <div className="border-t pt-6">
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">9. Contact Us</h2>
//             <p className="text-gray-700 leading-relaxed">
//               If you have questions about this Privacy Policy or our practices, contact us:
//             </p>
//             <p className="mt-3">
//               <span className="font-semibold text-[#1f3b57]">📧 Email:</span>{" "}
//               <a
//                 href="mailto:support@example.com"
//                 className="text-[#e91e63] hover:underline font-medium"
//               >
//                 support@example.com
//               </a>
//             </p>
//             <p>
//               <span className="font-semibold text-[#1f3b57]">📞 Phone:</span>{" "}
//               <a
//                 href="tel:+11234567890"
//                 className="text-[#e91e63] hover:underline font-medium"
//               >
//                 +1 (123) 456-7890
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="bg-[#2c3e50] text-white text-center py-8 px-6">
//           <p className="mb-4 text-lg font-medium">
//             Thank you for trusting ASK Medical Billing with your information.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-[#e91e63] hover:bg-[#c2185b] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
//           >
//             Contact Support
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






















// import React from 'react';

// export default function PrivacyPolicy() {
//   return (
//     <section className="bg-gradient-to-r from-[#1f3b57] to-[#03a9f4] text-white min-h-screen py-16 px-4">
//       <div className="max-w-8xl mx-auto bg-white text-[#2c3e50] rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-[#1f3b57] text-white py-10 px-6 md:px-12">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
//           <p className="text-center text-sm md:text-lg max-w-3xl mx-auto opacity-90">
//             We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
//           </p>
//         </div>

//         {/* Content Section */}
//         <div className="p-6 md:p-12 space-y-8">
//           {/* Introduction */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">1. Information We Collect</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We may collect personal information such as your name, email address, phone number, and any other details you provide when you interact with our website. This may include information you submit via contact forms, subscription forms, or other interactive features.
//             </p>
//           </div>

//           {/* Usage */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">2. How We Use Your Information</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               <li>To respond to your inquiries and provide customer support.</li>
//               <li>To improve our website, services, and user experience.</li>
//               <li>To send updates, newsletters, or promotional content (only if you opt-in).</li>
//               <li>To comply with legal obligations.</li>
//             </ul>
//           </div>

//           {/* Sharing */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">3. Information Sharing</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep your information confidential.
//             </p>
//           </div>

//           {/* Security */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">4. Data Security</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, so we cannot guarantee absolute security.
//             </p>
//           </div>

//           {/* Rights */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">5. Your Rights</h2>
//             <p className="text-gray-700 leading-relaxed">
//               You have the right to access, update, or request deletion of your personal data. To exercise these rights, please contact us through our provided communication channels.
//             </p>
//           </div>

//           {/* Updates */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">6. Changes to This Policy</h2>
//             <p className="text-gray-700 leading-relaxed">
//               We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page with a revised effective date.
//             </p>
//           </div>

//           {/* Contact */}
//           <div className="border-t pt-6">
//             <h2 className="text-2xl font-semibold mb-3 text-[#1f3b57]">7. Contact Us</h2>
//             <p className="text-gray-700 leading-relaxed">
//               If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
//             </p>
//             <p className="text-[#1f3b57] font-medium mt-2">Email: support@example.com</p>
//             <p className="text-[#1f3b57] font-medium">Phone: +1 (123) 456-7890</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
