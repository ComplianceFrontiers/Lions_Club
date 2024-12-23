import blogTwoData from "@/data/BlogTwoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogTwo = () => {
  const { blogImage, blogData, tagLine, title } = blogTwoData;
  return (
    <section className='sec-pad-top sec-pad-bottom blog-home-two'>
      <Image
        className='blog-home-two__shape'
        data-aos='fade-left'
        data-aos-easing='linear'
        data-aos-duration='1500'
        src={blogImage}
        alt=''
      />

      {/* <Container>
        <div className='sec-title text-center'>
          <p className='sec-title__tagline'>{tagLine}</p>

          <h2 className='sec-title__title'>{title}</h2>
        </div>

        <Row className='gutter-y-30'>
          {blogData.map((data) => (
            <Col key={data.id} md={12} lg={6}>
              <div className='blog-card-two'>
                <div className='blog-card__date'>
                  <span>28</span>Oct
                </div>
{/* 
                <div className='blog-card-two__content'>
                  <div className='blog-card-two__content__top'>
                    <div className='blog-card-two__author'>
                      <Image src={data.author} alt='' />
                    </div>

                    <ul className='blog-card__meta list-unstyled'>
                      {data.lists.map((list) => (
                        <li key={list.id}>
                          <i>
                            <FontAwesomeIcon icon={list.icon} />
                          </i>
                          <Link href='#'>{list.cont}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className='blog-card__title'>
                    <Link href={data.link}>{data.title}</Link>
                  </h3>

                  <p className='blog-card-two__text'>{data.text}</p>

                  <Link href={data.link} className='blog-card__links'>
                    <i>
                      <FontAwesomeIcon icon={data.linkIcon} />
                    </i>
                    {data.linkText}
                  </Link>
                </div> */}

                {/* <div className='blog-card-two__image'>
                  <Image src={data.image} alt='' />
                </div> */}
              {/* </div>
            </Col>
          ))}
        </Row>
      </Container> */} */
    </section>
  );
};

export default BlogTwo;
