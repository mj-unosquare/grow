import styled from "styled-components";
import { Theme } from "Theme/theme";

export const HeaderLayout = styled.div`
  .nav {
    background-color: ${Theme.color.lightpink};
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  }

  .navHeader {
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .navLeft {
    width: 30%;
    text-align: left;
    a {
      display: none;
    }
    @media (min-width: ${Theme.mediaQuery.medium}) {
      a {
        display: unset;
        font-size: 2em;
        color: ${Theme.color.mediumbrown};
        margin-left: 10%;
        text-decoration: none;
      }
    }
  }

  .navCenter {
    width: 30%;
    text-align: center;
    a {
      display: unset;
      font-size: 2em;
      color: ${Theme.color.mediumbrown};
      margin-left: 10%;
      text-decoration: none;
    }
    @media (min-width: ${Theme.mediaQuery.medium}) {
      a {
        display: none;
      }
    }
  }

  .navRight {
    width: 30%;
    justify-content: right;
    text-align: right;
    float: right;
    a {
      display: none;
    }
    @media (min-width: ${Theme.mediaQuery.medium}) {
      a {
        display: unset;
        font-size: 1.5em;
        color: ${Theme.color.dustypink};
        text-decoration: none;
      }
    }
  }
`;
