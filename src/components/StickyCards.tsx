import type { CardData } from "./cardsData";

interface StickyCardProps extends CardData {
  index: number;
}

const StickyCard: React.FC<StickyCardProps> = ({
  number,
  title,
  highlight,
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
        zIndex: 20 + index,
      }}
    >
      <div
        className={`rounded-2xl shadow-sm p-6 md:p-10 pl-8 md:pl-14 md:pr-0
        ${bg} ${textColor}
        max-w-1100px min-h-320px mx-auto`}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-[52%]">
            <img src={number} alt="" className=" mb-2 size-20 md:size-20" />

            <h3 className="text-4xl md:text-4xl w-70 font-semibold mb-2 md:w-70">
              {title}{" "}
              <span className="text-[#727272]">
                {highlight}
              </span>
            </h3>

            <p className="leading-relaxed text-[18px] w-80 pb-10 md:text-[20px] md:w-100">
              {text}
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-[48%] md:ml-auto">
            <img
              src={image}
              alt={title}
              className="rounded-xl w-full h-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
