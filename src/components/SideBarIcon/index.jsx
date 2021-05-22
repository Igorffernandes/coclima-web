import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from './styles';

import { getIconUrl } from './utils';

const SideBarIcon = ({
  iconName,
  active,
}) => {
  const iconUrl = getIconUrl(iconName, active);
  return(
    <Icon iconPath={iconUrl} />
  )
}

SideBarIcon.propTypes = {
  type: PropTypes.oneOf(['dashboard', 'marketing', 'plantio', 'adm']),
  active: PropTypes.bool,
}

export default SideBarIcon;