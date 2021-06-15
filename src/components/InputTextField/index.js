import React from 'react';
import InputMask from "react-input-mask";

import FormControl from '@material-ui/core/FormControl';

import colors from '../../styles/colors';

const InputTextField = ({ mask, value, onChange }) => {
  return (
    <FormControl variant="outlined">
      <InputMask
        style={{
          borderRadius: 6,
          width: 350,
          color: colors.pretoDaMassa,
          borderWidth: 1,
          borderColor: colors.pretoDaMassa,
          height: 30,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        mask={mask}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default InputTextField;
