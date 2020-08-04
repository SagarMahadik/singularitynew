import React, { useRef, UseEffect, useEffect } from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  LeftAlignedRowContainer,
  HorizontalSilder,
  SliderContainer,
  ImageContainer,
  HorizontalImage,
  MainContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { ProductImage, OverLay } from 'styles/Singularity/Style1.0/ImageStyles';
import FormHeading from 'components/Singularity/ApplicationView/FormHeadings';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Frame, Scroll } from 'framer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Pagination, Navigation, Thumbs } from 'swiper';

import 'swiper/swiper-bundle.css';

import {
  ProductImageName,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import MotionSlider from 'components/Singularity/ApplicationView/MotionSlider';

gsap.registerPlugin(ScrollTrigger);

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Thumbs]);

const Wrapper = styled.div``;

function ImageGalley() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let imageRef = useRef([]);
  const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const PiattoImages = [
    {
      product: 'Macaron Gift Box',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/Christmas_Hamper_kg4mpe.jpg'
    },
    {
      product: 'Barley Salad',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464705/Barley_Salad_with_Hulk_SMoothie_new_wbhgms.jpg'
    },
    {
      product: 'Barley Salad ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464705/NewBarley_Salad_with_Long_Black_p3ssfu.jpg'
    },
    {
      product: 'English Breakfast',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/English_breakfast_q0ophl.jpg'
    },
    {
      product: 'Scrambled Eggs ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464701/Scrambled_eggs_with_chilly_mushroom_1_f24hhn.jpg'
    },
    {
      product: 'Spicy Chicken ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Spicy_chicken_sandwich_ng9pft.jpg'
    },
    {
      product: 'Spicy Chicken',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Spicy_chicken_sandwich_nutty_chocolate_cappuccino_b23yze.jpg'
    },
    {
      product: 'Spicy Chicken',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371487/Spicy_chicken_sandwich_nutty_chocolate_cappuccino_pkhxpw.jpg'
    },
    {
      product: 'Opera Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/Opera_-_Wedding_Cake_elcerc.jpg'
    },
    {
      product: 'Nutty Chocolate Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371573/Nutty_Chocolate_Eggless_Cake_ete0xu.jpg'
    },
    {
      product: 'Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Wedding_Cake_sdk1gf.jpg'
    },
    {
      product: 'Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Wedding_Cake_1_o8ia5r.jpg'
    },
    {
      product: 'Dark Chocolate',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/Dark_Chocolate_w1uwez.jpg'
    },
    {
      product: 'Mocha Naked Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371732/Mocha_naked_cake_pwqmdo.jpg'
    },
    {
      product: 'HazelNut Forest Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Hazelnut_forest_naked_cake_qcg9jz.jpg'
    },
    {
      product: 'Chocolate Orange Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/NewChocolate_orange_Cake_hdb9e0.jpg'
    },
    {
      product: 'Cappuccino',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/NewCappuccino_with_macarons_kfekpq.jpg'
    }
  ];

  const imageRefs = useRef([]);
  imageRefs.current = [];
  const textRefs = useRef([]);
  textRefs.current = [];
  const dummyRef = useRef(null);

  const addToRefs = el => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
      console.log(imageRefs);
    }
  };
  const addToTextRefs = el => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
      console.log(textRefs);
    }
  };
  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          filter: 'blur(0px)'
        },
        {
          duration: 1.2,
          ease: 'power2',
          filter: 'blur(0px)',
          scale: 1.2,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'left',
            toggleActions: 'play none none none',
            horizontal: true
          }
        }
      );
    });
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 20
        },
        {
          duration: 0.9,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            toggleActions: 'play pause none none',
            scrub: 0.8
          }
        }
      );
    });
  }, []);

  const url = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 220"%3E%3C/svg%3E`;

  return (
    <>
      <h1>Hello</h1>
      <Swiper
        spaceBetween={-80}
        style={{ overflowX: 'hidden', maxWidth: '100%' }}
      >
        {PiattoImages.map((product, index) => {
          return (
            <>
              <SwiperSlide style={{ width: '30%' }}>
                {' '}
                <div style={{ marginLeft: '10px' }}>
                  <img
                    key={index}
                    style={{
                      width: '280px',
                      height: '200px',
                      borderRadius: '25px',
                      aspectRatio: '16:9',
                      imageRendering: 'crisp-edges'
                    }}
                    src={product.productImageURL}
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <MainContainer>
        <SliderContainer>
          {PiattoImages.map((product, index) => {
            return (
              <>
                {' '}
                <img
                  ref={addToRefs}
                  key={index}
                  style={{
                    width: '280px',
                    height: '200px',
                    borderRadius: '25px',
                    aspectRatio: '16:9',
                    imageRendering: 'crisp-edges',
                    padding: '10px'
                  }}
                  src={product.productImageURL}
                />
              </>
            );
          })}
        </SliderContainer>
      </MainContainer>
      <Wrapper>
        <MotionSlider>
          {PiattoImages.map((product, index) => {
            return (
              <>
                {' '}
                <img
                  ref={addToRefs}
                  key={index}
                  style={{
                    width: '280px',
                    height: '200px',
                    borderRadius: '25px',
                    aspectRatio: '16:9',
                    imageRendering: 'crisp-edges',
                    padding: '10px'
                  }}
                  src={product.productImageURL}
                />
              </>
            );
          })}
        </MotionSlider>
      </Wrapper>
    </>
  );
}

export default ImageGalley;
