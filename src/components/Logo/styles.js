import styled from 'styled-components';
import coClimaIcon from 'assets/icons/logoCoClima.png';

export const iconPath = coClimaIcon;

export const IconImage = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 162px;
  height: 44px;
  background-image: url(${coClimaIcon});
`;