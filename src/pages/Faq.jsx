import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need technical knowledge to work with you?',
      answer: 'No. We guide you through the process and explain technical details in simple terms. Your focus should be on your business goals and vision, while we handle the technical execution.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We\'re industry-agnostic and have experience across transportation, e-commerce, education, Hospitality / Foodservice / Travel, logistics and professional services.'
    },
    {
      question: 'How much does software development cost?',
      answer: 'Costs depend on factors like project scope, technology stack, and team expertise. We offer flexible pricing models (e.g., Fixed Price, Time & Materials, or Dedicated Team) to suit your budget.'
    },
    {
      question: 'Can you take over or "rescue" an existing project?',
      answer: 'Absolutely. We audit code, stabilize issues, and create a roadmap to get you back on track.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Small MVPs: 4–12 weeks. Mid-size products: 3–6 months. Enterprise builds vary by complexity.'
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes. We provide support plans for updates, monitoring, bug fixes, and minor enhancements.'
    },
    {
      question: 'How do you handle security?',
      answer: 'We follow OWASP best practices, secure auth (e.g., JWT/OAuth2), encryption in transit/at rest, secrets management, and least-privilege access.'
    },
    {
      question: 'Who owns the source code?',
      answer: 'You do, once invoices are paid as per contract. We deliver code, documentation, and access credentials.'
    },
    {
      question: 'How do you handle intellectual property (IP)?',
      answer: 'You retain full ownership of the IP created during the project. We ensure all work products are transferred to you upon completion.'
    },
    {
      question: 'Where will my app be hosted?',
      answer: 'Your choice: AWS, GCP, Azure, or your preferred provider. We can set up and manage infrastructure because we have our own, or hand it off to your team.'
    },
    {
      question: 'Can you help prepare for investors or due diligence?',
      answer: 'We can document architecture, security practices, metrics, and a roadmap to support fundraising.'
    },
    {
      question: 'Do you handle on-site meetings?',
      answer: 'We\'re primarily remote, but on-site workshops in South Florida can be arranged.'
    },
    {
      question: 'Do you also handle marketing and branding?',
      answer: 'Yes. Alongside development, VIQSystems INC offers brand strategy, visual identity (logo, color system, typography), messaging, and marketing assets (landing pages, pitch decks, social kits).'
    },
    {
      question: 'Do you create content for ads and social?',
      answer: 'Yes—ad creatives, copy, short-form video briefs, and creative guidelines so your team (or ours) can produce consistent assets.'
    },
    {
      question: 'Can you refresh our brand without a full rebrand?',
      answer: 'Absolutely. We do brand "lift" projects (updated logo variants, tone of voice, design system tweaks) that align with your current product and roadmap.'
    },
    {
      question: 'Do you outsource custom software development?',
      answer: 'No, our company does not outsource. All of the work is done in-house by VIQSystems employees who undergo rigorous interviews and training. Our software developers participate in continuous education to ensure they are always up to date on best practices.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes. We prioritize confidentiality and are happy to sign Non-Disclosure Agreements to protect your intellectual property.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-lg"
            >
              <button
                className={`w-full px-6 py-5 text-left focus:outline-none ${activeIndex === index ? 'bg-amber-50 dark:bg-amber-900/20' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-300">
                      <p className="mt-2">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
