import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer? ',
    answer: 'We offer full-service medical billing and revenue cycle management (RCM) for healthcare providers across the USA. Our services include claim submission, payment posting, denial management, credentialing support, insurance verification, and more.'
  },
  {
    question: 'Who do you work with?',
    answer: 'YWe work with independent physicians, group practices, clinics, and specialty healthcare providers of all sizes across the United States.'
  },
  {
    question: 'How do you ensure HIPAA compliance?',
    answer: 'Our systems, processes, and staff are fully HIPAA-compliant. We use secure data handling procedures, encrypted communication, and strict access controls to ensure patient data privacy.'
  },
  {
    question: 'Can you work with our existing EHR/EMR system?',
    answer: 'Yes. We are experienced with most major EHR and practice management systems. We adapt to your current workflow to make the transition smooth and efficient.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact form, phone, or email. We’ll schedule a consultation to understand your practice needs and recommend a customized billing solution.'
  },
  {
    question: 'How are your fees structured?',
    answer: 'Our pricing is typically based on a percentage of collections or a flat monthly fee, depending on the size and complexity of your practice. We offer competitive and transparent pricing with no hidden fees.'
  },
  {
    question: 'Do you offer reporting and analytics?',
    answer: 'Yes. We provide regular, customized reports that give you insights into collections, claim status, denial rates, and other key financial metrics.'
  },
  
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] text-[#2c3e50] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1f3b57] mb-6">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Here you can find answers to some of the most common questions about our services and policies.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-gray-50 focus:outline-none"
              >
                <span className="font-medium text-base md:text-lg">{faq.question}</span>
                <span className="text-[#03a9f4] font-bold text-xl md:text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-gray-700 leading-relaxed border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
