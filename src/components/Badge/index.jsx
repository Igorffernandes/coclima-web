import React from 'react';
import PropTypes from 'prop-types';

import { StyledBadge, StyledText } from './styles';

const Badge = ({
  text
}) => {
  return(
    <StyledBadge>
      <StyledText>{text}</StyledText>
    </StyledBadge>
  )
};

Badge.PropTypes = {
  text: PropTypes.string.isRequired,
}

export default Badge;