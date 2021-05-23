import React from 'react';
import PropTypes from 'prop-types';

import { FullIcon, ImageIcon, CircledIcon, CircledMobileIcon } from './styles';

const Logo = ({
  type,
  style,
  fullWidth,
  fullHeight,
}) => {
  if(type === 'full')
    return(
      <FullIcon style={style} fullWidth={fullWidth} fullHeight={fullHeight}/>
    )
  if(type === 'leaf')
    return(
      <ImageIcon style={style}/>
    )
  if(type === 'circled')
    return(
      <CircledIcon style={style}/>
    )
  if(type === 'circledMobileIcon')
    return(
      <CircledMobileIcon style={style}/>
    )
}

Logo.propTypes = {
  type: PropTypes.oneOf(['full', 'leaf', 'circled', 'circledMobileIcon']),
  style: PropTypes.object,
  fullHeight: PropTypes.string,
  fullWidth: PropTypes.string,
}

Logo.defaultProps = {
  type: 'full',
  fullHeight: '44px',
  fullWidth: '162px',
}

export default Logo;