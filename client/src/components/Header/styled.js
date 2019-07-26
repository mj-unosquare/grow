import styled from "styled-components";
import { device } from "Theme/styled";

export const HeaderLayout = styled.div`
  .nav {
    background-color: ${({ theme }) => theme.color.lightpink};
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  }

  .navHeader {
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .navLeft {
    width: 30%;
    text-align: left;
    a {
      display: none;
    }

    ${device.small} {
      a {
        display: unset;
        font-size: 2em;
        color: ${({ theme }) => theme.color.mediumbrown};
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
      color: ${({ theme }) => theme.color.mediumbrown};
      margin-left: 10%;
      text-decoration: none;
    }
    ${device.medium} {
      a {
        display: none;
      }
    }
  }

  .navRight {
    width: 30%;
    justify-content: right;
    text-align: right;
    float: right;
    a {
      display: none;
    }

    ${device.medium} {
      a {
        display: unset;
        font-size: 1.5em;
        color: ${({ theme }) => theme.color.dustypink};

        text-decoration: none;
      }
    }
  }
`;
