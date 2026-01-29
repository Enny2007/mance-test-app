import React from "react";

import BenefitBadge from "../../assets/benefitBadge.svg";
import HealthPic1 from "../../assets/healthpic1.svg";
import HealthPic2 from "../../assets/healthpic2.svg";
import HealthPic3 from "../../assets/healthpic3.svg";

const HealthCareBenefits: React.FC = () => {
  return (
    <section className="bg-[#F7F9F9] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <img src={BenefitBadge} alt="Benefit badge" />
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-20">
          How Mance Solves This
        </h2>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center md:mt-18">
            <img
              src={HealthPic1}
              alt="Automated dashboards"
              className="mb-6 w-220px"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2 w-46">
              Automated Dashboards & Reports
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs w-70">
              Gain real-time visibility into performance without manual tracking
              or delays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center md:mt-28">
            <img
              src={HealthPic2}
              alt="Centralised planning"
              className="mb-6 w-220px"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2 w-46 ">
              Centralised Mission Planning Hub
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs w-70 md:w-75">
              Plan, assign, and monitor strategic initiatives in one unified
              system for all teams and locations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center ">
            <img
              src={HealthPic3}
              alt="Scalable workflows"
              className=" w-220px mb-6 pt-2"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2 w-46 md:w-20">
              Scalable Workflows
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs w-75 ">
              Easily adapt execution processes across multiple departments,
              clinics, and hospitals while maintaining alignment and
              accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareBenefits;
