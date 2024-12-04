import aboutShape from "@/assets/images/shapes/about-4-2.png";
import aboutImage from "@/assets/images/resources/about-4-1.jpg";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

const aboutFourData = {
  aboutShape,
  tagLine: "More about the DVLC",
  title: "Serving the Delaware Valley \n with Pride and Heritage",
  aboutImage,
  videoId: "CWCPovmNWK8",
  link: "https://www.youtube.com/watch?v=CWCPovmNWK8",
  icon: faPlay,
  text: "DVLC is dedicated to empowering the Indian diaspora through community service, youth leadership, and celebrating the rich cultural diversity of India in the Delaware Valley.",
  lists: [
    {
      id: 1,
      icon: faCheckCircle,
      title: "Vision Statement",
      text: "Empowering the community through service, youth leadership, and celebration of India's cultural heritage in the Delaware Valley and beyond.",
    },
    {
      id: 2,
      icon: faCheckCircle,
      title: "Mission Statement",
      text: "Uniting the Indian diaspora in the Delaware Valley through community service, leadership development, and celebrating cultural heritage with pride.",
    },
    {
      id: 3,
      icon: faCheckCircle,
      title: "Goals",
      text: (
        <>
• Service Excellence
<br />
• Youth Empowerment
          <br />
          • Cultural Celebration
          <br />
          • Community Engagement          <br />
          • Sustainable Growth        </>
      ),
    },
  ],
};
export default aboutFourData;
