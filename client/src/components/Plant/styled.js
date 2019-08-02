import styled from "styled-components";
import { device } from "Theme/styled";

export const PlantLayout = styled.div`
  height: 40%;
  margin: 1.5%;
  border-radius: 10px;
  border: none;
  flex: 0 0 95%;
  width: 100%;
  position: relative;
  ${device.medium} {
    flex: 0 0 45%;
  }
  ${device.large} {
    flex: 0 0 27.5%;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
    transition: 0.5s ease;
    border-radius: 10px;
  }

  &:hover img {
    opacity: 0.3;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: "#4caf50";
    text-align: center;

    h1 {
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 2px;
      margin: 0;
      color: ${({ theme }) => theme.color.mediumbrown};
    }
    p {
      padding-top: 2px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 15px;
      margin: 5%;
      color: ${({ theme }) => theme.color.mediumbrown};
    }
    a {
      padding: 15px;
      margin: 5%;
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
  }
`;
