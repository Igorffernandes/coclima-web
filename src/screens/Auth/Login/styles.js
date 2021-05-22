import styled from 'styled-components';
import colors from '../../../styles/colors';

import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import dashboard from '../../../assets/Images/dashboard.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${dashboard});
  background-size: cover;
`;

export const FormGrid = styled(Grid).attrs({
  direction: 'column',
  justify: 'space-between',
  alignItems: 'center',
  spacing: 3,
  container: true,
})``;

export const FormItem = styled(Grid).attrs({
  item: true,
  xs: 12,
  sm: 12,
  justify: 'center',
  alignItems: 'center',
})``;

export const Title = styled.h1`
  color: ${colors.pretoDaMassa};
  font-size: 45px;
`;

export const LoginCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin-right: 15vw;
  height: 550px;
  width: 460px;
  background-color: ${colors.verdeDaMassa};
  color: ${colors.pretoDaMassa};
  z-index: 10;
  -webkit-box-align: center;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 4px #1b2430;
  justify-content: space-evenly;
  align-items: center;
`;

// https://flatuicolors.com/palette/gb
