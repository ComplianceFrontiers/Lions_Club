import donationThreeData from "@/data/DonationThree";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutFourData from "@/data/AboutFourData";

const DonationThree = () => {
  const { cardData, ctaTwo } = donationThreeData;
  const {
    aboutShape,
    tagLine,
    title,
    aboutImage,
    icon,
    link,
    text,
    lists,
    videoId,
  } = aboutFourData;
  return (
    <section className='sec-pad-top' style={{ marginBottom: "100px" }}>
      <Container>
      <div className='sec-title' style={{ marginBottom: "30px" }}>
          <p className='sec-title__tagline'>{tagLine}</p>
          <h2 className='sec-title__title'>
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h2>
        </div>
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
