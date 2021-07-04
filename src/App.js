import react from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './components/dark-mode/useDarkMode';
import { lightTheme, darkTheme } from './components/dark-mode/Theme';
import { GlobalStyles } from './components/Global';
import { useLocation } from 'react-router-dom'

import Toggle from './components/Toggle';


function App() {
  
  const location = useLocation();
  console.log(location.pathname);
  
  
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };
  if(location.pathname==='/dashboard'){
    return (
      <div className="App">
        <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          
        </>
      </ThemeProvider>
        
      </div>
    );
  }else{
  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div style={{}}>
        <Toggle style={{}} theme={theme} toggleTheme={toggleTheme} /></div>
        {/*
        <span>Path : {location.pathname}</span>
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>*/}
      <Header/>
      </>
    </ThemeProvider>
      
    </div>
  );}
}

export default App;
