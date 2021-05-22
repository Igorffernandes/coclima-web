import { createGlobalStyle } from 'styled-components';
import colors from '../styles/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    outline: 0;
  }

  body {
    background: ${colors.meioBrancoDaMassa};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    /* display: flex; */
    /* justify-content: center;
    align-items: center;
    height: 100vh; */
  }
  
  button: {
    cursor: pointer;
  }
`;
