import image1 from "@/assets/images/resources/donation-3-1.png";
import image2 from "@/assets/images/resources/donation-3-2.png";
import bg from "@/assets/images/backgrounds/cta-2-bg-1-1.jpg";

const donationThreeData = {
  ctaTwo: {
    bg,
    icon: "paroti-icon-support cta-two__icon",
    title: "Let’s make a lives of other difference in the people",
    link: "donations",
    btnText: "Start donating",
    btnIcon: "cta-two__arrow",
  },
  cardData: [{
      id: 1,
      link: "donations-details",
      image: image1,
      text: "Empowering young individuals to take on leadership roles through mentorship, service opportunities, and platforms that foster critical thinking, decision-making, and teamwork.",
      icon: "paroti-icon-organic-food",
      title: "Youth Leadership Development (Future Leaders Program)",
      accentColor: "",
    },
    {
      id: 2,
      link: "donations-details",
      image: image2,
      text: "Instilling a sense of purpose through impactful community service initiatives, a connection to nature, and programs encouraging environmental stewardship and sustainable practices.",
      icon: "paroti-icon-patient",
      title: "Service and Sustainability (Community Service)",
      accentColor: "var(--paroti-base)",
    },
    {
      id: 1,
      link: "donations-details",
      image: image1,
      text: "Strengthening the Indian diaspora by celebrating and preserving India’s rich cultural traditions, promoting a sense of belonging, and fostering unity within the community.",
      icon: "paroti-icon-organic-food",
      title: "Cultural Unity and Heritage (Celebrations)",
      accentColor: "",
    },
  ],
};

export default donationThreeData;