import styled from "styled-components";
import { device } from "Theme/styled";

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

  ${device.medium} {
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
    color: ${({ theme }) => theme.color.mediumbrown};
  }
  p {
    grid-area: description;
    padding-top: 2px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin: 0;
    color: ${({ theme }) => theme.color.mediumbrown};
    width: 100%;
  }

  img {
    width: 100%;
    grid-area: locationimg;
    border-radius: 10px;
    ${device.medium} {
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
      background-color: ${({ theme }) => theme.color.dustypink};
      flex: 0 0 35%;
      max-height: 150px;
      max-width: 150px;
      justify-content: space-evenly;
      ${device.medium} {
        flex: 0 0 33%;
      }

      span {
        font-size: 1.5em;
        text-decoration: none;
        color: ${({ theme }) => theme.color.lightpink};
        i {
          font-size: 3em;
          width: 100%;
        }
      }
    }
  }
`;
