import React, { useContext } from 'react';
import {
  RecipeManagementContainer,
  SearchFilterContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  SearchResultContainer,
  SearchResultText,
  SearchBrandName,
  SearchPrice,
  SearchBaseUnitRate,
  BrandPriceContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  TextRadioButton,
  SearchInputWrapper,
  SearchBox,
  SearchBoxLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const SearchBoxResults = props => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    handleSearchText,
    searchString,
    searchResults,
    handleSearchItemClick
  } = RecipeManagementContext;

  return (
    <RecipeManagementContainer>
      <SearchInputWrapper>
        <SearchBox
          placeholder=" "
          value={searchString}
          onChange={handleSearchText}
        />
        <SearchBoxLabel>Search the above selected item</SearchBoxLabel>
      </SearchInputWrapper>
      {searchResults.map((result, index) => {
        return (
          <SearchResultContainer
            onClick={() =>
              handleSearchItemClick(
                result,
                props.arrayIndex,
                props.basicRecipeID
              )
            }
            key={index}
          >
            <SearchResultText>{result.name}</SearchResultText>
            <BrandPriceContainer>
              <SearchBrandName>{result.brandName} </SearchBrandName>
              <SearchPrice>{result.rate}</SearchPrice>
              <SearchBaseUnitRate>
                /{result.baseQuantity}
                {result.baseUnit}
              </SearchBaseUnitRate>
            </BrandPriceContainer>
          </SearchResultContainer>
        );
      })}

      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default SearchBoxResults;
