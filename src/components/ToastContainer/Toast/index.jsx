import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { useToast } from 'hooks/ToastContext';

import { Container } from './styles';

const Toast = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (message !== 'undefined') {
      const timer = setTimeout(() => {
        removeToast(message.id);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

Toast.propTypes = {
  message: PropTypes.object,
};

export default Toast;
