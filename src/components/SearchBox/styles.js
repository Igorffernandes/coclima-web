import styled from 'styled-components';
import colors from 'styles/colors';

import searchIcon from 'assets/icons/searchIcon.png';

export const InputContainer = styled.div`
  width: 181px;
  height: 40px;
  border: 2px solid #F5F5F5;
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  background-color: ${colors.brancoDaMassa};
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
})`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  margin-right: 16px;
  margin-left: 4px;
`;

export const SearchInput = styled.input`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #808EA9;
  border-color: transparent;
  width: 60%;
`;