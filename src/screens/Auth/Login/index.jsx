import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { useAuth } from "hooks/AuthContext";

import {
  Container,
  LoginCard,
  FormItem,
  FormTitle,
  FormTitleDiv,
  FormPasswordForgot,
  FormCheckBox,
  CheckText,
  LogoImage,
  Image,
  WhiteTextDiv,
  TextWhite,
  LogoLarge,
  LogoSmall,
  ButtonDiv,
} from "./styles";
import PasswordTextField from "components/PasswordTextField";
import UsernameTextField from "components/UsernameTextField";
import Checkbox from '@material-ui/core/Checkbox';

import loginImage from '../../../assets/Images/login-image.png'
import colors from "../../../styles/colors";
import coClimaIcon from 'assets/Images/logoCoClima.png';

const LoginPage = () => {
  // const { code, api_address } = useParams();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const { signIn } = useAuth();
  const [api_address, setApiAddress] = useState('gorda');
  const [code, setCode] = useState('bunda');

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [username, password]);

  const handleLogin = async () => {
    signIn({ username, password });
  };

  return (
    <Container>
      <LoginCard>
        <LogoLarge src={coClimaIcon} />
        <FormItem>
          <FormTitle>Email</FormTitle>
          <UsernameTextField
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <FormTitleDiv>
            <FormTitle>Senha</FormTitle>
            <FormPasswordForgot>Esqueci minha senha</FormPasswordForgot>
          </FormTitleDiv>
          <PasswordTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormItem>
        <FormCheckBox>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            color={'primary'}
          />
          <CheckText>Me manter conectado</CheckText>
        </FormCheckBox>
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            style={{
              color: colors.brancoDaMassa,
              borderRadius: 100,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              paddingTop: 15,
              paddingBottom: 15,
              paddingRight: 70,
              paddingLeft: 70,
              alignSelf: 'center',
            }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
          {code && api_address && 
          <Button
            variant="contained"
            color="primary"
            style={{
              color: colors.brancoDaMassa,
              borderRadius: 100,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              marginLeft: 15,
              paddingTop: 15,
              paddingBottom: 15,
              paddingRight: 55,
              paddingLeft: 55,
              alignSelf: 'center',
            }}
            onClick={() => history.push('/coclima', {code, api_address})}
          >
            Cadastrar
          </Button>}
        </ButtonDiv>
      </LoginCard>
      <LogoImage>
        <Image src={loginImage}/>
        <WhiteTextDiv>
          <TextWhite>Plantando</TextWhite>
          <TextWhite>o futuro.</TextWhite>
          <LogoSmall src={coClimaIcon}/>
        </WhiteTextDiv>
      </LogoImage>
    </Container>
  );
};

export default LoginPage;
