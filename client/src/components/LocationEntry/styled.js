import styled from "styled-components";
import { device } from "Theme/styled";

export const LocationEntryLayout = styled.div`
  list-style-type: none;
  display: grid;
  padding: 5%;
  grid-gap: auto;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "title title title"
    "description description description"
    "plantlist plantlist plantlist";

  ${device.medium} {
    grid-template-areas:
      "title title title"
      "description description description"
      "plantlist plantlist plantlist";
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
    display: none;
    ${device.medium} {
      display: none;
    }
  }

  .plantList {
    grid-area: plantlist;
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
  }
`;
