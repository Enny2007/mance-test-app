import React, { useState } from "react";

import BenefitBadge from "../../assets/benefitBadge.svg";
import GovImg1 from "../../assets/goverment2.png";
import GovImg2 from "../../assets/goverment2.png";
import GovImg3 from "../../assets/goverment2.png";

const benefits = [
  {
    title: "Shared dashboards to align agencies under one mission",
    desc: "Visualize progress across all departments and ensure everyone is working toward the same objectives.",
    img: GovImg1,
  },
  {
    title: "Task delegation with clear accountability and ownership",
    desc: "Assign responsibilities across teams and track task completion to maintain alignment and responsibility.",
    img: GovImg2,
  },
  {
    title: "Transparent reporting for leaders, stakeholders, and citizens",
    desc: "Generate real-time reports to monitor outcomes, inform decision-making, and demonstrate accountability.",
    img: GovImg3,
  },
];

const GovernmentBenefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-[#F7F9F9] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <img src={BenefitBadge} className="w-25" alt="Benefit badge" />
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-24">
          How Mance Solves This
        </h2>

        {/*  DESKTOP*/}
        <div className="hidden md:grid grid-cols-2 gap-24 items-start">
          {/* LEFT — ACCORDION */}
          <div>
            {benefits.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={index} className="mb-1">
                  {/* Top divider */}
                  <div className="border-t border-gray-300" />

                  {/* Header */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full py-3 flex items-center justify-between text-left"
                  >
                    <span
                      className={`text-lg font-medium pt-4  transition ${
                        isActive
                          ? "text-[#008080]"
                          : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`ml-6 transform transition-transform duration-300 ${
                        isActive
                          ? "rotate-180 text-[#008080]"
                          : "text-gray-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Content */}
                  {isActive && (
                    <p className="pb-2 text-sm text-gray-500 leading-relaxed max-w-xl md:w-90">
                      {item.desc}
                    </p>
                  )}

                 
                  
                </div>
              );
            })}
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src={benefits[activeIndex].img}
              alt=""
              className="rounded-2xl shadow-sm max-w-full"
            />
          </div>
        </div>

        {/*MOBILE  */}
        <div className="md:hidden">
          {benefits.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="mb-6">
                <div className="border-t border-gray-300" />

                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-base font-medium ${
                      isActive
                        ? "text-[#008080]"
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Same Arrow */}
                  <span
                    className={`ml-4 transform transition-transform duration-300 ${
                      isActive
                        ? "rotate-180 text-[#008080]"
                        : "text-gray-400"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>

                {isActive && (
                  <>
                    <p className="pb-6 text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>

                    <img
                      src={item.img}
                      alt=""
                      className="mb-10 rounded-2xl"
                    />
                  </>
                )}

                {index !== benefits.length - 1 && (
                  <div className="border-b border-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GovernmentBenefits;
