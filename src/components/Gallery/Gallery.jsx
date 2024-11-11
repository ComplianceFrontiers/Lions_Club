'use client'
import React, { useState } from "react";
import Image from "next/image";
import GalleryData from "@/data/GalleryData";
import "./gallery.scss"; // Direct import of SCSS file without styles variable

const Gallery = () => {
  const { carouselData } = GalleryData;
  const [modalActive, setModalActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="gallery-container">
      
      {/* Masonry Gallery */}
      <div className="masonry-gallery">
        {carouselData.map((data, index) => (
          <div key={data.id} className="gallery-item" onClick={() => openModal(index)}>
            <Image src={data.image} alt={`Gallery Item ${index + 1}`} layout="responsive" width={350} height={250} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className={`modal ${modalActive ? "active" : ""}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Image src={carouselData[currentImageIndex].image} alt={`Full-screen Gallery ${currentImageIndex + 1}`} layout="responsive" width={1000} height={600} />
          <div className="arrow left" onClick={prevImage} aria-label="Previous Image" role="button">&#10094;</div>
          <div className="arrow right" onClick={nextImage} aria-label="Next Image" role="button">&#10095;</div>
          <div className="close-button" onClick={closeModal} aria-label="Close" role="button">&#10006;</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
