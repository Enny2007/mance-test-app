import type { UseCase } from "./useCasesData";

interface Props {
  data: UseCase;
  isActive: boolean;
  onHover: () => void;
}

const UseCaseCard: React.FC<Props> = ({ data, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`
        h-360px
        rounded-2xl
        overflow-hidden
        transition-all duration-200 ease-out
        ${isActive ? "bg-[#008080] text-white" : "bg-white"}
      `}
    >
      <div className="flex h-110">
      
        <div
          className={`
            flex flex-col justify-center
            transition-all duration-200 mb-50
            ${isActive ? "w-1/2 p-4" : "w-full p-4"}
          `}
        >
          <h3 className="text-3xl font-semibold mb-2">
            {data.title}
          </h3>

          <p className="text-sm opacity-80">
            {data.description}
          </p>
        </div>

        
        {isActive && (
          <div className="w-1/2 h-full">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCaseCard;
