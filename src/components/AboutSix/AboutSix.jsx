import aboutSixData from "@/data/AboutSixData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutSix = () => {
  const { bg, bg2, image1, image2, tagLine, text, title, lists } = aboutSixData;
  return (
    <section className='about-six about-six--pad-top about-six--pad-bottom'>
      <div
        className='about-six__bg'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      <div
        className='about-six__shape float-bob-x'
        style={{ backgroundImage: `url(${bg2.src})` }}
      ></div>

      <Container>
        <Row className='gutter-y-60'>
          <Col lg={6}>
            <div className='about-six__images'>
              <Image src={image1} alt='' />
              <Image src={image2} alt='' />
            </div>
          </Col>

          <Col lg={6}>
            <div className='about-six__content'>
              <div className='sec-title text-start'>
                <p className='sec-title__tagline'>{tagLine}</p>

                <h2 className='sec-title__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>

              <div className='about-six__content__text'>{text}</div>

              <ul className='list-unstyled about-six__list'>
                {lists.map((list) => (
                  <li key={list.id} className='about-six__list__item'>
                    <FontAwesomeIcon
                      className='about-six__list__icon'
                      icon={list.icon}
                    />

                    <h3 className='about-six__list__title'>{list.title}</h3>

                    <p className='about-six__list__text'>{list.text}</p>
                  </li>
                ))}
              </ul>

              <div className='about-six__btns'>
                <Link href='about' className='thm-btn about-six__btn'>
                  <span>Discover More</span>{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSix;
