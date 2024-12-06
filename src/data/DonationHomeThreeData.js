import donation1 from "@/assets/images/donations/donations-1-1.jpg";
import donation2 from "@/assets/images/donations/donations-1-2.jpg";
import donation3 from "@/assets/images/donations/donations-1-3.jpg";

const donationHomeThreeData = {
  tagLine: "Join us in our endeavor",
  title: "Discover Our Upcoming Events",
  carouselData: [
    {
      id: 1,
      image: donation1,
      category: "Future Leaders",
      title: "Launching the Path to Leadership",
      text: "Future Leaders is a youth program dedicated to shaping confident, compassionate leaders. Through hands-onn learning and community service, we empowern young minds to lead with purpose and integrity with Love.",
      count: "36",
      amounts: [
        {
          id: 1,
          amount: "Date ",
          desc: "22-Sep-2024",
        },
        {
          id: 2,
          amount: "Time",
          desc: "09:00A.M – 2:00 P.M",
        },
      ],
      accentColor: "",
    },
    {
      id: 2,
      image: donation2,
      category: "Cultural Inheritance",
      title: "New Year Celebration: Connecting Families in the Indiann Diaspora",
      text: "Join us for a vibrant New Year celebration that brings together families from the Indian diaspora. A special occasion to connect, share traditions, and kickstart the year with joy and unity.",
      count: "36",
      amounts: [
        {
          id: 1,
          amount: "Date",
          desc: "21-Dec-2024",
        },
        {
          id: 2,
          amount: "Time",
          desc: "05:00P.M – 10:00 P.M ",
        },
      ],
      accentColor: "#8139e7",
    },
    {
      id: 3,
      image: donation3,
      category: "Service Orientation",
      title: "Chess with Cops: A Fundraising Tournament for Community Unity",
      text: "Join us for Chess with Cops, a unique fundraising event that brings together law enforcement and the community through the game of chess. Support a great cause while enjoying friendly competition and building connections",
      count: "36",
      amounts: [
        {
          id: 1,
          amount: "Date",
          desc: "11-Jan-2024",
        },
        {
          id: 2,
          amount: "Time",
          desc: "10:00P.M – 2:00 P.M ",
        },
      ],
      accentColor: "#fdbe44",
    },
  ],
};
export default donationHomeThreeData;
