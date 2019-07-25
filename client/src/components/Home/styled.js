import styled from "styled-components";

export const HomeLayout = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  @media (min-width: ${props => props.theme.mediaQuery.large}) {
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
    background-color: ${props => props.theme.color.mediumbrown};
    color: white;
    border-radius: 10px;
    border: none;
    text-decoration: none;
    @media (min-width: ${props => props.theme.mediaQuery.large}) {
      margin-top: 5%;
    }
  }
  h1 {
    color: ${props => props.theme.color.mediumbrown};
    margin: 0;
    font-size: 2.5em;
    text-align: center;
    flex: 0 0 92%;
  }
`;
