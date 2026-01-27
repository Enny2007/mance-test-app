import StickyCard from "./StickyCards";
import { cards } from "./cardsData";

const ScrollRevealCards = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6 md:text-5xl">
          How it Works
        </h2>

        <p className="text-gray-600 leading-relaxed md:mx-30">
          Our platform provides a structured yet flexible approach to turning
          strategy into execution. It guides leaders and teams through a clear
          flow, from defining intent and objectives, to delegating execution,
          tracking outcomes, and evaluating performance.
        </p>
      </div>

     
      <div className="relative mt-32 max-w-6xl mx-auto px-4">
        
       
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0
                     -top-24 md:-top-32 h-[250vh]"
          style={{
            borderLeft: "2px dashed #9ca3af",
            borderImage:
              "repeating-linear-gradient(to bottom, #9ca3af 0 6px, transparent 6px 14px) 1",
          }}
        />

        
        <div className="relative z-10 space-y-24">
          {cards.map((card, index) => (
            <StickyCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealCards;
