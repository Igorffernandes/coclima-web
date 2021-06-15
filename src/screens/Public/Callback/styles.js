import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Description = styled.a`
  font-family: 'Inter';
  font-size: 24px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const FormItem = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
