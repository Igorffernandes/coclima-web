import styled from 'styled-components';
import coClimaIcon from 'assets/Images/logoCoClima.png';
import leafIcon from 'assets/icons/logoIcon.png';
import circledicon from 'assets/icons/circledIcon.png';
import circledmobileicon from 'assets/icons/circledMobileicon.png';

export const iconPath = coClimaIcon;

export const FullIcon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: ${props => props.fullWidth};
  height: ${props => props.fullHeight};
  background-image: url(${coClimaIcon});
`;

export const ImageIcon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 44px;
  height: 44px;
  background-image: url(${leafIcon});
`;

export const CircledIcon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 42px;
  height: 42px;
  background-image: url(${circledicon});
`;

export const CircledMobileIcon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 24px;
  height: 24px;
  background-image: url(${circledmobileicon});
`;
