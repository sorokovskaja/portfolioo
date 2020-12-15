import './App.css';
import React, { useState } from "react";
import Header from './components/HeaderComponent'
import Footer from './components/Footer';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes"
import Wel from 'react-welcome-page'
import logo2 from './components/bird.jpg'

function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* <GlobalStyles /> */}
      <div className="App"  >
        <Wel
          loopDuration={1100}
          data={[
            {
              image: logo2,
              text: 'Welcome',
              imageAnimation: 'flipInX',
              textAnimation: 'bounce',
              backgroundColor: 'cream',
              textColor: '#002134',
            },
            {
              image: logo2,
              text: 'To',
            },
            {
              image: logo2,
              text: 'Portfolioo',
              textAnimation: 'rotateIn'
            }
          ]}
        />
        <Header />
        <Footer />
      </div>
    </ThemeProvider>

  );
};

export default App;