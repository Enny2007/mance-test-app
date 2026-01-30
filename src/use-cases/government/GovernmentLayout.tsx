import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Demo from "../../components/Demo";
import SupportResources from "../../components/SupportResources";
import Efficiency from "../../components/Efficiency";
import { Link } from "react-router-dom";
import GoveBadge from "../../assets/govBadge.svg";
import { useState } from "react";
import DemoModal from "../../components/DemoModal";
import GovernmentFAQ from "../government/GovernmentFAQ";
import GovernmentChallenges from "../government/GovernmentChallenges";
import GovImage from "../../assets/government.png";
import GovernmentBenefits from "./GovernmentBenefits";
const GovernmentLayout = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // open modal
  const handleRequestDemo = () => {
    setIsDemoOpen(true);
  };

  // close modal
  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <>
      <Header onRequestDemo={() => {}} />

      <section className="bg-[#FAFAFA] px-8">
        <div className="my-5 mx-10">
          <nav className="mb-2 text-[10px] text-gray-500">
            <Link to="/" className="hover:text-[#008080] transition">
              Homepage
            </Link>

            <span className="mx-2">›</span>

            <span className="text-[#008080] font-medium underline">
              Mance for Government
            </span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div className="">
              <img src={GoveBadge} alt="Image" className=" w-40 " />

              <h3 className="pt-4 text-3xl font-bold sm:w-90 ">
                Driving Policy Execution with Transparency and Accountability
              </h3>
              <p className="text-sm text-gray-500 mt-2 pb-4 sm:w-140">
                Mance helps government agencies and public institutions turn
                policy objectives into measurable actions. From strategic
                planning to task delegation and KPI tracking, it ensures
                accountability, transparency, and efficient execution across
                departments.
              </p>
              <button
                onClick={handleRequestDemo}
                className="bg-[#008080] text-white px-6 py-3 rounded-md text-sm hover:opacity-60 transition"
              >
                Request a Demo
              </button>
            </div>

            <div>
              <img src={GovImage} className="w-100 md:mx-15" />



            </div>
          </div>
        </div>
      </section>
      <GovernmentChallenges />
      <GovernmentBenefits/>
      <GovernmentFAQ />
      <Demo onRequestDemo={handleRequestDemo} />
      <SupportResources />
      <Efficiency />

      <Footer />
      {isDemoOpen && <DemoModal onClose={handleCloseDemo} />}
    </>
  );
};

export default GovernmentLayout;
