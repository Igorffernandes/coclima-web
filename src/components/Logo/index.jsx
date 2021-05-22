import React from 'react';
import PropTypes from 'prop-types';

import { FullIcon, ImageIcon, CircledIcon, CircledMobileIcon } from './styles';

const Logo = ({
  type
}) => {
  if(type === 'full')
    return(
      <FullIcon/>
    )
  if(type === 'leaf')
    return(
      <ImageIcon />
    )
  if(type === 'circled')
    return(
      <CircledIcon />
    )
  if(type === 'circledMobileIcon')
    return(
      <CircledMobileIcon />
    )
}

Logo.propTypes = {
  type: PropTypes.oneOf(['full', 'leaf', 'circled', 'circledMobileIcon']),
}

Logo.defaultProps = {
  type: 'full',
}

export default Logo;