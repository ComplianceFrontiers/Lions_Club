import aboutShape from "@/assets/images/shapes/about-4-2.png";
import aboutImage from "@/assets/images/resources/about-4-1.jpg";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

const aboutFourData = {
  aboutShape,
  tagLine: "More about the DVLC",
  title: "Three potential pillars for DVLC \n align with our mission:",
  aboutImage,
  videoId: "CWCPovmNWK8",
  link: "https://www.youtube.com/watch?v=CWCPovmNWK8",
  icon: faPlay,
  text: "DVLC is an international platform for the Leos of Lions International Members ( New Jersery , PA and Delaware) , committed to empowering the next generation of leaders and strengthening the Indian diaspora to unite as a vibrant and impactful community. Through a culture of thinking and action, we provide youth with opportunities to lead, serve, connect with nature, and showcase their talents. Rooted in the rich traditions of India, DVLC inspires young changemakers to embrace cultural pride while fostering unity and making a meaningful impact locally and globally.",
  lists: [
    {
      id: 1,
      icon: faCheckCircle,
      title: "Mission Statement",
      text: "To empower the Indian diaspora in the Delaware Valley by fostering community service, developing youth leadership, promoting a connection to nature, and providing platforms for young talents to shine, all while celebrating India’s rich cultural heritage and diversity.",
    },
    {
      id: 2,
      icon: faCheckCircle,
      title: "Vision Statement",
      text: "To cultivate a thriving and empowered Indian community in the Delaware Valley, where youth are inspired to lead, engage with nature, and contribute to society through service and creativity, preserving and promoting the vibrant cultural legacy of India.",
    },
    {
      id: 3,
      icon: faCheckCircle,
      title: "Goal Statement",
      text: (
        <>
          <strong>Our goals are to:</strong>
          <br />
          <br />
          • Provide Indian youth with enriched leadership opportunities through the Leos program, enabling them to take on impactful roles in service initiatives.
          <br />
          <br />
          • Foster a connection to nature and environmental stewardship through experiential learning.
          <br />
          <br />
          • Create platforms for youth to showcase their talents and creative expression.
          <br />
          <br />
          • Promote cultural pride while nurturing the next generation of leaders committed to community service and sustainability.
        </>
      ),
      
    },
  ],
};
export default aboutFourData;
