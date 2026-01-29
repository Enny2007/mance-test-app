import { useState } from "react";
import { useCases } from "./useCasesData";
import UseCaseCard from "./UseCaseCard";
import useCaseBadge from "../assets/useCaseBadge.svg";
import { Link } from "react-router-dom";

const UseCasesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-3xl mx-auto text-center">
        <img src={useCaseBadge} alt="Use Case Badge" className="mb-4 mx-auto" />

        <h2 className="text-4xl md:text-5xl font-semibold mb-4 max-w-2xl mx-auto">
          See How MANCE Keeps Work Moving Across Sample Sectors
        </h2>

        <p className="text-gray-600 mb-10 max-w-xl mx-auto ml-2">
          Mance drives businesses forward by actively addressing a range of
          challenges across various sectors. Not limited to the sectors below
        </p>

        <div className="md:hidden mx-2 text-left">
          {useCases.map((item, index) => (
            <Link
              key={index}
              to={`/use-cases/${item.slug}`}
              className="block mb-10"
            >
              <div className="bg-white rounded-2xl shadow-sm p-4 active:scale-[0.98] transition">
                <h3 className="text-3xl font-semibold mb-2">
                  {item.title}{" "}
                  <span className="text-gray-500">{item.highlight}</span>
                </h3>

                <p className="text-sm text-gray-600 mb-30">{item.description}</p>

                <img
                  src={item.image}
                  className="w-full rounded-xl object-contain"
                />
              </div>
            </Link>
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
