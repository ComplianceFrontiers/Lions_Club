"use client";
import donationHomeThreeData from "@/data/DonationHomeThreeData";
import React, { useEffect, useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Progress from "../Progress/Progress";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  items: 1,
  gutter: 0,
  loop: true,
  nav: false,
  mouseDrag: true,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
      gutter: 30,
    },
    992: {
      items: 3,
      gutter: 30,
    },
    
  },
};

const DonationHomeThree = () => {
  const { tagLine, title, carouselData } = donationHomeThreeData;
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }
  return (
    <section className='sec-pad-top donation-home-3'>
      <div
        className='donation-home-3__shape '
        data-aos='slide-dowm'
        data-aos-easing='linear'
        data-aos-duration='1500'
      ></div>
      <Container>
        <div className='sec-title'>
          <p className='sec-title__tagline'>{tagLine}</p>

          <h2 className='sec-title__title'>{title}</h2>
        </div>
        <TinySlider settings={settings}>
          {carouselData.map((carousel) => (
            <div className='item' key={carousel.id}>
              <div
                className='donations-card'
                style={{ "--accent-color": carousel.accentColor }}
              >
                <div className='donations-card__image sec-pad-top'>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={carousel.image}
                    alt=''
                  />

                  <div className='donations-card__category'>
                    <Link href='#'>{carousel.category}</Link>
                  </div>
                </div>

                <div className='donations-card__content'>
                  <h3 className='donations-card__title'>
                    <Link href='donations-details'>{carousel.title}</Link>
                  </h3>

                  <p className='donations-card__text'>{carousel.text}</p>
                  {/* <Progress percent={carousel.count} /> */}

                  <div className='donations-card__amount'>
                    {carousel.amounts?.map((amount) => (
                      <p key={amount.id}>
                        <span>{amount.amount}</span> {amount.desc}
                      </p>
                    ))}
                    </div>
                    <button className="donations-card__know-more-btn">Know More</button>
                    </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </Container>
    </section>
  );
};
export default DonationHomeThree;
