import { createMuiTheme } from '@material-ui/core/styles';

const white = {
  light: '#FFF',
  main: '#FFF',
  dark: '#CCCCCC',
  contrastText: '#FFF',
};

const orange = {
  light: '#d19870',
  main: '#d37a37',
  dark: '#bc6425',
  contrastText: '#FFF',
};

const blue = {
  light: '#3a74c4',
  main: '#205BAF',
  dark: '#0d4087',
  contrastText: '#FFF',
};

const green = {
  light: '#81C784',
  main: '#0EC164',
  dark: '#388E3C',
  contrastText: '#FFF',
};

const red = {
  light: '#FF908A',
  main: '#FE5D5D',
  dark: '#C52533',
  contrastText: '#FFF',
};

const rose = {
  light: '#FF60FF',
  main: '#FA00E1',
  dark: '#C300AE',
  contrastText: '#FFF',
};

const grey = {
  light: '#9E9D9D',
  main: '#706F6F',
  dark: '#454444',
  contrastText: '#FFF',
};

const purple = {
  light: '#7F65BC',
  main: '#4F3A8B',
  dark: '#1F125D',
  contrastText: '#FFF',
};

const black = {
  light: '#434C59',
  main: '#1B2430',
  dark: '#000007',
  contrastText: '#FFF',
};

const theme = {
  palette: {
    primary: green,
    secondary: orange,
    success: blue,
    warning: white,
    error: red,
    blue,
    purple,
    green,
    orange,
    red,
    black,
    grey,
    rose,
    white,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        padding: 10,
        fontSize: '0.8rem',
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#FFF',
      },
      root: {
        height: 2,
      },
    },
  },
};

export default createMuiTheme({
  palette: {
    ...theme.palette,
  },
  ...theme.overrides,
});
