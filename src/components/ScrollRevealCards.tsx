import StickyCard from "./StickyCards";
import { cards } from "./cardsData";


const ScrollRevealCards = () => {
  return (
    <section className="w-full bg-[#f8f7f5] py-24">
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          How it Works
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Our platform provides a structured yet flexible approach to turning
          strategy into execution. It guides leaders and teams through a clear
          flow, from defining intent and objectives, to delegating execution,
          tracking outcomes, and evaluating performance. Each step builds on the
          previous one, ensuring alignment, accountability, and measurable
          progress at every level of the organization.
        </p>

        <div
          className="absolute left-1/2 top-full mt-10 -translate-x-1/2 h-100"
          style={{
            borderLeft: "2px dashed #9ca3af",
            borderImage:
              "repeating-linear-gradient(to bottom, #9ca3af 0 6px, transparent 6px 14px) 1",
          }}
        ></div>
      </div>
      <div className="relative mt-40 max-w-6xl mx-auto px-4">
        <div className="space-y-40">
          {cards.map((card, index) => (
            <StickyCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealCards;
