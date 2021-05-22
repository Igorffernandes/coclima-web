import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Container } from './styles';

const CreateView = ({ children, loading }) => {
  return (
    <Container>
      {loading && <LinearProgress />}
      {children}
    </Container>
  );
};

CreateView.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default CreateView;
