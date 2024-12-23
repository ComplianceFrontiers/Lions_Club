import cardImage1 from "@/assets/images/volunteers/volunteers-1.jpg";
import cardImage2 from "@/assets/images/volunteers/volunteers-2.jpg";
import cardImage3 from "@/assets/images/volunteers/volunteers-3.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const volunteersData = {
  tagLine: "We are here to Serve",
  title: "Our Leadership Team",
  volunteersDataCards: [
    {
      id: 1,
      title: "Kaushik Majumdar",
      designations: "Treasurer",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage1,
    },
    {
      id: 2,
      title: "Pratyush Majumdar",
      designations: "President-Future Leaders",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage2,
    },
    {
      id: 3,
      title: "Siddharth Bose",
      designations: "Vice President-Future Leaders",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage3,
    },
  ],
};
export default volunteersData;
