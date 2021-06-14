import styled from 'styled-components';
import colors from 'styles/colors';

import arrowDownIcon from 'assets/icons/arrowDown.png';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #142847;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
`;

export const FilterText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.almostBlack};
`;

export const ArrowIcon = styled.img.attrs({
  src: arrowDownIcon
})`
  box-sizing: border-box;
  width: 16px;
  height: 10px;
  margin-left: 8px;
`;

export const BubbleDiv = styled.div`
  background-color: ${colors.verdeDaMassa};
  display: flex;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 15px;
  border-radius: 20px;
`;

export const BubbleText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 12px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.brancoDaMassa};
`;