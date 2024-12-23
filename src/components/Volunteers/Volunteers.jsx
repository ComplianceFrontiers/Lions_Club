import volunteersData from "@/data/VolunteersData";
import volunteersPageData from "@/data/VolunteersPageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Volunteers = ({ page }) => {
  const data = page ? volunteersPageData : volunteersData;

  const { tagLine, title, volunteersDataCards } = data;

  // Define the flag colors in sequence
  const flagColors = [
    { bg: '#FF9933', text: '#fff' }, // Saffron with white text
    { bg: ' #00008B', text: '#000' }, // White with black text
    { bg: '#138808', text: '#fff' }, // Green with white text
  ];
  return (
    <section className="sec-pad-top sec-pad-bottom">
      <Container>
        {!page && (
          <div className='sec-title2'>
            <p className='sec-title__tagline'>{tagLine}</p>

            <h2 className='sec-title__title'>{title}</h2>
          </div>
        )}

        <Row className="gutter-y-30">
          {volunteersDataCards.map((card, index) => {
            const { bg, text } = flagColors[index % flagColors.length];
            return (
              <Col key={card.id} md={6} lg={4}>
                <div
                  className="volunteers-card"
                  style={{
                    '--card-color': bg,
                    '--text-color': text,
                  }}
                >
                  <h3 className="volunteers-card__title">
                    <Link href="#">{card.title}</Link>
                  </h3>
                  <p className="volunteers-card__designation">
                    {card.designations}
                  </p>
                  <div className="volunteers-card__image">
                    <Image src={card.image} alt="" />
                  </div>
                  <div className="volunteers-card__social">
                    {card.socials.map((social) => (
                      <Link href="#" key={social.id}>
                        <FontAwesomeIcon icon={social.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Volunteers;
