import Gallery from "@/components/Gallery/Gallery";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Dynamically import all images from the gallery folder
const importAllImages = () => {
  const images = [];
  const context = require.context("@/assets/images/gallery/galleryData", false, /\.jpg$/);

  context.keys().forEach((fileName, index) => {
    images.push({
      id: index + 1,
      image: context(fileName).default,
    });
  });

  return images;
};

const GalleryData = {
  tagLine: "Upcoming events",
  title: "Check latest \n upcoming \n events",
  text: "There are many variations of passages of lorem ipsum available but the majority have suffered.",
  link: "contact",
  btnText: "Register your seat",
  carouselData: importAllImages(), // Load images dynamically into carouselData
};

export default GalleryData;
