import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const BaseModal = ({visible, onClose, children}) => {
  return <Styled.ModalContainer open={visible} onClose={onClose}>
        <Styled.ViewContainer >
          { onClose &&
            <Styled.ViewCloseIcon onClick={onClose}>
              <Styled.CloseIcon />
            </Styled.ViewCloseIcon>
          }
          {children}
        </Styled.ViewContainer>
      </Styled.ModalContainer>
}

BaseModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
  }

export default BaseModal;