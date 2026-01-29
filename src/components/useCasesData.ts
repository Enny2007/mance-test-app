import enterpriseImg from "../assets/workers.png";
import governmentImg from "../assets/group.png";
import healthcareImg from "../assets/healthcare.png";

export interface UseCase {
  title: string;
  highlight:string,
  slug:string,
  description: string;
  image: string;
}

export const useCases: UseCase[] = [
  {
    title: "Enterprises",
    highlight: "Business & Corporate",
    slug: "enterprise",
    description: "Turn Business Strategy Into Tangible Results",
    image: enterpriseImg,
  },
  {
    title: "Government &",
    highlight: "Public Sector",
    slug: "government",
    description:
      "Driving policy execution with transparency and accountability",
    image: governmentImg,
  },
  {
    title: "Healthcare & ",
    highlight:"Emergency Services",
     slug: "healthcare",
    description:
      "Transform Healthcare Strategy Into Measurable Outcomes",
    image: healthcareImg,
  },
];
