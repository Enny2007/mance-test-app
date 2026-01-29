import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import Demo from "../../components/Demo";
import HealthCareFAQ from "../healthcare/HealthCareFAQ";
import SupportResources from "../../components/SupportResources";
import Efficiency from "../../components/Efficiency";
import { useState } from "react";
import { Link } from "react-router-dom";
import HealthCareBadge from "../../assets/healthBadge.svg";
import Profiles from "../../assets/profiles.svg";
import HealthCareChallenges from "./HealthCareChallenges";
import HealthCareBenefits from "./HealthCareBenefits";
import HealthCareImageMarquee from "./HealthCareImageMarquee";

const HealthcareLayout = () => {
  //  modal state
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  //  open modal
  const handleRequestDemo = () => {
    setIsDemoOpen(true);
  };

  // close modal
  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <>
      <Header onRequestDemo={handleRequestDemo} />

      <section className="px-6 py-12 mx-auto max-w-7xl md:px-12 bg-[#FFFFFF]">
        <nav className="mb-6 text-[11px] text-gray-500">
          <Link to="/" className="hover:text-[#008080] transition">
            Homepage
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#008080] font-medium underline">
            Mance for Healthcare
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <img src={HealthCareBadge} className="MB-6" />

            <h1 className="text-[32px] leading-tight font-bold md:text-[52px] md:leading-[1.15] max-w-xl mb-8">
              Transform Healthcare Strategy Into Measurable Outcomes
            </h1>

            <button
              onClick={handleRequestDemo}
              className="inline-flex items-center rounded-md bg-[#008080] px-6 py-2.5 text-sm font-medium text-white hover:opacity-80 transition"
            >
              Request a Demo
            </button>
          </div>

          <div className="md:pt-16">
            <p className="text-sm leading-relaxed text-gray-500 max-w-md mb-6">
              Services Mance empowers healthcare providers and emergency
              response teams to translate strategic priorities into actionable
              tasks, monitor outcomes, and coordinate teams in real time. Ensure
              patient care, rapid response, and operational efficiency with
              clear accountability and transparent reporting.
            </p>

            <img
              src={Profiles}
              alt="User profiles"
              className="h-8 object-contain"
            />
          </div>
        </div>
      </section>
      <HealthCareImageMarquee/>
      <HealthCareChallenges />
      <HealthCareBenefits/>
      <HealthCareFAQ />
      <Demo onRequestDemo={handleRequestDemo} />
      <SupportResources />
      <Efficiency />
      <Footer />
      {isDemoOpen && <DemoModal onClose={handleCloseDemo} />}
    </>
  );
};

export default HealthcareLayout;
