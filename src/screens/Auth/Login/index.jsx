import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useAuth } from "hooks/AuthContext";

import { Container, LoginCard, FormItem, Title, FormTitle } from "./styles";
import PasswordTextField from "components/PasswordTextField";
import UsernameTextField from "components/UsernameTextField";

import colors from "../../../styles/colors";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

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
        <Title>CoClima</Title>
        <FormItem>
          <FormTitle>Email</FormTitle>
          <UsernameTextField
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <FormTitle>Senha</FormTitle>
          <PasswordTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <Button
            variant="contained"
            color="primary"
            style={{
              color: colors.brancoDaMassa,
              borderRadius: 100,
              fontWeight: "bold",
            }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </FormItem>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
