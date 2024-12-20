import image1 from "@/assets/images/donations/donations-1-1.jpg";
import image2 from "@/assets/images/donations/donations-1-2.jpg";
import image3 from "@/assets/images/donations/donations-1-3.jpg";
import image4 from "@/assets/images/events/events-1-4.jpg";
import image5 from "@/assets/images/events/events-1-5.jpg";
import image6 from "@/assets/images/events/events-1-6.jpg";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const eventTwoData = {
  tagLine: "Upcoming events",
  title: "Check latest \n upcoming \n events",
  text: "There are many variations of passages of lorem ipsum available but the majority have suffered.",
  link: "contact",
  btnText: "Register your seat",
  carouselData: [
    {
      id: 1,
      image: image1,
      date: "22-Sep-2024",
      lists: [
        { id: 1, icon: faClock, cont: "09:00A.M – 2:00 P.M" },
      ],
      title: "Lauching the Path to Leadership",
      link: "event-details",
    },
    {
      id: 2,
      image: image2,
      date: "21-Dec-2024",
      lists: [
        { id: 1, icon: faClock, cont: "05:00P.M – 10:00 P.M" },
      ],
      title: "New Year Celebration: Connecting Families in the Diaspora",
      link: "event-details",
    },
    {
      id: 3,
      image: image3,
      date: "11-Jan-2025",
      lists: [
        { id: 1, icon: faClock, cont: "10:00P.M – 2:00 P.M" },
      ],
      title: "Chess with Cops: A Fundraising Tournament for Community Unity",
      link: "event-details",
    },
    {
      id: 4,
      image: image3,
      date: "26-Jan-2025",
      lists: [
        { id: 1, icon: faClock, cont: "5:00P.M – 10:00 P.M" },
      ],
      title: "DVLC Kickoff",
      link: "event-details",
    },
  ],
};
export default eventTwoData;
