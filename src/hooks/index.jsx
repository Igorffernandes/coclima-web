import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider = ({ children }) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
);

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
