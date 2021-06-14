import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

import api from 'services/api';
import { auth } from 'config/constants';
import { useToast } from './ToastContext';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const { addToast } = useToast();
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@token');
    const name = localStorage.getItem('@userName');
    const tokenExpireAt = localStorage.getItem('@tokenExpireAt');
    const role = localStorage.getItem('@role');

    if (token && name && tokenExpireAt && role) {
      return { token, name, tokenExpireAt, role };
    }

    return {};
  });

  const signIn = useCallback(async (values) => {

    try {
      const response = await api.post(auth, { email: values.username, password: values.password });

      const { user, token } = response.data;
      
      const tokenDecode = jwt_decode(token);

      localStorage.setItem('@token', token);
      localStorage.setItem('@userName', user.name);
      localStorage.setItem('@tokenExpireAt', tokenDecode.exp);
      localStorage.setItem('@role', user.role);

      setData({ token, name: user.name, tokenExpireAt: tokenDecode.exp, role: user.role });
      addToast({
        type: 'success',
        title: `Bem vindo ${user.name}`,
        description: 'Login efetuado com sucesso!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Usuário ou senha inválidos',
      });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@userName');
    localStorage.removeItem('@tokenExpireAt');
    localStorage.removeItem('@role');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        name: data.name,
        token: data.token,
        tokenExpireAt: data.tokenExpireAt,
        role: data.role,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('userAuth must be used within an AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export { AuthProvider, useAuth };
