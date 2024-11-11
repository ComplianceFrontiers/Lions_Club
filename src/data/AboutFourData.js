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
      text: "To be a dynamic community that empowers individuals through service, fosters youth leadership, and celebrates the cultural heritage of India, enriching the lives of those in the Delaware Valley and beyond.",
    },
    {
      id: 2,
      icon: faCheckCircle,
      title: "Mission Statement",
      text: "Our mission is to bring together the Indian diaspora in the Delaware Valley to engage in impactful community service, nurture future leaders, and honor our cultural roots. Through collaboration and compassion, we strive to create a supportive environment that uplifts our community and fosters growth, unity, and cultural pride.",
    },
    {
      id: 3,
      icon: faCheckCircle,
      title: "Goals",
      text: (
        <>
          1. Service Excellence: Lead meaningful community service projects focused on health, hunger relief, and environmental sustainability, positively impacting the Delaware Valley.
          <br />
          2. Youth Empowerment: Develop and inspire the next generation of leaders through our Future Leaders program, equipping them with essential life and leadership skills.
          <br />
          3. Cultural Celebration: Preserve and promote Indian heritage by hosting cultural events and workshops that celebrate diversity, educate the community, and strengthen cultural connections.
          <br />
          4. Community Engagement: Foster a welcoming and inclusive environment that unites members and supports connections within the broader community.
          <br />
          5. Sustainable Growth: Build a thriving, self-sustaining organization that continues to grow and adapt, expanding our reach and impact year over year.
        </>
      ),
    },
  ],
};
export default aboutFourData;
