import React from 'react';
import PropTypes from 'prop-types';

import { StyledBadge, StyledText } from './styles';

const Badge = ({
  text,
  subText,
}) => {
  console.log(subText)
  return(
    <StyledBadge>
      <StyledText>{text}</StyledText>
      <StyledText>{subText}</StyledText>
    </StyledBadge>
  )
};

Badge.PropTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
}

export default Badge;