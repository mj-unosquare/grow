import styled from "styled-components";

export const HeaderLayout = styled.div`
  .nav {
    background-color: ${props => props.theme.color.lightpink};
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  }

  .navHeader {
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .navLeft {
    width: 30%;
    text-align: left;
    a {
      display: none;
    }
    @media (min-width: ${props => props.theme.mediaQuery.medium}) {
      a {
        display: unset;
        font-size: 2em;
        color: ${props => props.theme.color.mediumbrown};
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
      color: ${props => props.theme.color.mediumbrown};
      margin-left: 10%;
      text-decoration: none;
    }
    @media (min-width: ${props => props.theme.mediaQuery.medium}) {
      a {
        display: none;
      }
    }
  }

  .navRight {
    width: 30%;
    text-align: right;
    a {
      display: none;
    }
    @media (min-width: ${props => props.theme.mediaQuery.medium}) {
      a {
        display: unset;
        font-size: 1.5em;
        color: ${props => props.theme.color.dustypink};
        margin-right: 10%;
        text-decoration: none;
      }
    }
  }
`;
