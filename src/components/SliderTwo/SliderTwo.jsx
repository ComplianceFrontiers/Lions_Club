"use client";
// import "./SliderTwo.css";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

import bg from "@/assets/images/shapes/slider-two-bg-1-1.png";

import sliderTwoData from "@/data/SliderTwoData";
import { Container } from "react-bootstrap";
import Link from "next/link";

const SliderTwo = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    lazyload: true,
    mode: "gallery",
    animateIn: "fadeIn",
    animateOut: "slideOutDown",
    animateDelay: 5000,
    autoplayDirection: "backward",
    slideBy: "page",
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoHeight: true,
    controls: true,
    controlsContainer: ".slider-two .tns-controls",
    container: "#verticle",
    axis: "verticle",
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
    onInit: (current) => setCurrentSlide(current),
    onIndexChanged: (current) => setCurrentSlide(current),
  };
  return (
    <section
      className='slider-one slider-two '
      style={{ backgroundColor:"#df5311"}}
      // style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className='position-relative overflow-hidden'>
        <div className='tns-controls'>
          <button className='tns-prev'>
            <span className='paroti-icon-left-arrow'></span>
          </button>
          <button className='tns-next'>
            <span className='paroti-icon-right-arrow'></span>
          </button>
        </div>

        <TinySlider settings={settings}>
          {sliderTwoData.map((data, index) => (
            <div key={data.id} className='item'>
              <div className='slider-one__item'>
                <div
                  className='slider-one__image'
                  style={{ backgroundImage: `url(${data.bg && data.bg.src})` }}
                ></div>

                <Container>
                  <h2 className='slider-one__title'>{data.title}</h2>
                  
                  <p className='slider-one__text'>{data.text}</p>

                  
                  <div className='slider-one__btns'>
                    <Link href='about' className='thm-btn slider-one__btn'>
                      <span>Discover More</span>{" "}
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </section>
  );
};

export default SliderTwo;
