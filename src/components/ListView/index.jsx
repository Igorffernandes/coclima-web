import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Container, ListPaper } from './styles';

const ListView = ({ children, loading }) => {
  return (
    <Container>
      <ListPaper elevation={1}>
        {loading && <LinearProgress />}
        {children}
      </ListPaper>
    </Container>
  );
};

ListView.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default ListView;
