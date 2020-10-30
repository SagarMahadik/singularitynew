import React from 'react';

import {
  MenuPageCategoryLine,
  Category,
  DMenuCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index.js';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

const MenuPageCategory = props => {
  return (
    <>
      <CenterAlignedColumnContainer
        style={{ background: 'rgba(0,0,0,0.8)', height: '20px' }}
      />
      <DMenuCategoryContainer backGroundcolor="rgba(0,0,0,0.8)">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 38% auto',
            width: '100%'
          }}
        >
          <MenuPageCategoryLine />
          <CenterAlignedColumnContainer
            style={{
              marginTop: '-25px',
              background: 'rgba(0,0,0,0)'
            }}
          >
            <Category>{props.category}</Category>
          </CenterAlignedColumnContainer>

          <MenuPageCategoryLine />
        </div>
      </DMenuCategoryContainer>
    </>
  );
};

export default MenuPageCategory;
