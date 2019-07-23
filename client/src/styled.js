import { createGlobalStyle } from "styled-components";
import { Theme } from "Theme/theme";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${Theme.color.lightpink};
        font-family: "Montserrat", sans-serif;
    }

    h1 {
    font-size: 1.5em;
    color: white;
    }

    img{
    width: 150px;
    }
`;
