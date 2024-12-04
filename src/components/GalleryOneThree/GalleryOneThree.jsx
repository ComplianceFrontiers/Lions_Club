"use client";
import galleryThreeData from "@/data/GalleryThreeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "../GalleryOne/Modal";

const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  lazyload: true,
  nav: false,
  gutter: 0,
  autoplay: true,
  autoplayTimeout: 6000,
  loop: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  touch: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controls: false,
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
    1200: {
      items: 5,
      gutter: 30,
    },
  },
};

const GalleryOneThree = () => {
  const [mounted, setMounted] = useState(false);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sectionStyle = {
    padding: "3.5rem 0",
  };

  return (
    <section style={sectionStyle}>
      <Container fluid>
        <TinySlider className='gallery-one__carousel' settings={settings}>
          
          {galleryThreeData.map((galleryOne, index) => (
                        <div key={galleryOne.id} className='item'>

              <div className='gallery-card__image'>
                <Image className='img-h-auto' src={galleryOne.image} alt='' />
            </div>
            </div>
          ))}
        </TinySlider>
      </Container>
    </section>
  );
};

export default GalleryOneThree;
