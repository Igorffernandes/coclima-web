import React from 'react';

import FormControl from '@material-ui/core/FormControl';

import { Input } from './styles';

const InputTextField = ({ mask, value, onChange, type='text' }) => {
  return (
    <FormControl variant="outlined">
      <Input
        type={type}
        mask={mask}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default InputTextField;
