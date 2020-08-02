import React, { Fragment, useEffect, useContext, useState } from 'react';
import {
  TextBox,
  TextParagraph,
  TextRadioButton,
  HiddenRadioButton,
  AddIconImage,
  InputLabel,
  AddOnitemIcon,
  ItemDescription,
  IconBorderCircle,
  RadioButtonIcon
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  CategoryContainer,
  LeftrAlignedColumnContainer,
  LeftAlignedRowContainer,
  MenuPageMainContainer,
  MenuContentContainer,
  MenuPagePriceContainer,
  MenuPageIconContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ItemPriceContainer,
  MenuAlignmentContainer,
  MenuPageDescriptionContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  OverLay,
  ImageContainer,
  ProductImage,
  IconImage,
  ProductPageICon
} from 'styles/Singularity/Style1.0/ImageStyles';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles';
import Plate from 'components/Singularity/ApplicationView/FormElements/Plate';

import {
  RadioButtonText,
  TextContainer,
  ProductName,
  ProductInformation,
  ProductIconDescription,
  PriceText,
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText,
  ButtonText,
  ProductImageName
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import VegIcon from 'components/Singularity/ApplicationView/VegIcon.js';
import NonVegIcon from 'components/Singularity/ApplicationView/NonVegIcon.js';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
const PreviewPage = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    filesrc,
    setNutrientData,
    productName,
    productDescription,
    additionalInformation,
    productPrice,
    selectedAddOnItemItems,
    cuisine,
    onSubmit,
    previousStep,
    isComplete,
    crossSellPitch,
    nutritionDetails,
    proteins,
    fats,
    carbohydrates,
    calories,
    loading
  } = AddProductContext;

  let isVeg = false;
  if (cuisine === 'veg') {
    isVeg = true;
  }

  useEffect(() => {
    setNutrientData();
    const productStatus = additionalInformation.filter(
      status => status.additionalInformationType == 'status'
    );
    const productVariant = additionalInformation.filter(
      variant => variant.additionalInformationType == 'variant'
    );

    console.log(productStatus);
    console.log(productVariant);
  }, [additionalInformation, proteins, fats, carbohydrates, calories]);

  const [showLoader, setShowLoader] = useState(false);

  return (
    <Fragment>
      <CenterAlignedColumnContainer style={{ marginTop: '15px' }}>
        <FormSectionHeadingTextContainer>
          <FormHeadingText>Preview</FormHeadingText>
        </FormSectionHeadingTextContainer>

        <ImageContainer>
          <img
            style={{
              height: '200px',
              width: '300px',
              borderRadius: '25px'
            }}
            src={filesrc}
          />
          <OverLay />
        </ImageContainer>

        <TextContainer style={{ marginTop: '-40px' }}>
          <ProductImageName>{productName}</ProductImageName>
        </TextContainer>

        <IconImage src="https://res.cloudinary.com/antilibrary/image/upload/v1595774240/nonvegicon_lioksr.png" />

        <TextContainer style={{ width: '146px', height: '84px' }}>
          <ProductInformation>
            {productDescription}
            <span> {crossSellPitch}</span>
          </ProductInformation>
          <TextContainer>
            <PriceText>Rs. {productPrice}</PriceText>
          </TextContainer>
        </TextContainer>
        <FormSectionHeadingTextContainer>
          <FormHeadingText>Product Status</FormHeadingText>
        </FormSectionHeadingTextContainer>

        <MenuPageIconContainer>
          {additionalInformation
            .filter(status => status.additionalInformationType == 'status')
            .map((item, index) => {
              return (
                <CenterAlignedColumnContainer style={{ marginRight: '4px' }}>
                  <ProductPageICon src={item.additionalInformationIconURL} />
                  <ProductIconDescription>
                    {item.additionalInformation}
                  </ProductIconDescription>
                </CenterAlignedColumnContainer>
              );
            })}
        </MenuPageIconContainer>

        <FormSectionHeadingTextContainer>
          <FormHeadingText>Add - Ons</FormHeadingText>
        </FormSectionHeadingTextContainer>
        <IconItemGroupContainer>
          {selectedAddOnItemItems.map((item, index) => {
            {
              return (
                <>
                  <IconItemContainer>
                    <InputLabel>
                      <AddIconImage src={item.itemIconURL} />
                      <Plate
                        style={{
                          width: '110px',
                          marginTop: '-60px',
                          zIndex: '-1'
                        }}
                      />

                      <ItemDescription>
                        <ItemDescriptionText>
                          {item.itemName}
                        </ItemDescriptionText>
                      </ItemDescription>
                      <ItemPriceContainer>
                        <ItemDescriptionText>
                          <span>Rs. </span>
                          {item.itemPrice}
                        </ItemDescriptionText>
                      </ItemPriceContainer>
                    </InputLabel>
                  </IconItemContainer>
                </>
              );
            }
          })}
        </IconItemGroupContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Make it
          </FormSectionHeadingTextContainer>
        </FormHeadingText>

        <IconItemGroupContainer>
          {additionalInformation
            .filter(variant => variant.additionalInformationType == 'variant')
            .map((product, i) => {
              {
                return (
                  <IconItemContainer>
                    <InputLabel>
                      <IconBorderCircle>
                        <RadioButtonIcon
                          src={product.additionalInformationIconURL}
                        />
                      </IconBorderCircle>
                      <ItemDescription>
                        <ItemDescriptionText>
                          {product.additionalInformation}
                        </ItemDescriptionText>
                      </ItemDescription>
                    </InputLabel>
                  </IconItemContainer>
                );
              }
            })}
        </IconItemGroupContainer>
        <SubmitButton
          onClick={e => {
            onSubmit(e);
          }}
        >
          <ButtonText>Submit</ButtonText>
        </SubmitButton>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default PreviewPage;
