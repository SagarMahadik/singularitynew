import React, { useRef, UseEffect, useEffect } from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  ProductImage,
  OverLay,
  ImageContainer
} from 'styles/Singularity/Style1.0/ImageStyles';
import FormHeading from 'components/Singularity/ApplicationView/FormHeadings';
import { MainContainer } from 'styles/Singularity/Style1.0/Animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import {
  ProductImageName,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
gsap.registerPlugin(ScrollTrigger);

function ImageGalley() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let imageRef = useRef([]);
  const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const PiattoImages = [
    {
      product: 'Coffee Macaron',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1594557520/coffeemacaron.jpg'
    },
    {
      product: 'Paan Macaron',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1593722005/PannMacaroon_1.jpg'
    },
    {
      product: 'Macaron Gift Box',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371030/IMG_0201_1_ceujnu.jpg'
    },
    {
      product: 'Barley Salad',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371108/Barley_Salad_with_Hulk_SMoothie_vtotc9.jpg'
    },
    {
      product: 'Barley Salad ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371166/Barley_Salad_with_Long_Black_r9qbqk.jpg'
    },
    {
      product: 'English Breakfast',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371253/English_breakfast_djeszl.jpg'
    },
    {
      product: 'Scrambled Eggs ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371349/Scrambled_eggs_with_chilly_mushroom_uipu3i.jpg'
    },
    {
      product: 'Spicy Chicken Sandwich',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371388/Spicy_chicken_sandwich_zqbxta.jpg'
    },
    {
      product: 'Spicy Chicken Sandwich',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371388/Spicy_chicken_sandwich_zqbxta.jpg'
    },
    {
      product: 'Spicy Chicken Sandwich',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371487/Spicy_chicken_sandwich_nutty_chocolate_cappuccino_pkhxpw.jpg'
    },
    {
      product: 'Opera Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371549/Opera_-_Wedding_Cake_fm4yts.jpg'
    },
    {
      product: 'Nutty Chocolate Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371573/Nutty_Chocolate_Eggless_Cake_ete0xu.jpg'
    },
    {
      product: 'Nutella Naked Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371649/Nutella_naked_cake_hzyyaj.jpg'
    },
    {
      product: 'Nutella Naked Cake ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371651/Naked_cake_with_fresh_fruits_xh4u2n.jpg'
    },
    {
      product: 'Mocha Naked Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371732/Mocha_naked_cake_pwqmdo.jpg'
    },
    {
      product: 'Mocha Naked Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371732/Mocha_naked_cake_pwqmdo.jpg'
    },
    {
      product: 'Mango Cheese Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371870/Mango_Cheesecake_ywj0fm.jpg'
    },
    {
      product: 'Mocha Entremet',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371907/Mocha_Entremet_qiwd5x.jpg'
    },
    {
      product: 'HazelNut Forest Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371995/Hazelnut_forest_naked_cake_m4ysuz.jpg'
    },
    {
      product: 'Chocolate Orange Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596372056/Chocolate_orange_Cake_gxi45o.jpg'
    },
    {
      product: 'Carrot Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596372054/Carrot_Cake_p2aixe.jpg'
    }
  ];

  const imageRefs = useRef([]);
  imageRefs.current = [];
  const textRefs = useRef([]);
  textRefs.current = [];

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
          autoAlpha: 0
        },
        {
          duration: 1.2,
          autoAlpha: 1,
          scale: 1.0,
          ease: 'power3',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=400',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: -80
        },
        {
          duration: 1.4,
          x: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'bottom +=800',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 0.8
      }}
      exit={{ opacity: 0 }}
      style={{}}
    >
      <CenterAlignedColumnContainer>
        <FormHeading heading="Picture Gallery" />

        {PiattoImages.map((product, index) => {
          return (
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
              <ImageContainer>
                <img
                  key={index}
                  style={{
                    height: '200px',
                    width: '300px',
                    borderRadius: '25px'
                  }}
                  src={product.productImageURL}
                  ref={addToRefs}
                />
                <OverLay />
              </ImageContainer>

              <TextContainer style={{ marginTop: '-40px' }}>
                <ProductImageName ref={addToTextRefs}>
                  {product.product}
                </ProductImageName>
              </TextContainer>
            </div>
          );
        })}
      </CenterAlignedColumnContainer>
    </MainContainer>
  );
}

export default ImageGalley;
