import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import SupportResources from "../../components/SupportResources";
import Efficiency from "../../components/Efficiency";

import EnterpriseBadge from "../../assets/entBadge.svg";
import EnterpriseImage from "../../assets/enterprise1.svg";
import ChallengesBadge from "../../assets/challengeBadge.svg";

import EntIcon1 from "../../assets/entIcon1.svg";
import EntIcon2 from "../../assets/entIcon2.svg";
import EntIcon3 from "../../assets/entIcon3.svg";
import EntIcon4 from "../../assets/entIcon4.svg";
import EntIcon5 from "../../assets/entIcon5.svg";
import EntIcon6 from "../../assets/entIcon6.svg";

import EnterpriseSolutions from "./EnterpriseSolutions";
import EnterpriseFAQ from "./EnterpriseFAQ";
import Demo from "../../components/Demo";

const EnterpriseLayout = () => {
  // modal state
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
      {/* Header */}
      <Header onRequestDemo={handleRequestDemo} />

      {/* HERO SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="mb-2 text-[10px] text-gray-500">
            <Link to="/" className="hover:text-[#008080] transition">
              Homepage
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[#008080] font-medium underline">
              Mance for Business
            </span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={EnterpriseBadge} className="size-20" />

              <h1 className="text-4xl md:text-5xl md:w-120 font-semibold leading-tight mb-2">
                Turn Business Strategy Into Tangible
                <br /> Results
              </h1>

              <p className="text-gray-500 max-w-xl mb-8">
                Mance enables enterprises to translate high-level strategy into
                structured execution across departments and teams.
              </p>

            
              <button
                onClick={handleRequestDemo}
                className="bg-[#008080] text-white px-6 py-3 rounded-md text-sm hover:opacity-60 transition"
              >
                Request a Demo
              </button>
            </div>

            <div className="relative">
              <img
                src={EnterpriseImage}
                alt="Enterprise"
                className="md:mx-30 animate-[float_4s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#071818] rounded-2xl px-6 py-14 md:px-10 md:py-16">
            <div className="flex justify-center mb-4">
              <img src={ChallengesBadge} alt="Challenges badge" />
            </div>

            <h2 className="text-center text-2xl md:text-5xl font-bold text-white mb-12">
              Challenges Enterprises Face
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  img: EntIcon1,
                  title: "Misaligned goals across departments",
                  desc: "Teams pursue conflicting objectives without a shared mission.",
                },
                {
                  img: EntIcon2,
                  title: "Disconnected teams working in silos",
                  desc: "Collaboration suffers when communication is fragmented.",
                },
                {
                  img: EntIcon3,
                  title: "Slow decision-making due to scattered data",
                  desc: "Leaders struggle to act without a single source of truth.",
                },
                {
                  img: EntIcon4,
                  title: "Lack of visibility into task ownership",
                  desc: "It’s unclear who is accountable for what and when.",
                },
                {
                  img: EntIcon5,
                  title: "Manual reporting processes",
                  desc: "Tracking progress drains resources and slows action.",
                },
                {
                  img: EntIcon6,
                  title: "Poor alignment between strategy and execution",
                  desc: "Plans remain on paper while results fail to follow.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <img src={item.img} className="w-8 h-8" />
                  <h3 className="text-white font-medium w-40">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnterpriseSolutions />
      <EnterpriseFAQ />
     <Demo onRequestDemo={handleRequestDemo} />

      <SupportResources />
      <Efficiency />
      <Footer />

       {isDemoOpen && <DemoModal onClose={handleCloseDemo} />}
      
    </>
  );
};

export default EnterpriseLayout;
