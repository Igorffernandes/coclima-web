import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Container } from './styles';

const EditView = ({ children, loading }) => {
  return (
    <Container>
      {loading && <LinearProgress />}
      {children}
    </Container>
  );
};

EditView.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default EditView;
