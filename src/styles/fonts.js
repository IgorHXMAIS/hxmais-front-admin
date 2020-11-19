import { createGlobalStyle } from 'styled-components';

import Circular_Book from '../assets/fonts/Circular_Std_Book.ttf';
import Circular_Medium from '../assets/fonts/Circular_Std_Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Circular Std Book";
    src: url(${Circular_Book});
  }

  @font-face {
    font-family: "Circular Std Medium";
    src: url(${Circular_Medium});
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Circular Std Medium";
    font-weight: normal;
  }
`;
