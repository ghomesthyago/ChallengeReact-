import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components'
require('typeface-noto-sans');

export const GlobalStyle = createGlobalStyle`
    div#root {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

  body {
    background-color: #FF0;
    background-color: #FFF;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Noto Sans;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
      color: #FFF;
      font-size: 30px;
      font-weight: bold;

      @media(max-width: 680px){
      margin: 0;
    }
  }

  span {
      color: #F4F5F5;
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
  }

  input {
    width: 299px;
    height: 29px;

    @media(max-width: 680px){
      padding:0 10px;
      height: 40px;
      width: 399px;
    }

    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.67);
    border: none;
    padding: 5px 10px;

    ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.67);
    }
  }
`;

export const Header = styled.div `

    background: linear-gradient(0.25deg, #00C6FB 0.6%, #005BEA 99.37%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      color: #F4F5F5;
      font-size: 30px;
      font-style: normal;
      font-weight: normal;
  }
`;

export const Container = styled.div `

  display: flex;
  width: 100%;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;

  @media(max-width: 680px){
    margin-top: 0;
    flex-direction: column;
    height: 137px;
  }

`;

export const BoxCity = styled.div `

  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  h2 {
      margin: 0;
  }

  @media(max-width: 680px){
    padding-bottom: 10px;
    padding-top: 5px;
  }

`;

export const Temperature = styled.div `

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  h2 {
      font-size: 60px;
      margin: 0;
  }

  img {
    width: 50px;
    height: 50px;
  }

`;

export const TempInfo = styled.div `

  display: flex;
  flex-direction: column;
  margin-left:10px;

`;

export const Footer = styled.div `

  display: flex;
  flex-direction: column;
  margin: 5px 106px;
  height: 100%;

  @media(max-width: 680px){
    width: 100%;
    margin: 0;
  }

  h2 {
    font-size: 26px;
    font-weight: normal;
    color: #1A223A;

    @media(max-width: 680px){
      margin: 5px;
    }
  }

`;

export const Block = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 680px){
    flex-direction: column;
    width: 100%;
  }
`;

export const CardInfo = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #E3E3E3;
  width: 183px;
  height: 200px;
  box-sizing: border-box;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

  @media(max-width: 680px){
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
  }

  h2 {
    font-style: normal;
    font-weight: 50;
    font-size: 16px;
    color: #1A223A;
  }
`;

export const Title = styled.h1 `

  font-style: normal;
  font-weight: 50;
  font-size: 16px;
  color: #1A223A;

`;

export const Credits = styled.h1 `

display: flex;
justify-content: center;
align-items: center;
width: 100%;
font-family: Noto Sans;
font-style: normal;
font-weight: 50;
font-size: 15px;
color: #000;

`;


