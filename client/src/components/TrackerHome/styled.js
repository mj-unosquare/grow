import styled from "styled-components";
import { device } from "Theme/styled";

export const TrackerHomeLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10%;
  justify-content: space-around;
  a {
    margin: 2%;
    font-size: 1.5em;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.mediumbrown};
    color: ${({ theme }) => theme.color.lightpink};
    border-radius: 10px;
    border: none;
    width: 30%;
    text-align: center;
    text-decoration: none;
    ${device.large} {
      margin-top: 5%;
    }
  }
`;
