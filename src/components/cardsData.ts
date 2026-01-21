import img1 from "../assets/scrollImage1.svg";
import img2 from "../assets/scrollImage2.svg";
import img3 from "../assets/scrollImage3.svg";
import img4 from "../assets/scrollImage4.svg";
import num1 from "../assets/num1.svg";
import num2 from "../assets/num2.svg";
import num3 from "../assets/num3.svg";
import num4 from "../assets/num4.svg";

export interface CardData {
  number: string;
  title: string;
  text: string;
  image: string;
  bg: string;
  textColor: string;
}

export const cards: CardData[] = [
  {
    number: num1,
    title: "Set Your Strategic Intent",
    text: "Define the mission and vision,two-levels up and one-level up objectives, measures of success, freedom, and constraints.",
    image: img1,
    bg: "bg-[#F7BFB]",
    textColor: "text-gray-900",
  },
  {
    number: num2,
    title: "Decompose And Assign Task",
    text: "Create specified tasks, derive implied tasks, and assign them to downlines across the mission hierarchy.",
    image: img2,
    bg: "bg-[#071818]",
    textColor: "text-white",
  },
  {
    number: num3,
    title: "Monitor KPIs And Adjust",
    text: "Set targets and report actual outcomes for measures of success and tasks across your chosen reporting cycle.",
    image: img3,
    bg: "bg-[#008080]",
    textColor: "text-white",
  },
  {
    number: num4,
    title: "Collaborate With Your Team",
    text: "Work with downlines and managers within shared mission plans to maintain alignment and execution clarity. ",
    image: img4,
    bg: "bg-[#E5E9EB]",
    textColor: "text-gray-900",
  },
];
