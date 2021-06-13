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

    if (token && name && tokenExpireAt) {
      return { token, name, tokenExpireAt };
    }

    return {};
  });

  const signIn = useCallback(async (values) => {
    //TESTE
    localStorage.setItem('@token', 'iaueajoieuhjfiaouhdsif');
    localStorage.setItem('@userName', 'admin');
    localStorage.setItem('@tokenExpireAt', '1653203483');

    setData({ token: 'iaueajoieuhjfiaouhdsif', name: 'admin', tokenExpireAt: '1623203483' });

    // try {
    //   const response = await api.post(auth, values);

    //   const { user, token, role } = response.data;

    //   if (role !== 'manager') {
    //     addToast({
    //       type: 'error',
    //       title: 'Erro na autenticação',
    //       description: 'Você não tem permissão para entrar',
    //     });

    //     return;
    //   }

    //   const tokenDecode = jwt_decode(token);

    //   localStorage.setItem('@token', token);
    //   localStorage.setItem('@userName', user);
    //   localStorage.setItem('@tokenExpireAt', tokenDecode.exp);

    //   setData({ token, name: user, tokenExpireAt: tokenDecode.exp });
    //   addToast({
    //     type: 'success',
    //     title: `Bem vindo ${user}`,
    //     description: 'Login efetuado com sucesso!',
    //   });
    // } catch (err) {
    //   addToast({
    //     type: 'error',
    //     title: 'Erro na autenticação',
    //     description: 'Usuário ou senha inválidos',
    //   });
    // }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@userName');
    localStorage.removeItem('@tokenExpireAt');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        name: data.name,
        token: data.token,
        tokenExpireAt: data.tokenExpireAt,
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
