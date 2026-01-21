import PricingCard from "./PricingCard";
import pricingBadge from "../assets/pricingBadge.svg";

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

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-10">
      <div className="max-w-sm mx-auto">
        <img src={pricingBadge} alt="Pricing Badge" className="mb-4 mx-auto " />
        <h2 className="text-4xl font-semibold mb-4  md:text-5xl">
          Pick Your Plan,<span className="text-[#008080]">Choose </span> Your
          Product
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
};
export default PricingSection;
