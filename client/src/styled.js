import { createGlobalStyle } from "styled-components";

export const Theme = {
  color: {
    lightgreen: "#C9E4CA",
    lightpink: "#F6EDEA",
    lightblue: "#3BADDD",
    mediumgreen: "#6EB56E",
    mediumbrown: "#443730",
    darkblue: "#2E3F4C",
    darkgreen: "#325332",
    pink: "#FEC0AA",
    dustypink: "#E7AF9B",
    gold: "#F5CF6A"
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
