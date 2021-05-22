import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from 'hooks/AuthContext';

import { Container, LoginCard, FormGrid, FormItem, Title } from './styles';
import PasswordTextField from 'components/PasswordTextField';
import UsernameTextField from 'components/UsernameTextField';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        handleLogin();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [username, password]);

  const handleLogin = async () => {
    signIn({ username, password });
  };

  return (
    <Container>
      <LoginCard>
        <Title>ARMARIO</Title>
        <FormGrid>
          <FormItem>
            <UsernameTextField
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <PasswordTextField
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button
              variant="contained"
              color="primary"
              style={{ color: '#d37a37', fontWeight: 'bold' }}
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </FormItem>
        </FormGrid>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
