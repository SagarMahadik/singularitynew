import React, { useContext } from 'react';
import MenuPageCategory from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageCategory.js';
import MenuPageSubCategory from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageSubCategory.js';
import MenuPageProduct from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageProduct.js';
import LogoPiattoTagLine from 'components/Singularity/ApplicationView/MoleculeComponent/LogoWithPiattoTagline';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { ThemeAnimationContainer } from 'styles/Singularity/Style1.0/Animations';

import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

const DmenuProducts = () => {
  let selectedCategory = useParams();

  const ApplicationContext = useContext(applicationContext);

  const { categoryData, dMenuProductData } = ApplicationContext;

  return (
    <ThemeAnimationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 0.8
      }}
      exit={{ opacity: 0 }}
    >
      <CenterAlignedColumnContainer>
        <LogoPiattoTagLine backGroundcolor="rgba(0,0,0,0.8)" />

        {categoryData
          .filter(catg => catg.category === `${selectedCategory.category}`)
          .map(c => {
            return (
              <>
                <MenuPageCategory category={c.category} />
                {c.subCategory.length > 0 ? (
                  c.subCategory.map(subCatg => {
                    return (
                      <>
                        <MenuPageSubCategory subCategory={subCatg} />
                        {dMenuProductData
                          .filter(
                            prdct =>
                              prdct.category === `${c.category}` &&
                              prdct.subCategory === `${subCatg}`
                          )
                          .map(product => {
                            return (
                              <>
                                <MenuPageProduct
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                />
                              </>
                            );
                          })}
                      </>
                    );
                  })
                ) : dMenuProductData.filter(
                    prdct => prdct.category === `${selectedCategory.category}`
                  ).length === 0 ? (
                  <h1>No Product</h1>
                ) : (
                  dMenuProductData
                    .filter(
                      prdct => prdct.category === `${selectedCategory.category}`
                    )
                    .map(product => {
                      return (
                        <>
                          <MenuPageProduct
                            productName={product.productName}
                            productPrice={product.productPrice}
                          />
                        </>
                      );
                    })
                )}
              </>
            );
          })}
        {categoryData
          .filter(catg => catg.category !== `${selectedCategory.category}`)
          .map(c => {
            return (
              <>
                <MenuPageCategory category={c.category} />
                {c.subCategory.length > 0 ? (
                  c.subCategory.map(subCatg => {
                    return (
                      <>
                        <MenuPageSubCategory subCategory={subCatg} />
                        {dMenuProductData.filter(
                          prdct =>
                            prdct.category === `${c.category}` &&
                            prdct.subCategory === `${subCatg}`
                        ).length === 0 ? (
                          <h1>NO product</h1>
                        ) : (
                          dMenuProductData
                            .filter(
                              prdct =>
                                prdct.category === `${c.category}` &&
                                prdct.subCategory === `${subCatg}`
                            )
                            .map(product => {
                              return (
                                <>
                                  <MenuPageProduct
                                    productName={product.productName}
                                    productPrice={product.productPrice}
                                  />
                                </>
                              );
                            })
                        )}
                      </>
                    );
                  })
                ) : dMenuProductData.filter(
                    prdct => prdct.category === `${c.category}`
                  ).length === 0 ? (
                  <h1>No product</h1>
                ) : (
                  dMenuProductData
                    .filter(prdct => prdct.category === `${c.category}`)
                    .map(product => {
                      return (
                        <>
                          <MenuPageProduct
                            productName={product.productName}
                            productPrice={product.productPrice}
                          />
                        </>
                      );
                    })
                )}
              </>
            );
          })}
      </CenterAlignedColumnContainer>
    </ThemeAnimationContainer>
  );
};

export default DmenuProducts;
