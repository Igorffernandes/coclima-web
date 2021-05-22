import styled from 'styled-components';

import dashboard from '../../../assets/Images/dashboard.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  background-image: url(${dashboard});
  background-size: cover;
`;
