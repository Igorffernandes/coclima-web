import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const ReadOnlyInput = styled(TextField).attrs({
  fullWidth: true,
  InputLabelProps: { shrink: true },
  margin: 'normal',
  InputProps: {
    readOnly: true,
    disableUnderline: true,
  },
})`
  border-bottom: 1px solid #989795;
`;
