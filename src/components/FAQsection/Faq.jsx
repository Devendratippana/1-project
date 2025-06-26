import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  { question: " What is AI Creators CashFlow?", answer: "AI Creators CashFlow is a cutting-edge platform that helps entrepreneurs, creators, and businesses generate automated income using advanced AI and quantum-powered automation systems." },
  { question: "What is the AI Profit Machine?", answer: "The AI Profit Machine is our flagship automated income system. Powered by Quantum Super Computers and proprietary AI algorithms, it identifies profitable opportunities, executes tasks, and automates online business processes to help you generate consistent daily income." },
  { question: " How does the AI Profit Machine generate income automatically?", answer: "Identify profitable niches or trends in real time Create and manage digital assets (like websites, content, or campaigns) Automate tasks such as content creation, email marketing, and customer interactions Run scalable profit-generating systems 24/7" },
  { question: "How soon can I start making money?", answer: "Many of our users see results within the first few days. However, results vary depending on your chosen system, effort, and how actively you implement our strategies" },
  { question: "Is this a passive income system?", answer: "Yes, our systems are designed to automate up to 90–100% of operations. While some initial setup and occasional management may be needed, most users experience a hands-free or semi-passive income experience." },
  { question: "Is this legal and ethical?", answer: "Absolutely. All our automation strategies follow legal, white-hat practices. " }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box">
        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>&#9660;</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
