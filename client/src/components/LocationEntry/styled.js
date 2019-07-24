import styled from "styled-components";
import { Theme } from "Theme/theme";

export const LocationEntryLayout = styled.div`
  list-style-type: none;
  display: grid;

  grid-template-areas:
    "locationimg"
    "title"
    "description";

  @media (min-width: ${Theme.mediaQuery.medium}) {
    grid-template-areas:
      "locationimg title title"
      "locationimg description description";
  }

  @media (min-width: ${Theme.mediaQuery.large}) {
    grid-template-areas:
      "locationimg title title"
      "locationimg description description";
  }

  @media (min-width: ${Theme.mediaQuery.xlarge}) {
    grid-template-areas:
      "locationimg title title"
      "locationimg description description";
  }

  h1 {
    grid-area: title;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 2px;
    margin: 0;
    color: ${Theme.color.mediumbrown};
  }
  p {
    grid-area: description;
    padding-top: 2px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin: 0;
    color: ${Theme.color.mediumbrown};
  }

  img {
    width: 100%;
    grid-area: locationimg;
  }
`;
