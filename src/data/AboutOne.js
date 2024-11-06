import person from "@/assets/images/resources/about-5-p-1.png";
import shape1 from "@/assets/images/shapes/about-1-1.png";
import shape2 from "@/assets/images/shapes/about-1-2.png";
import aboutOne from "@/assets/images/resources/about-1-1.jpg";
import aboutTwo from "@/assets/images/resources/about-1-2.jpg";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import metaImage from "@/assets/images/resources/testi-1-1.png";
const items = [
  {
    id: 1,
    itemIcon: faCheckCircle,
    itemTitle: "Donate to Poors",
  },
  {
    id: 2,
    itemIcon: faCheckCircle,
    itemTitle: "Deserving People",
  },
];

const aboutOneData = {
  shape1,
  shape2,
  aboutOne,
  aboutTwo,
  tagLine: "More about the paroti",
  title: "We believe that we can save life",
  items,
  aboutTagline:
    "Paroti is the largest global charity and crowdfunding community in the world.",
  text: "We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit.",
  metaImage,
  name: "Mike hardson",
  desig: "CEO & CO Founder",
};

export default aboutOneData;
