import image1 from "@/assets/images/events/events-1-1.jpg";
import image2 from "@/assets/images/events/events-1-2.jpg";
import image3 from "@/assets/images/events/events-1-3.jpg";
import image4 from "@/assets/images/events/events-1-4.jpg";
import image5 from "@/assets/images/events/events-1-5.jpg";
import image6 from "@/assets/images/events/events-1-6.jpg";
import Gallery from "@/components/Gallery/Gallery";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const GalleryData = {
  tagLine: "Upcoming events",
  title: "Check latest \n upcoming \n events",
  text: "There are many variations of passages of lorem ipsum available but the majority have suffered.",
  link: "contact",
  btnText: "Register your seat",
  carouselData: [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ],
};
export default GalleryData;
