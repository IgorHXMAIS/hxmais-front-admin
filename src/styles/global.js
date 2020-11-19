import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
		border: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Source Sans Pro", sans-serif;
  }

  button {
    cursor: pointer;
  }

	a {
		text-decoration: none;	
	}

	ul {
		list-style: none;
	}

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .clear {
    clear: both;
  }

  .w50 {
    width: 50% !important;
  }
`;
