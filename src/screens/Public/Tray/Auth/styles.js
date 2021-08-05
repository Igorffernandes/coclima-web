import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  height: 100vh;
`;

export const Logo = styled.img`
  height: 6vw;
`;

export const Description = styled.a`
  font-family: 'Inter';
  font-size: 24px;
  text-align: justify;
  color: ${colors.pretoDaMassa};
  margin: 0 50px 0 50px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 100%;
`;

export const Spacer = styled.div`
  height: 6vh;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100%;
`;

export const FormItem = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
`;

export const FormTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormTitle = styled.a`
  margin-bottom: 2px;
  color: #3e4054;
  font-size: medium;
  font-family: "Inter";
`;
