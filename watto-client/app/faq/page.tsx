'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "How does distribution work?", answer: "We partner with high-traffic venues, gyms, and co-working spaces to distribute free, branded water." },
  { question: "Is the bottle eco-friendly?", answer: "Yes. Our bottles are made from 100% recycled aluminum and are infinitely recyclable." },
  { question: "What is the minimum order?", answer: "We cater to campaigns of all sizes, starting from 1,000 units." },
  { question: "Can we customize the bottle shape?", answer: "Currently, we offer our standard ergonomic aluminum bottle to ensure compatibility with our recycling partners." },
  { question: "How long does a campaign last?", answer: "Campaign duration depends on the volume distributed. Typically, a 10,000 unit campaign is distributed within 2-4 weeks at high-velocity venues." },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tighter">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                type="button"
                className="w-full flex justify-between items-center py-4 text-left text-xl font-medium focus:outline-none hover:text-gray-300 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span className="ml-4 text-2xl font-light text-gray-500">{activeIndex === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 pb-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
