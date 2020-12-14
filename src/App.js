
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalstyles";
import {  lightTheme,darkTheme } from "./Themes"


function App() {
//   const [theme,setTheme] = useState('dark');
//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light')
// }
  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        {/* <GlobalStyles /> */}
        <div className="App">
          <Header />
        </div>
      </>
    // </ThemeProvider>
  );
};

export default App;