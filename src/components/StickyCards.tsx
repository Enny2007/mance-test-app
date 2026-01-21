import type { CardData } from "./cardsData";

interface StickyCardProps extends CardData {
  index: number;
}

const StickyCard: React.FC<StickyCardProps> = ({
  number,
  title,
  text,
  image,
  bg,
  textColor,
  index,
}) => {
  return (
    <div
      className="sticky top-28 mx-auto"
      style={{
        zIndex: 10 + index,
        transform: `translate(${index * 16}px, ${index * 12}px)`,
      }}
    >
      <div
        className={`rounded-2xl shadow-lg p-6 md:p-10 pl-8 md:pl-14 md:pr-0
        ${bg} ${textColor}
        max-w-1100px min-h-320px mx-auto`}
      >
        <div className="flex flex-col md:flex-row md:items-center ">
          
          
          <div className="md:w-[52%]">
            <img src={number} alt="" className="h-8 mb-2" />

            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              {title}
            </h3>

            <p className="opacity-80 leading-relaxed">
              {text}
            </p>
          </div>

          
          <div className="mt-8 md:mt-0 md:w-[48%] md:ml-auto">
            <img
              src={image}
              alt={title}
              className=" rounded-xl w-full h-60"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default StickyCard;
