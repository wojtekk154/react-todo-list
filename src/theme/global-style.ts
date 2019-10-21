import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.5rem;
        font-family: "Montserrat", sans-serif;
        padding: 0;
	    border: 0;
        margin: 0;
    }

    h1,h2,h3,h4 {
        margin: 0;
    }

`;

export default GlobalStyle;
