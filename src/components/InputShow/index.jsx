import React from 'react';
import PropTypes from 'prop-types';

import { ReadOnlyInput } from './styles';

function InputShow({ value, ...props }) {
  return <ReadOnlyInput {...props} value={value} />;
}

InputShow.propTypes = {
  value: PropTypes.string,
  digObject: PropTypes.arrayOf(PropTypes.string),
  floatPrecision: PropTypes.number,
  customFormat: PropTypes.func,
};

export default InputShow;
