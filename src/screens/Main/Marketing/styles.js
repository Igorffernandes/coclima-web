import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 258px;
  background-color: ${colors.brancoDaMassa};
`;

export const Header = styled.div`
  margin-top: 41px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.a`
  font-family: 'Inter';
  font-size: 32px;
  font-weight: 600;
  color: ${colors.verdeDaMassa};
  margin-left: 36px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.a`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: #142847;
  margin-left: 36px;
`;