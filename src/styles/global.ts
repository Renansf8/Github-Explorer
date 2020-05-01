import { createGlobalStyle } from 'styled-components';

import githubBackround from '../assets/github-background.svg';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #F0F0F5 url(${githubBackround}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;    /** deixa a fonte mais detalhada */
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    max-width: 960px;
    margin: 0 auto; /** para centralizar */
    padding: 40px 20px;
}

button {
    cursor: pointer;
}
`;
