import styled from 'styled-components';
import colors from 'styles/colors';

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
