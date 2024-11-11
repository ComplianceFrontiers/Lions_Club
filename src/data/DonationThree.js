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
      text: "DVLC actively participates in Lions Club International’s service missions, with projects tailored to Delaware Valley's unique needs.",
      icon: "paroti-icon-organic-food",
      title: "Service Orientation",
      accentColor: "",
    },
    {
      id: 2,
      link: "donations-details",
      image: image2,
      text: "Our Future Leaders program is designed to develop essential skills in youth ages 12-18 through leadership workshops and community service projects.",
      icon: "paroti-icon-patient",
      title: "Future Leaders Program",
      accentColor: "var(--paroti-base)",
    },
    {
      id: 1,
      link: "donations-details",
      image: image1,
      text: "DVLC is committed to celebrating India’s rich cultural heritage through annual events and community workshops.",
      icon: "paroti-icon-organic-food",
      title: "Cultural Inheritance",
      accentColor: "",
    },
  ],
};

export default donationThreeData;