import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Container } from './styles';

const ShowView = ({ children, loading }) => {
  return (
    <Container>
      {loading && <LinearProgress />}
      {!loading && children}
    </Container>
  );
};

ShowView.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default ShowView;
