import styled from "styled-components";

export const PlantEntryLayout = styled.div`
  list-style-type: none;
  display: grid;
  padding: 5%;
  grid-gap: auto;
  grid-template-columns: 33% 33% 33%;
  grid-template-areas:
    "locationimg locationimg locationimg"
    "title title title"
    "description description description"
    "buttons buttons buttons";

  @media (min-width: ${props => props.theme.mediaQuery.medium}) {
    grid-template-areas:
      "locationimg title title"
      "locationimg description description"
      "buttons buttons buttons";
  }

  h1 {
    grid-area: title;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 2px;
    margin: 0;
    color: ${props => props.theme.color.mediumbrown};
  }
  p {
    grid-area: description;
    padding-top: 2px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin: 0;
    color: ${props => props.theme.color.mediumbrown};
    width: 100%;
  }

  img {
    width: 100%;
    grid-area: locationimg;
    border-radius: 10px;
    @media (min-width: ${props => props.theme.mediaQuery.medium}) {
    }
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    flex-flow: row wrap;
    a {
      position: relative;
      width: 100%;
      padding: 15px;
      border-radius: 10px;
      margin: 10px;
      padding-top: 25px;
      padding-bottom: 25px;
      text-align: center;
      text-decoration: none;
      background-color: ${props => props.theme.color.dustypink};
      flex: 0 0 35%;
      @media (min-width: ${props => props.theme.mediaQuery.medium}) {
        flex: 0 0 33%;
      }

      span {
        font-size: 1.5em;
        text-decoration: none;
        color: ${props => props.theme.color.lightpink};
        i {
          font-size: 3em;
          width: 100%;
        }
      }
    }
  }
`;
