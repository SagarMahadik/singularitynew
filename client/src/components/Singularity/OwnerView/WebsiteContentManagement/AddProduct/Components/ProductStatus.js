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
  RadioButtonIcon,
  InputLabel,
  HiddenCheckbox
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { gsap, Bounce, TweenMax, Power3 } from 'gsap';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ProductStatusContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import ScrollAnimation from 'react-animate-on-scroll';

const ProductStatus = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    productStatusData,
    getData,
    handleProductStatusChange,
    nextStep,
    handleChangeFor,
    cuisine,
    previousStep,
    loading
  } = AddProductContext;

  let uploadImageRef = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      uploadImageRef,
      {
        autoAlpha: 0,
        x: -500
      },
      {
        duration: 1.22,
        autoAlpha: 1,
        x: 0,
        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <Fragment>
      <div
        ref={el => {
          uploadImageRef = el;
        }}
        style={{ width: '100%' }}
      >
        <ProductStatusContainer>
          <FormSectionHeadingTextContainer>
            <FormHeadingText>Product Status</FormHeadingText>
          </FormSectionHeadingTextContainer>

          <IconItemGroupContainer>
            {productStatusData.map((product, index) => {
              {
                return (
                  <IconItemContainer>
                    <HiddenCheckbox
                      key={index}
                      id={product._id}
                      name={product._id}
                      value={product.additionalInformation}
                      onChange={e => handleProductStatusChange(e)}
                    />

                    <InputLabel for={product._id}>
                      <IconBorderCircle checked={product.isChecked}>
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
          <PartialWidthDivider />
        </ProductStatusContainer>
      </div>
    </Fragment>
  );
};

export default ProductStatus;
