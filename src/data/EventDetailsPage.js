import image from "@/assets/images/events/events-d-1.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const text1 = `
  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px;">The Central Idea</h2>
  <p style="font-family: Arial, sans-serif; color: #34495E; line-height: 1.6; margin-bottom: 20px;">
    The theme, <strong>"I Dream My Future…"</strong>, is a powerful invitation for young minds to:
  </p>
  <ul style="font-family: Arial, sans-serif; color: #34495E; line-height: 1.6; margin-bottom: 20px;">
    <li><strong>Think Beyond Today:</strong> What do they envision for their personal growth, their communities, or the world?</li>
    <li><strong>Express Boldly:</strong> Whether through speech, rhyme, storytelling, or role-play, participants bring their dreams to life.</li>
    <li><strong>Inspire Others:</strong> By sharing their dreams, they motivate their peers to dream big, think creatively, and act purposefully.</li>
  </ul>
  <p style="font-family: Arial, sans-serif; color: #34495E; line-height: 1.6; margin-bottom: 20px;">
    The event provides an opportunity for students to imagine themselves as the leaders, innovators, and changemakers of tomorrow. 
    Whether they dream of being a scientist, artist, entrepreneur, or environmentalist, the stage allows their voice to shine 
    while fostering essential life skills like communication, vision, and leadership.
  </p>
`;

const text2 = `
  <h2>Event Highlights: "Voices of Tomorrow: I Dream My Future…"</h2>
  <ul >
    <li style ="line-height: 1.6;"><strong>Dream Wall:</strong>
      <p>Participants share their dreams on a collaborative wall to visualize aspirations together.</p>
    </li>
    <li style ="line-height: 1.6;"><strong>Speech Showcase:</strong>
      <p>Youth deliver creative 2–3 minute speeches under the theme <strong>"I Dream My Future…"</strong> with props and visuals.</p>
    </li>
    <li style ="line-height: 1.6;"><strong>Vision Seeds:</strong>
      <p>A symbolic planting activity where participants nurture a seed as a representation of their dreams.</p>
    </li>
    <li style ="line-height: 1.6;"><strong>Awards & Closing:</strong>
      <p>Celebrate participants with recognition and end with an inspiring group chant.</p>
    </li>
    <li style ="line-height: 1.6;"><strong>Live Polling:</strong>
      <p>Engage the audience with interactive questions to reflect on inspiration and leadership.</p>
    </li>
  </ul>
`;

const text3Part1 = `
  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; text-align: center; margin-bottom: 20px;">Scope and Deliverables</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
      <tr style="background-color: #F4F6F7; border-bottom: 2px solid #BDC3C7;">
        <th style="padding: 10px; text-align: left; font-family: Arial, sans-serif; font-size: 16px; color: #34495E;">Deliverable</th>
        <th style="padding: 10px; text-align: left; font-family: Arial, sans-serif; font-size: 16px; color: #34495E;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #E5E8E8;">
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;"><strong>Dream Wall</strong></td>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;">All Ages</td>
      </tr>
      <tr style="border-bottom: 1px solid #E5E8E8;">
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;"><strong>Speech Showcase</strong></td>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;">Grades 2–12</td>
      </tr>
      <tr style="border-bottom: 1px solid #E5E8E8;">
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;"><strong>Vision Seed</strong></td>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;">Per Family</td>
      </tr>
      <tr style="border-bottom: 1px solid #E5E8E8;">
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;"><strong>Award and Closing</strong></td>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;">All + Chess Champs</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;"><strong>Live Polling</strong></td>
        <td style="padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #2C3E50;">Mobile holders</td>
      </tr>
    </tbody>
  </table>
`;

const text3Part2 = `
  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; text-align: center; margin-bottom: 20px;">Meeting Cadence</h2>
  
  <div style="display: flex;line-height: 1.5; flex-wrap: wrap; justify-content: space-evenly; gap: 5px;">
    <div style="background-color: #3498DB; color: white; padding: 10px; border-radius: 10px; width: 140px; text-align: center; font-family: Arial, sans-serif;">
      <strong>Opening</strong><br/> Welcome and Dream Wall
    </div>
    <div style="background-color: #2ECC71; color: white; padding: 10px; border-radius: 10px; width: 140px; text-align: center; font-family: Arial, sans-serif;">
      <strong>Main Segment</strong><br/> Elocution or Speech Showcase
    </div>
    <div style="background-color: #F39C12; color: white; padding: 10px; border-radius: 10px; width: 140px; text-align: center; font-family: Arial, sans-serif;">
      <strong>Keepsake</strong><br/> Vision Seed
    </div>
    <div style="background-color: #E74C3C; color: white; padding: 10px; border-radius: 10px; width: 140px; text-align: center; font-family: Arial, sans-serif;">
      <strong>Closing</strong><br/> Dream Showcase & Awards
    </div>
    <div style="background-color: #9B59B6; color: white; padding: 10px; border-radius: 10px; width: 140px; text-align: center; font-family: Arial, sans-serif;">
      <strong>Sidekick</strong><br/> Live Polling
    </div>
  </div>
