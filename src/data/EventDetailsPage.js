import image from "@/assets/images/events/events-d-1.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const text1 = "Future Leaders Program: Empowering Tomorrow’s Trailblazers At DVLC, we believe in shaping the leaders of tomorrow by nurturing every aspect of a child’s development. Our Future Leaders Program is designed to foster academic excellence, emotional resilience, mental strength, financial literacy, and cognitive growth, providing a well-rounded experience for young minds. This summer, we had the privilege of guiding our participants on a transformative journey that went beyond textbooks and exams. Through interactive workshops, hands-on activities, and engaging challenges, we encouraged our campers to think critically, express themselves with confidence, and gain a deeper understanding of the world around them. True leadership isn’t just about academic achievement; it’s about being emotionally intelligent, adaptable, and compassionate. Our program emphasizes these qualities, ensuring that our future leaders are equipped with the skills and mindset to face challenges with courage and empathy. The lessons learned and the friendships forged during the Future Leaders Program will help our participants navigate life’s challenges with confidence and grace. Each step forward is a step towards a brighter, more inclusive future. Join us in our mission to build a community of leaders—one step at a time.";
// const text2 =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book";
// const text3 =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.";
const eventDetailsPage = {
  image,
  date: "20 Aug",
  title: "Future Leaders Program: Empowering Tomorrow's Trailblazers",
  texts: [text1],
  // titleTwo: "Event requirements",
  // text3,
};
export const sidebar = {
  socials: [
    {
      id: 1,
      icon: faTwitter,
      href: "#",
    },
    {
      id: 2,
      icon: faFacebook,
      href: "#",
    },
    {
      id: 3,
      icon: faPinterest,
      href: "#",
    },
    {
      id: 4,
      icon: faInstagram,
      href: "#",
    },
  ],
};

export default eventDetailsPage;
