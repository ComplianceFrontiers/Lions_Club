import person from "@/assets/images/resources/about-5-p-1.png";
import shape1 from "@/assets/images/shapes/about-1-1.png";
import shape2 from "@/assets/images/shapes/about-1-2.png";
import aboutTwo from "@/assets/images/resources/about-1-1.jpg";
import aboutOne from "@/assets/images/resources/about-1-2.jpg";
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
  tagLine: "Meet the President",
  title: "We believe that we can save life",
  items,
  aboutTagline:
    "Paroti is the largest global charity and crowdfunding community in the world.",
    text: (
      <>
        Pinki Majumdar is a passionate leader committed to community service, empowerment, and cultural celebration.
        <br />
        With over 12 years of experience in shaping young minds, Pinki is the founder and director of Quriokidz, a tutoring and mentoring platform that supports students in developing literacy, financial literacy, and practical life skills.
        <br /><br />
        A strong advocate for diversity and inclusion, Pinki leads initiatives such as the Embracing Imperfection platform and Saree Speak (NJ), fostering a culture of acceptance and personal growth.
        <br />
        She also organizes workshops on financial literacy and data analysis for middle schoolers, helping young people prepare for future success.
        <br /><br />
        Pinki’s leadership extends beyond education; her passion for community service drives her efforts as the President of the Delaware Valley Lions Club, where she works to unite the Indian diaspora, celebrate cultural heritage, and promote the core values of Lions International.
        <br />
        Outside of her professional endeavors, Pinki enjoys travel and runs Furry Friends, a dog-sitting service that helps families vacation worry-free.
        <br /><br />
        As President of DVLC, Pinki continues to inspire positive change by empowering individuals and building a stronger, more inclusive community.
      </>
    ),
  metaImage,
  name: "Pinki Majumdar",
  desig: "Founder & President",
};

export default aboutOneData;
