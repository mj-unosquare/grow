import styled from "styled-components";

export const WaterLayout = styled.div`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;

  h1 {
    margin: 0;
    margin-top: 5%;
    flex: 0 0 45%;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 2px;
    color: ${({ theme }) => theme.color.mediumbrown};
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 2%;
    flex: 0 0 45%;
    padding-top: 2px;
    padding-right: 15px;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.mediumbrown};
    width: 100%;
    text-align: center;
  }

  img {
    margin: 0;
    margin-top: 5%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  form {
    margin-top: 5%;
    flex: 0 0 45%;
    width: 100%;
    text-align: center;
    input[type="number"] {
      font-size: 1.5em;
      padding: 15px;
      border: none;
      margin-right: 15px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${({ theme }) => theme.color.lightpink};
      border-bottom: 1px solid ${({ theme }) => theme.color.mediumbrown};
    }
    input[type="number"]:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.mediumbrown};
      background-color: white;
    }
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
