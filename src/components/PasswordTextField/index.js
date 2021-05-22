import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import colors from '../../styles/colors';

const PasswordTextField = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl variant="outlined">
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        style={{
          borderRadius: 6,
          color: colors.pretoDaMassa,
          borderColor: '#D2D6E0',
        }}
        color="primary"
        onChange={onChange}
      />
    </FormControl>
  );
};

PasswordTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordTextField;
