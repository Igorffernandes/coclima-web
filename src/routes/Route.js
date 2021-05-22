import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import { useAuth } from 'hooks/AuthContext';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { tokenExpireAt } = useAuth();
  const expired = tokenExpireAt ? moment.unix(tokenExpireAt).isBefore() : true;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !expired ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.element,
};

export default Route;
