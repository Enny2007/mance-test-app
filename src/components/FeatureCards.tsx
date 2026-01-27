import { useState } from "react";
import FeatureCardHover from "./FeatureCardHover";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

const features = [
  {
    image: card1,
    title: "Cloud-Native & Secure",
    description:
      "Built as a modern cloud-native platform, the system is accessible anywhere, anytime.",
    hover: {
      title: "Cloud-Native & Secure",
      description:
        "Built as a modern cloud-native platform, the system is accessible anywhere, anytime.",
      benefits: [
        "Data is securely stored,regurlarly backed up,and protected through role-based access controls.",
        "Ensures users only see what they are authorised to see",
        "As your organization grows,the platform scales seamlessl without infrastructure complxity or downtime.",
      ],
    },
  },
  {
    image: card2,
    title: "Hierarchical Intent Management",
    description:
      "Translate leadership intent into coordinated execution across every level of the organization.",
    hover: {
      title: "Hierarchical Intent Management",
      description:
        "Translate leadership intent into coordinated execution across every level of the organization.",
      benefits: [
        "Strategic goals, priorities, and success measures cascade naturally from leaders to teams and individuals through structured task hierarchies.",
        "Each level understands not just what to do, but why it matters and how it contributes to the broader mission",
      ],
    },
  },
  {
    image: card3,
    title: "Built-in KPI & Reporting",
    description: "Move beyond status updates and assumptions.",
    hover: {
      title: "Built-in KPI & Reporting",
      description: "Move beyond status updates and assumptions.",
      benefits: [
        "Built-in KPIs and outcome reporting allow individuals and teams to set targets, track actual results, and report progress across monthly, quarterly, biannual, or annual cycles",
        "Leaders gain real-time visibility into performance, enabling data-driven decisions and early intervention where execution is falling behind.",
      ],
    },
  },
  {
    image: card4,
    title: "Team Collaboration",
    description:
      "Execution improves when communication is structured and purposeful.",
    hover: {
      title: "Team Collaboration",
      description:
        "Execution improves when communication is structured and purposeful.",
      benefits: [
        "Teams collaborate around shared missions, tasks, and outcomes within a single system of record.",
        "Clear ownership, shared visibility, and aligned goals reduce miscommunication and keep everyone focused on execution rather than coordination overhead.",
      ],
    },
  },
  {
    image: card5,
    title: "Scalable for Teams of All Sizes",
    description:
      "Whether you’re a small team or a large enterprise, the platform adapts to your organizational structure.",
    hover: {
      title: "Scalable for Teams of All Sizes",
      description:
        "Whether you’re a small team or a large enterprise, the platform adapts to your organizational structure.",
      benefits: [
        "Start with a single team or department and scale across functions, business units, and geographies without reworking your strategy model",
        "The same clarity and structure apply at every size.",
      ],
    },
  },
  {
    image: card6,
    title: "Dynamic Task Decomposition",
    description:
      "Create specified tasks, derive implied tasks, and assign them across the mission plan hierarchy.",
    hover: {
      title: "Dynamic Task Decomposition",
      description:
        "Break down complex goals into executable actions without losing alignment.",
      benefits: [
        "Strategic initiatives are decomposed into specified and cascaded tasks, allowing each level to refine execution while remaining aligned with leadership intent",
        "This dynamic decomposition ensures clarity, accountability, and momentum from high-level strategy to day-to-day execution.",
      ],
    },
  },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-1200px w-full px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative "
            onMouseEnter={() => !isTouchDevice && setActiveIndex(index)}
            onMouseLeave={() => !isTouchDevice && setActiveIndex(null)}
            onClick={() =>
              isTouchDevice
                ? setActiveIndex(activeIndex === index ? null : index)
                : null
            }
          >
            <div
              className={`relative h-135 mb-5 w-full rounded-2xl bg-[#fafafa] px-10 pt-10 pb-14 shadow-sm transition-transform duration-500 ease-in-out ${
                activeIndex === index ? "-translate-y-8" : "translate-y-0"
              }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute top-0 right-0  object-contain size-80 opacity-80"
              />

              <div className="mt-70">
                <h3 className="text-2xl font-semibold text-gray-900 pt-5">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xl font-medium text-gray-600 opacity-80">
                  {feature.description}
                </p>
              </div>
            </div>

            {activeIndex === index && (
              <FeatureCardHover
                title={feature.hover.title}
                description={feature.hover.description}
                benefits={feature.hover.benefits}            />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
