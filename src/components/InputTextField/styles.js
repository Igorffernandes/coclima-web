import styled from 'styled-components';
import InputMask from "react-input-mask";
import colors from '../../styles/colors';

export const Input = styled(InputMask)`
  border-radius: 6px;
  width: 350px;
  color: ${colors.pretoDaMassa};
  border-width: 1px;
  border-color: ${colors.pretoDaMassa};
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;

  @media(max-width: 800px) {
    width: 80vw;
  }
`; 