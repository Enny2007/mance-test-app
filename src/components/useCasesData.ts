import enterpriseImg from "../assets/workers.png";
import governmentImg from "../assets/group.png";
import healthcareImg from "../assets/healthcare.png";

export interface UseCase {
  title: string;
  highlight:string,
  description: string;
  image: string;
}

export const useCases: UseCase[] = [
  {
    title: "Enterprises",
    highlight: "Business & Corporate",
    description: "Turn Business Strategy Into Tangible Results",
    image: enterpriseImg,
  },
  {
    title: "Government &",
    highlight: "Public Sector",
    description:
      "Driving policy execution with transparency and accountability",
    image: governmentImg,
  },
  {
    title: "Healthcare & ",
    highlight:"Emergency Services",
    description:
      "Transform Healthcare Strategy Into Measurable Outcomes",
    image: healthcareImg,
  },
];
