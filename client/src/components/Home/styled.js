import styled from "styled-components";
import { Theme } from "Theme/theme";

export const HomeLayout = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  @media (min-width: ${Theme.mediaQuery.large}) {
    margin-top: 10%;
  }
  img {
    max-width: 128px;
    flex: 0 0 92%;
  }
  a {
    margin-top: 10%;
    font-size: 1.5em;
    padding: 15px;
    background-color: ${Theme.color.mediumbrown};
    color: ${Theme.color.lightpink};
    border-radius: 10px;
    border: none;
    text-decoration: none;
    @media (min-width: ${Theme.mediaQuery.large}) {
      margin-top: 5%;
    }
  }
  h1 {
    color: ${Theme.color.mediumbrown};
    margin: 0;
    font-size: 2.5em;
    text-align: center;
    flex: 0 0 92%;
  }
`;
