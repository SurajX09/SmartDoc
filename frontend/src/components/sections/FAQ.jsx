import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { faqs } from "../../data/faq";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about our services."
        />

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 md:p-6 text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                {openId === faq.id ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;