`;


const text4 = `
  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; text-align: center; margin-bottom: 20px; margin-top: 20px; line-height: 1.6;">Segment Details</h2>

  <h3 style="font-family: Arial, sans-serif; color: #34495E; font-size: 18px; margin-bottom: 15px; line-height: 1.6;">1. Opening Segment: "Dream Wall"</h3>
  <ul style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px; line-height: 1.6;">
    <li><strong>Interactive Activity:</strong></li>
    <ul style="list-style-type: circle; padding-left: 20px; line-height: 1.6;">
      <li>Set up a large whiteboard, chalkboard, or mural paper labeled "Dream Wall" at the entrance.</li>
      <li>Provide colorful sticky notes, markers, and pens for participants.</li>
      <li>Ask each child to write a one-sentence or a keyword answer to the prompt: "What is your dream for the future?"</li>
    </ul>
    <li><strong>Incorporation:</strong> Refer to this Dream Wall during the program and highlight how diverse and inspiring their dreams are.</li>
  </ul>

  <h3 style="font-family: Arial, sans-serif; color: #34495E; font-size: 18px; margin-bottom: 15px; line-height: 1.6;">2. Main Segment: Elocution or Speech Showcase</h3>
  <ul style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px; line-height: 1.6;">
    <li><strong>Format:</strong> 2–3 minute speeches under the theme "I Dream My Future…".</li>
    <li><strong>Sub-Themes:</strong> My Dream Career, My Dream World, My Dream Contribution.</li>
    <li><strong>Props or Visuals:</strong> Allow participants to use props, costumes, or posters.</li>
    <li><strong>Engagement Tip:</strong> Encourage audience participation with interactive questions.</li>
  </ul>

  <h3 style="font-family: Arial, sans-serif; color: #34495E; font-size: 18px; margin-bottom: 15px; line-height: 1.6;">3. "Vision Seeds" Keepsake</h3>
  <ul style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px; line-height: 1.6;">
    <li>Provide a biodegradable pot, soil, and a seed to each participant.</li>
    <li>Encourage kids to say aloud: "I plant this seed to grow my future dream."</li>
    <li>Discuss how dreams, like seeds, need time, nurturing, and care.</li>
  </ul>

  <h3 style="font-family: Arial, sans-serif; color: #34495E; font-size: 18px; margin-bottom: 15px; line-height: 1.6;">4. Closing Segment: "Dream Showcase & Awards"</h3>
  <ul style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px; line-height: 1.6;">
    <li>Recognize participants with symbolic awards like "Future Visionary" or "Creative Dreamer".</li>
    <li>End with a group chant: "Our dreams are bright, our futures are strong, We lead with courage, we can’t go wrong!”</li>
  </ul>
`;


const text5 = `
  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; text-align: center; margin-bottom: 20px;">Next Steps and Resources</h2>

<h3 style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px;">Next Steps</h3>
<ul style="list-style-type: disc; padding-left: 20px; font-family: Arial, sans-serif; color: #2C3E50;">
  <li style="margin-bottom: 8px;">Make Poster</li>
  <li style="margin-bottom: 8px;">Spread the word</li>
  <li style="margin-bottom: 8px;">Finish the website</li>
  <li style="margin-bottom: 8px;">Assign action items to team members</li>
</ul>

<h3 style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px;">Resources</h3>
<ul style="list-style-type: disc; padding-left: 20px; font-family: Arial, sans-serif; color: #2C3E50;">
  <li style="margin-bottom: 8px;">Weekly report File</li>
  <li style="margin-bottom: 8px;">Project brief File</li>
  <li style="margin-bottom: 8px;">Brainstorming session File</li>
  <li style="margin-bottom: 8px;">Research File</li>
  <li style="margin-bottom: 8px;">Marketing assets File</li>
</ul>


  <h2 style="font-family: Arial, sans-serif; color: #2C3E50; text-align: center; margin-top: 40px; margin-bottom: 20px;">Team and Stakeholders</h2>
  
 <h3 style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px;">Team and Stakeholders</h3>

<h4 style="font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 10px;">Project Team</h4>
<p style="font-family: Arial, sans-serif; color: #34495E; margin-bottom: 10px;">
  <strong>List of team members working on the project:</strong>
</p>
<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; color: #2C3E50;">
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Role</th>
    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Name, Location (Time Zone)</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Manager</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (PST)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Researcher</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (CET)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Engineer</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (WET)</td>
  </tr>
</table>

<h4 style="font-family: Arial, sans-serif; color: #2C3E50; margin-top: 30px; margin-bottom: 10px;">Stakeholders</h4>
<p style="font-family: Arial, sans-serif; color: #34495E; margin-bottom: 10px;">
  <strong>List of key clients or stakeholders:</strong>
</p>
<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; color: #2C3E50; margin-bottom: 20px;">
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Role</th>
    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Name, Location (Time Zone)</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Owner</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (EST)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Approver</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (AST)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Contributor</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Person, City, Country (IST)</td>
  </tr>
</table>

`;


const eventDetailsPage = {
  image,
  date: "20 Aug",
  title: "Future Leaders Program: Empowering Tomorrow's Trailblazers",
  texts: [text1, text2, text3Part1,text3Part2, text4, text5],
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
