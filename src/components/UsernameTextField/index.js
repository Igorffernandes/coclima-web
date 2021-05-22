/* eslint-disable react/prop-types */
import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import colors from '../../styles/colors';

const UsernameTextField = ({ value, onChange }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel
        style={{ color: colors.pretoDaMassa }}
        color="primary"
        htmlFor="outlined-adornment-username"
      >
        Usuário
      </InputLabel>
      <OutlinedInput
        style={{ color: colors.pretoDaMassa }}
        id="outlined-adornment-username"
        value={value}
        color="primary"
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton disabled edge="end">
              <AccountCircle color="primary" />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={90}
      />
    </FormControl>
  );
};

export default UsernameTextField;
