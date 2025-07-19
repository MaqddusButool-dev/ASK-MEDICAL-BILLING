import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-r from-[#1f3b57] to-[#03a9f4]">
      <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1f3b57] text-white py-12 px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-center text-sm md:text-lg max-w-3xl mx-auto opacity-90">
            Browse through common questions or search to quickly find answers about our services and policies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-6 md:p-10 bg-gray-50 border-b">
          <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md px-4 py-2">
            <Search className="text-[#1f3b57] w-5 h-5 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="p-6 md:p-10 space-y-4 md:space-y-6">
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">No matching questions found.</p>
          )}
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left focus:outline-none"
              >
                <span className="font-medium text-base md:text-lg text-[#1f3b57]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#03a9f4] w-6 h-6" />
                ) : (
                  <ChevronDown className="text-[#03a9f4] w-6 h-6" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-gray-700 leading-relaxed border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="bg-gray-100 text-center py-6 text-sm text-gray-500">
          Need more help? <a href="/contact" className="text-[#e91e63] font-medium hover:underline">Contact our support team</a>.
        </div>
      </div>
    </section>
  );
}
