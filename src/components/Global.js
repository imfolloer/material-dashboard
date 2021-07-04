import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  p{
    color: ${({ theme }) => theme.text} !important;
  }
   main{
  //   background-color:${({ theme }) => theme.text} !important;
  //   color:${({ theme }) => theme.body} !important;
  // border:1px solid #fff;
  //    border-radius:30px;
    //  padding-top:5px;
    //  padding-bottom:0px;
   }
  fieldset{
    border-color:${({ theme }) => theme.primary} !important;
  }
  .MuiTypography-colorPrimary{
    color:${({ theme }) => theme.primary} !important;
  }
  .MuiFormLabel-root{
    color:${({ theme }) => theme.primary} !important;
  }
  input{
    color:${({ theme }) => theme.text} !important;
  }  
  a {
    color: ${({ theme }) => theme.text};
  }
`;