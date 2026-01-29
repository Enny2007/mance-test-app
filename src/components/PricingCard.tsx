import check from "../assets/check.svg";

interface PricingCardProps {
  title: string;
  users: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  title,
  users,
  price,
  features,
  highlighted = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`h-130 rounded-xl p-6 flex flex-col justify-between transition
        ${
          highlighted
            ? "bg-[#008080] text-white"
            : "bg-white border border-gray-200"
        }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <span
            className={`text-xs px-3 py-1 rounded-md 
              ${
                highlighted
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            {users}
          </span>
        </div>

        <div className="flex items-end gap-2 mb-6">
          <span className="text-4xl font-bold">{price}/</span>
          <span className="text-xl opacity-80">Monthly</span>
          <span
            className={`text-xs px-2 py-1 rounded-md
              ${
                highlighted
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            Per User
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <img src={check} alt="check" className="w-4 h-4" />
              <span className="text-xl opacity-70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className={`text-center py-3 rounded-lg border transition font-bold
          ${
            highlighted
              ? "border-white text-white hover:bg-gray-200 hover:text-teal-700"
              : "border-gray-300 text-teal-600 hover:bg-gray-200"
          }`}
      >
        Get Started
      </button>
    </div>
  );
}
