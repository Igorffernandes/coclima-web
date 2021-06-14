import styled from 'styled-components';
import colors from 'styles/colors';

import activeRadio from 'assets/icons/activeRadio.png';
import neutralRadio from 'assets/icons/neutralRadio.png';

export const Container = styled.div`
  width: 204px;
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 10px;
  background-color: ${colors.brancoDaMassa};
  cursor: pointer;
`;

export const ItemText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
`;

export const ActiveRadio = styled.img.attrs({
  src: activeRadio,
})`
  width: 15px;
  height: 15px;
  box-sizing: border-box;
`;

export const NeutralRadio = styled.img.attrs({
  src: neutralRadio,
})`
  width: 15px;
  height: 15px;
  box-sizing: border-box;
`;