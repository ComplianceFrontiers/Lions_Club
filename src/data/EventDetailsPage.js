import image from "@/assets/images/events/events-d-1.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const text1 = `
  <h2>The Central Idea</h2>
  <p>The theme, <strong>"I Dream My Future…"</strong>, is a powerful invitation for young minds to:</p>
  <ul>
    <li><strong>Think Beyond Today:</strong> What do they envision for their personal growth, their communities, or the world?</li>
    <li><strong>Express Boldly:</strong> Whether through speech, rhyme, storytelling, or role-play, participants bring their dreams to life.</li>
    <li><strong>Inspire Others:</strong> By sharing their dreams, they motivate their peers to dream big, think creatively, and act purposefully.</li>
  </ul>
  <p>The event provides an opportunity for students to imagine themselves as the leaders, innovators, and changemakers of tomorrow. Whether they dream of being a scientist, artist, entrepreneur, or environmentalist, the stage allows their voice to shine while fostering essential life skills like communication, vision, and leadership.</p>
`;

const text2 = `
  <h2>Event Highlights: "Voices of Tomorrow: I Dream My Future…"</h2>
  <ul>
    <li><strong>Dream Wall:</strong>
      <p>Participants share their dreams on a collaborative wall to visualize aspirations together.</p>
    </li>
    <li><strong>Speech Showcase:</strong>
      <p>Youth deliver creative 2–3 minute speeches under the theme <strong>"I Dream My Future…"</strong> with props and visuals.</p>
    </li>
    <li><strong>Vision Seeds:</strong>
      <p>A symbolic planting activity where participants nurture a seed as a representation of their dreams.</p>
    </li>
    <li><strong>Awards & Closing:</strong>
      <p>Celebrate participants with recognition and end with an inspiring group chant.</p>
    </li>
    <li><strong>Live Polling:</strong>
      <p>Engage the audience with interactive questions to reflect on inspiration and leadership.</p>
    </li>
  </ul>
`;

const eventDetailsPage = {
  image,
  date: "20 Aug",
  title: "Future Leaders Program: Empowering Tomorrow's Trailblazers",
  texts: [text1, text2],
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
