import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';

import { Container } from './styles';

const ToastContainer = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

ToastContainer.propTypes = {
  messages: PropTypes.array,
};

export default ToastContainer;
