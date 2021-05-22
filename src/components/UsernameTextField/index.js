import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import colors from '../../styles/colors';

const UsernameTextField = ({ value, onChange }) => {
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        style={{
          color: colors.pretoDaMassa,
          borderRadius: 6,
        }}
        id="outlined-adornment-username"
        value={value}
        color="primary"
        onChange={onChange}
      />
    </FormControl>
  );
};

export default UsernameTextField;
