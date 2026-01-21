import { useState } from "react";
import { useCases } from "./useCasesData";
import UseCaseCard from "./UseCaseCard";
import useCaseBadge from "../assets/useCaseBadge.svg";

const UseCasesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className=" max-w-sm mx-auto">
        <img src={useCaseBadge} alt="Use Case Badge" className="mb-4 mx-auto" />

        <h2 className="text-4xl mx-auto font-semibold mb-4 md:text-5xl">
          See How MANCE Keeps Work Moving Across Sample Sectors
        </h2>

        <p className="text-gray-600 mb-10 text-center">
          Mance drives businesses forward by actively addressing a range of
          challenges across various sectors.
        </p>
        <div className="md:hidden mx-2">
          {useCases.map((item, index) => (
            <div key={index} className="mb-14">
              <h3 className="text-3xl font-semibold mb-2 px-2">{item.title}</h3>

              <p className="text-sm text-gray-600 mb-40 px-2">
                {item.description}
              </p>

              <img
                src={item.image}
                className="w-full rounded-xl object-contain px-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="hidden md:flex max-w-6xl mx-auto px-6 gap-6"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {useCases.map((item, index) => (
          <div
            key={index}
            className={`
              transition-all duration-300
              ${activeIndex === index ? "w-[50%]" : "w-[25%]"}
            `}
          >
            <UseCaseCard
              data={item}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
