import donationThreeData from "@/data/DonationThree";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DonationThree = () => {
  const { cardData, ctaTwo } = donationThreeData;
  return (
    <section className='sec-pad-top'>
      <Container>
        <Row className='gutter-y-30'>
          {cardData.map((card) => (
            <Col
              key={card.id}
              md={12}
              lg={12}
              xl={4}
              className=''
              data-aos-delay='200ms'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
            >
              <div
                className='donation-card-three'
                style={{ "--accent-color": card.accentColor }}
              >
                <div className='donation-card-three__image'>
                  <Image src={card.image} alt='' />
                </div>
                <div className='donation-card-three__content'>
                  <div className='donation-card-three__icon'>
                    <i className={card.icon}></i>
                  </div>
                  <h3 className='donation-card-three__title'>
                    <Link href={card.link}>{card.title}</Link>
                  </h3>
                  <p className='donation-card-three__text'>{card.text}</p>
                </div>
              </div>
            </Col>
          ))}
 
        </Row>
      </Container>
    </section>
  );
};

export default DonationThree;
