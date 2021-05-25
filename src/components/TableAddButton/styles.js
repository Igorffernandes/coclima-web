import styled from 'styled-components';
import colors from 'styles/colors';

import plusIcon from 'assets/icons/plusLight.png';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  border-radius: 2.62626e+06px;
  background-color: ${colors.verdeDaMassa};
  height: 33px;
  border-style: hidden;
  cursor: pointer;
`;

export const PlusIcon = styled.img.attrs({
  src: plusIcon,
})`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  margin-right: 8px;
`;

export const ButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
`;