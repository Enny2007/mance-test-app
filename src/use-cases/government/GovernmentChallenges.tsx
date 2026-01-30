import GovIcon1 from "../../assets/entIcon1.svg";
import GovIcon2 from "../../assets/govIcon2.svg";
import GovIcon3 from "../../assets/govIcon3.svg";
import ChallengesBadge from "../../assets/challengeBadge.svg";


const challenges = [
  {
    icon: GovIcon1,
    title: "Siloed agencies and poor inter-department collaboration",
    description:
      "Teams and departments often work independently, causing delays and fragmented execution.",
  },
  {
    icon: GovIcon2,
    title: "Limited transparency in project execution and outcomes",
    description:
      "Progress is unclear, making it hard for leaders and stakeholders to track results.",
  },
  {
    icon: GovIcon3,
    title: "Difficulty measuring performance against goals",
    description:
      "Without clear metrics, it’s challenging to assess success or identify areas for improvement.",
  },
];

const GovernmentChallenges = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/*  Header  */}
        <div className="mb-16 text-center">
          <img src={ChallengesBadge} className="w-30 mx-auto"/>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Challenges <span className="text-[#008080]">Governments</span> Face
          </h2>
        </div>

        {/*  Challenges Grid  */}
        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3">
          
          <div className="absolute left-0 right-0 top-8 hidden h-px border-t border-dashed border-gray-300 md:block" />

          {challenges.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center bg-[#FFFFFF]"
            >
              {/* ICON */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img src={item.icon} alt="" className="h-7 w-7" />
              </div>

              {/* TITLE */}
              <h3 className="mb-2 max-w-xs text-sm font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="max-w-xs text-xs leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentChallenges;
