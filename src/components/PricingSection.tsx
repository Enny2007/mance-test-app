import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingModal from "./PricingModal";
import pricingBadge from "../assets/pricingBadge.svg";
import VerifyEmailModal from "./VerifyEmailModal";

const pricingPlans = [
  {
    title: "Basic",
    users: "1 - 10 Users",
    price: "$10",
    features: [
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
    ],
    highlighted: false,
  },
  {
    title: "Standard",
    users: "11 - 50 Users",
    price: "$25",
    features: [
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
    ],
    highlighted: false,
  },
  {
    title: "Premium",
    users: "51 - 100 Users",
    price: "$150",
    features: [
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
    ],
    highlighted: false,
  },
  {
    title: "Enterprise",
    users: "100 - 1000 Users",
    price: "$500",
    features: [
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
      "Lorem Ipsum is simply dummy simply",
    ],
    highlighted: true,
  },
];

export type PricingPlan = (typeof pricingPlans)[number];

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsPricingOpen(true);
  };

  const handleCloseModal = () => {
    setIsPricingOpen(false);
    setSelectedPlan(null);
  };
  const handleVerifyEmail = () => {
    setIsPricingOpen(false);
    setIsVerifyOpen(true);
  };

  const handleCloseVerifyModal = () => {
    setIsVerifyOpen(false);
  };

  return (
    <section className="bg-white py-24 px-10">
      <div className="mx-auto">
        <img src={pricingBadge} alt="Pricing Badge" className="mb-4 mx-auto" />
        <h2 className="text-5xl font-semibold mb-4 md:text-6xl text-center leading-tight md:mx-auto md:w-150 ">
          Pick Your Plan, <span className="text-[#008080]">Choose </span> Your
          Product
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>

      {/* Pricing Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        plan={selectedPlan}
        onClose={handleCloseModal}
        onVerifyEmail={handleVerifyEmail}
      />

      {isVerifyOpen && <VerifyEmailModal onClose={handleCloseVerifyModal} />}
    </section>
  );
};

export default PricingSection;
