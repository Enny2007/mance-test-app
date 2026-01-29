import React from "react";

import ChallengesBadge from "../../assets/challengeBadge.svg";
import HealthIcon1 from "../../assets/healthIcon1.svg";
import HealthIcon2 from "../../assets/healthIcon2.svg";
import HealthIcon3 from "../../assets/healthIcon3.svg";
import HealthIcon4 from "../../assets/healthIcon4.svg";

const HealthCareChallenges: React.FC = () => {
  return (
    <section className="bg-whiite py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <img src={ChallengesBadge} alt="Challenges badge" />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-5xl font-bold text-gray-900 mb-14">
          Challenges <span className="text-[#008080]">Healthcare</span> Face
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              img: HealthIcon1,
              title: "Fragmented teams across hospitals, clinics, and departments",
              desc: "Disconnected units struggle to collaborate and align on common goals.",
            },
            {
              img: HealthIcon2,
              title: "Manual and time-consuming reporting processes",
              desc: "Tracking progress and outcomes drains resources and slows decision-making.",
            },
            {
              img: HealthIcon3,
              title: "Difficulty aligning organizational goals with daily operations",
              desc: "Teams often lose sight of strategic priorities in day-to-day work.",
            },
            {
              img: HealthIcon4,
              title: "Struggles to scale processes across multiple facilities",
              desc: "Expanding operations makes consistent execution and oversight difficult.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl bg-[#FAFAFA] p-10 "
            >
              {/* Icon */}
              <img
                src={item.img}
                alt=""
                className="w-15 h-20  pt-6"
              />

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 md:w-70">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed md:w-85">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCareChallenges;
