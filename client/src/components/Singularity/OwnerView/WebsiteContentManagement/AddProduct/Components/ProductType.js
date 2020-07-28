import React, {
  Fragment,
  useState,
  useEffect,
  useContext,
  useRef
} from 'react';

import {
  TextBox,
  TextParagraph,
  UplaodButton,
  ItemDescription,
  IconBorderCircle,
  InputLabel,
  ImageContainer,
  RadioButtonIcon,
  HiddenRadioButton
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ProductTypeContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import vegIcon from 'img/piatto/icons/vegicon.svg';
import nonVegIcon from 'img/piatto/icons/nonvegicon.svg';
import eggIcon from 'img/piatto/icons/candy.svg';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { gsap, Bounce, TweenMax, Power3 } from 'gsap';
const ProductType = () => {
  const AddProductContext = useContext(addProductContext);

  const { handleChangeFor, cuisine } = AddProductContext;

  let productTypeRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      productTypeRef,
      {
        autoAlpha: 0,
        x: 200
      },
      {
        duration: 1.22,
        autoAlpha: 1,
        x: 0,
        y: 0,
        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <Fragment>
      <div
        ref={el => {
          productTypeRef = el;
        }}
        style={{ width: '100%' }}
      >
        <FormSectionHeadingTextContainer>
          <FormHeadingText>Product Type</FormHeadingText>
        </FormSectionHeadingTextContainer>

        <ProductTypeContainer>
          <IconItemGroupContainer>
            <HiddenRadioButton
              name="cuisine"
              value="veg"
              id="veg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="veg">
              <IconItemContainer>
                <IconBorderCircle checked={cuisine === 'veg'}>
                  <ImageContainer>
                    {' '}
                    <RadioButtonIcon src={vegIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Vegetarian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
            <HiddenRadioButton
              name="cuisine"
              value="Non veg"
              id="nonVeg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="nonVeg">
              <IconItemContainer>
                <IconBorderCircle checked={cuisine === 'Non veg'}>
                  <ImageContainer>
                    {' '}
                    <RadioButtonIcon src={nonVegIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Non Vegetarian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
            <HiddenRadioButton
              name="cuisine"
              value="Egg"
              id="egg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="egg">
              <IconItemContainer>
                <IconBorderCircle checked={cuisine === 'Egg'}>
                  <ImageContainer>
                    <RadioButtonIcon src={eggIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Eggeterian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
          </IconItemGroupContainer>
          <PartialWidthDivider />
        </ProductTypeContainer>
      </div>
    </Fragment>
  );
};

export default ProductType;
