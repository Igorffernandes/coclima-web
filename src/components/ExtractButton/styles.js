import styled from 'styled-components';
import colors from 'styles/colors';

import downloadIcon from 'assets/icons/downloadIcon.png';

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
  background-color: '#FFFFFF';
  margin-left: 25px;
`;

export const ButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.almostBlack};
`;

export const DownloadIcon = styled.img.attrs({
  src: downloadIcon
})`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
