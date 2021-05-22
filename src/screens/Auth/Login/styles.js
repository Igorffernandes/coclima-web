import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.verdeDaMassa};
`;

export const FormItem = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const FormTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormPasswordForgot = styled.a`
  text-decoration: underline;
  font-family: "Inter";
  color: ${colors.cinzaDaMassa};
  cursor: pointer;
`;

export const FormTitle = styled.a`
  margin-bottom: 8px;
  color: #3e4054;
  font-size: medium;
  font-family: "Inter";
`;

export const FormCheckBox = styled.div`
  margin-top: 24px;
  margin-bottom: 44px;
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const CheckText = styled.a`
  font-family: 'Inter';
  margin-left: 10;
  color: ${colors.cinzaDaMassa};
`

export const Title = styled.h1`
  margin-bottom: 45px;
  color: ${colors.pretoDaMassa};
  font-size: 45px;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background-color: ${colors.brancoDaMassa};
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 150px;
  border-top-left-radius: 500px;
  border-top-right-radius: 500px;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 80px;
  z-index: 10;
`;

export const WhiteTextDiv = styled.div`
  margin-left: 100px;
  margin-top: -80px;
  background-color: ${colors.brancoDaMassa};
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  justify-content: center;
  align-items: flex-start;
  border-top-left-radius: 80px;
  border-top-right-radius: 500px;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
`;

export const TextWhite = styled.a`
  font-family: 'Inter';
  font-size: 48px;
  color: #142847;
  font-style: normal;
  font-weight: 300;
  margin-left: 45px;
`;

export const TextCoClima = styled.a`
  font-size: 22px;
  font-weight: bold;
  margin-left: 45px;
`;
