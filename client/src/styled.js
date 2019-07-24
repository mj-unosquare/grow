import { createGlobalStyle } from "styled-components";

const Theme = {
  color: {
    lightgreen: "#C9E4CA",
    lightblue: "#3BADDD",
    mediumgreen: "#6EB56E",
    mediumbrown: "#443730",
    darkblue: "#2E3F4C"
  },
  font: {},
  mediaQuery: {
    small: "600px",
    medium: "768px",
    large: "992px",
    xlarge: "1220px"
  }
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${Theme.color.lightgreen};
    }

    h1 {
    font-size: 1.5em;
    color: ${Theme.color.mediumbrown};
    }

    img{
    width: 150px;
    }
`;
