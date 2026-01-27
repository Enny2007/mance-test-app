import SparklesIcon from "../assets/sparkles-svgrepo-com.svg";

type FeatureCardHoverProps = {
  title: string;
  description: string;
  benefits: string[];
};

const FeatureCardHover = ({
  title,
  description,
  benefits,
}: FeatureCardHoverProps) => {
  return (
    <div className="absolute inset-0 rounded-2xl cursor-pointer right-0 bg-[#1f2933] px-10 pt-10 pb-14 text-white">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-3 text-md text-gray-300">{description}</p>

      <div className="mt-6 flex items-center gap-2">
        <img src={SparklesIcon} className="h-5 w-5 text-teal-400" />
        <span className="text-[18px] font-medium tracking-wide">BENEFITS:</span>
      </div>

      <ul className="mt-4 space-y-3 text-md text-gray-300">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCardHover;
