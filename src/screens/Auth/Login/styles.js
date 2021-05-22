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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.a`
  color: #3e4054;
  font-size: medium;
  font-family: "Inter";
`;

export const Title = styled.h1`
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
