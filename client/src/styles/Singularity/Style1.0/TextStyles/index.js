import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

export const PTSansText = styled.text`
  font-family: PT Sans;
  font-weight: normal;
  align-items: center;
  text-align: center;
`;

export const SacramentoText = styled.text`
  font-family: Sacramento;
  font-weight: normal;
  text-align: center;
`;

export const RobotoText = styled.text`
  font-family: Roboto;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const RecursiveText = styled.text`
  font-family: Recursive;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: ${styles.formContentColor};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSectionHeadingTextContainer = styled(TextContainer)`
  margin-top: 1.5em;
`;

export const RadioButtonText = styled(PTSansText)`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${props =>
    props.selected ? `${styles.themecolor}` : `${styles.formContentColor}`};
`;

export const ButtonText = styled(SacramentoText)`
  font-size: 36px;
  color: ${styles.buttonTextColor};
`;

export const FormContentText = styled(PTSansText)`
  font-size: 18px;
  line-height: 16px;
  color: ${styles.formContentColor};
`;

export const FormHeadingText = styled(RecursiveText)`
  font-size: 22px;
  line-height: 33px;
  color: ${styles.formContentColor};
`;

export const ItemDescriptionText = styled(PTSansText)`
  font-size: 14px;
  line-height: 14px;
  color: ${styles.formContentColor};
`;

export const ProductName = styled(PTSansText)`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`;

export const ProductInformation = styled(PTSansText)`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  /* or 117% */

  color: #665c5c;
`;
export const ProductIconDescription = styled(PTSansText)`
  font-size: 8px;
  line-height: 8px;
  color: #000000;
`;

export const PriceText = styled(PTSansText)`
  font-size: 14px;
  line-height: 8px;
  color: #000000;
`;
