import styled from 'styled-components';

export const Icon = styled.div.attrs({
  alt: 'CoClima',
})`
  width: 24px;
  height: 24px;
  background-image: ${props => `url(${props.iconPath})`};
`;