import blogData from "@/data/BlogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogPage = () => {
  const { carouselData } = blogData;
  return (
    <>
      <section className='sec-pad-top sec-pad-bottom'>
        <Container>
        <h1 style={{ color: '#c30010' }}>Youth Leadership Development</h1>
      <h2 style={{ color: '#ff0000' }}>Future Leaders Program</h2>

      <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
        <li>
          <strong>Case Studies & Role-Playing:</strong>
          <p style={{ margin: '10px 0' }}>
            Provide case studies based on historical and contemporary leaders. Encourage participants to role-play different leadership styles and analyze their effectiveness in various situations.
          </p>
        </li>
        <li>
          <strong>Self-Assessment:</strong>
          <p style={{ margin: '10px 0' }}>
            Encourage youth to reflect on their leadership style using assessments or surveys to help them understand their natural tendencies and how they can adapt different styles depending on the context.
          </p>
        </li>
        <li>
          <strong>Workshops & Discussions:</strong>
          <p style={{ margin: '10px 0' }}>
            Organize workshops where leaders from various fields discuss their leadership styles. Provide opportunities for youth to ask questions and learn from real-life examples.
          </p>
        </li>
      </ul>

      <p style={{ margin: '10px 0' }}>
        By exploring these leadership styles, youth can gain a broader understanding of what it means to be a leader, develop a style that aligns with their personality and values, and enhance their ability to lead in diverse situations.
      </p>

      <h2 style={{ color: '#ff0000' }}>Final Integration: The Experiential Learning Cycle</h2>
      <p style={{ margin: '10px 0' }}>
        All the above activities align with Kolb’s Experiential Learning Cycle:
      </p>

      <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
        <li><strong>Concrete Experience:</strong> Youth engage in hands-on leadership activities.</li>
        <li><strong>Reflective Observation:</strong> They reflect on their experiences to analyze successes and challenges.</li>
        <li><strong>Abstract Conceptualization:</strong> They connect their experiences to leadership theories and broader learning concepts.</li>
        <li><strong>Active Experimentation:</strong> Youth apply their learning to future activities and projects, continuously improving.</li>
      </ul>

      <p style={{ margin: '10px 0' }}>
        By weaving experiential learning into the program, DVLC can nurture young leaders who not only learn about leadership but live it through real experiences, empowering them to think, act, and grow as confident changemakers.
      </p>
      <h1 style={{ color: '#c30010', fontSize: '24px', marginBottom: '10px' }}>For the Day</h1>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        An interactive and engaging event around the <strong>“I Dream My Future…”</strong> theme for Grades 2–10 can incorporate elements of creativity, participation, and inspiration. Here’s a well-structured plan for a memorable event:
      </p>

      <h2 style={{color: '#c30010', fontSize: '20px', marginBottom: '10px' }}>Event Title:</h2>
      <h3 style={{ fontSize: '18px', marginBottom: '20px', fontStyle: 'italic' }}>“Voices of Tomorrow: I Dream My Future…”</h3>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>1. Opening Segment: “Dream Wall”</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Interactive Activity:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>Set up a large whiteboard, chalkboard, or mural paper labeled “Dream Wall” at the entrance.</li>
            <li>Provide colorful sticky notes, markers, and pens for participants and audience members.</li>
            <li>
              Ask each child to write a one-sentence or a keyword answer to the prompt: <em>“What is your dream for the future?”</em>
            </li>
            <li>This serves as an icebreaker and sets the tone for kids to visualize their aspirations.</li>
          </ul>
        </li>
        <li>
          <strong>Incorporation:</strong>
          <p style={{ marginLeft: '20px' }}>
            Refer to this Dream Wall during the program and highlight how diverse yet inspiring their dreams are.
          </p>
        </li>
      </ul>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>2. Main Segment: Elocution or Speech Showcase</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Format:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>Each participant delivers a 2–3 minute speech under the theme “I Dream My Future…”.</li>
            <li>
              Encourage creativity—students can speak, act, rhyme, or tell a short story of their envisioned future.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sub-Themes (Optional):</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>My Dream Career (doctor, scientist, artist, etc.)</li>
            <li>My Dream World (environment, peace, technology)</li>
            <li>My Dream Contribution (how I will help my community/family)</li>
          </ul>
        </li>
        <li>
          <strong>Props or Visuals:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>
              Allow participants to use props, costumes, or posters for their speeches to make it visually engaging.
            </li>
            <li>
              Example: A child aspiring to be an astronaut could use a helmet or space chart.
            </li>
          </ul>
        </li>
        <li>
          <strong>Engagement Tip:</strong>
          <p style={{ marginLeft: '20px' }}>
            Encourage audience participation by asking: <em>“What did you learn from their dream?”</em>
          </p>
        </li>
      </ul>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>3. “Future in Action” Role-Play</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Activity:</strong> Turn the stage into a role-play zone where participants act out moments from their future lives.
        </li>
        <li>
          <strong>Examples:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>A teacher conducting a mini “class” with the audience as students.</li>
            <li>A chef sharing a “recipe for success” with fun ingredients like hard work, kindness, and courage.</li>
            <li>A scientist explaining a future invention or discovery.</li>
          </ul>
        </li>
        <li>
          <strong>Why It Works:</strong> Role-playing is interactive and boosts confidence while showcasing dreams in an entertaining way.
        </li>
      </ul>
      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>4. Creative Collaboration: “Dream Teams”</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Group Activity:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>
              Divide participants into small groups (mixing ages) and ask them to create a “Future Vision Poster.”
            </li>
            <li>
              Each team collectively brainstorms and draws a vision of the future they would like to see—be it
              technology, careers, environmental changes, or society.
            </li>
            <li>
              Posters are displayed around the stage area, and one representative from each team briefly explains their
              poster.
            </li>
          </ul>
        </li>
        <li>
          <strong>Purpose:</strong> Encourages teamwork, creativity, and verbal expression.
        </li>
      </ul>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>
        5. Inspirational “Future Leaders” Panel (Guest Speaker)
      </h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          Invite a youth achiever, local leader, or successful professional to briefly speak about their journey and
          dream.
        </li>
        <li>
          <strong>Follow with a Q&A:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>“What inspired your dream?”</li>
            <li>“What challenges did you face?”</li>
          </ul>
        </li>
      </ul>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>6. “Vision Seeds” Keepsake</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Interactive Activity:</strong>
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>Provide each participant with a small biodegradable pot, soil, and a seed to plant.</li>
            <li>
              As they plant the seed, prompt them to say aloud: “I plant this seed to grow my future dream.”
            </li>
            <li>
              Use this moment to discuss how dreams, like seeds, require time, nurturing, and care to grow.
            </li>
          </ul>
        </li>
        <li>
          <strong>Purpose:</strong> A symbolic and tangible takeaway that ties their dreams to action.
        </li>
      </ul>

      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>7. Closing Segment: “Dream Showcase & Awards”</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          Recognize participants with certificates or symbolic awards:
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>“Future Visionary” (most inspiring dream)</li>
            <li>“Creative Dreamer” (most creative presentation)</li>
            <li>“Bold Dreamer” (best use of confidence and expression)</li>
          </ul>
        </li>
        <li>
          Conclude with an energizing group chant:
          <blockquote style={{ fontStyle: 'italic', marginLeft: '20px', borderLeft: '4px solid #3498db', paddingLeft: '10px' }}>
            “Our dreams are bright, our futures are strong, <br />
            We lead with courage, we can’t go wrong!”
          </blockquote>
        </li>
      </ul>

      <h3 style={{color: '#c30010', fontSize: '28px', marginTop: '20px' }}>Add-On Elements for Extra Engagement</h3>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>
          <strong>Dream Box:</strong> Kids can drop letters to their future selves in a decorated box. Letters can
          include their dreams and steps they’ll take to achieve them.
        </li>
        <li>
          <strong>Live Polling:</strong> Use simple tools like Mentimeter or Kahoot! to ask the audience questions like:
          <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
            <li>“Who inspired you today?”</li>
            <li>“What do you dream to be?”</li>
          </ul>
        </li>
      </ul>

      <h2 style={{color: '#c30010', fontSize: '28px', marginTop: '20px' }}>Why It’s Effective</h2>
      <ul style={{ marginLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
        <li>Combines creativity, public speaking, and hands-on activities.</li>
        <li>
          Provides a platform for kids to explore and express their aspirations while fostering teamwork and confidence.
        </li>
        <li>Keeps all participants and audience members engaged and connected throughout the event.</li>
      </ul>

      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        This structure ensures the event is inclusive, inspiring, and interactive, celebrating each child’s vision while
        encouraging them to take small steps toward their dreams.
      </p>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
