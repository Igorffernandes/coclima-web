import styled from 'styled-components';
import colors from '../../../../styles/colors';
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;

  @media(min-width: 800px) {
    height: 100vh;
  }
`;

export const Logo = styled.img`
  height: 70px;

  @media(max-width: 800px) {
    height: 40px;
  }
`;

export const Description = styled.a`
  font-family: 'Inter';
  font-size: 24px;
  text-align: center;
  color: ${colors.pretoDaMassa};
  width: 85vw;

  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const ContainerDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60vw;

  @media(max-width: 800px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const Spacer = styled.div`
  height: 2vh;
`;

export const ContainerUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 15px 0 15px 0;
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

export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export const FinishButton = styled(Button)`
  margin-top: 20px;
  color: ${colors.brancoDaMassa};
  border-radius: 6px;
  font-weight: bold;
  font-family: 'Inter';
  padding-top: 8px;
  padding-bottom: 8px;
  width: 500px;
  align-self: 'center';

  @media(max-width: 800px) {
    width: 200px;
    margin-bottom: 25px;
  }
`;
