import styled from "styled-components";
import { device } from "Theme/styled";

export const LocationLayout = styled.div`
  margin: 2.5%;
  background-color: ${({ theme }) => theme.color.darkgreen};
  color: white;
  border-radius: 10px;
  border: none;
  flex: 0 0 95%;
  ${device.medium} {
    flex: 0 0 45%;
  }
  ${device.large} {
    flex: 0 0 27.5%;
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  h1 {
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 2px;
    margin: 0;
  }
  p {
    padding-top: 2px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin: 0;
    color: white;
  }
  a {
    float: right;
    padding: 15px;
    margin: 2.5%;
    background-color: ${({ theme }) => theme.color.lightpink};
    color: ${({ theme }) => theme.color.mediumbrown};
    font-weight: bold;
    border-radius: 10px;
    border: none;
    text-decoration: none;
    flex: 0 0 95%;
    ${device.medium} {
      flex: 0 0 45%;
    }
    ${device.large} {
      flex: 0 0 27.5%;
    }
  }
`;
