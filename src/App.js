import React, { useState } from 'react';
import BasicInfo from './Screens/BasicInfo/BasicInfo';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme/theme"
import { FaMoon, FaSun, FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn, FaDribbble, FaVimeoV, FaPinterest } from 'react-icons/fa';
import Resume from './Screens/Resume/Resume';
import Portfolio from './Screens/Portfolio/Portfolio';
import Contacts from './Screens/Contacts/Contacts';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor}
`

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme }>
      <GlobalStyles/>
      <StyledApp>
          <div className='box-wrapper'>
              <div className='box'>
                <div className='sm-links'>
                  <div className='sml-item btn-theme' onClick={()=>themeToggler()}>
                    { theme==='light' ? <FaSun /> : <FaMoon /> }
                  </div>
                  <div className='sml-item fb'>
                    <FaFacebookF />
                  </div>
                  <div className='sml-item fb'>
                    <FaTwitter />
                  </div>
                  <div className='sml-item fb'>
                    <FaGoogle />
                  </div>
                  <div className='sml-item fb'>
                    <FaLinkedinIn />
                  </div>
                  <div className='sml-item fb'>
                    <FaDribbble />
                  </div>
                  <div className='sml-item fb'>
                    <FaVimeoV />
                  </div>
                  <div className='sml-item fb'>
                    <FaPinterest />
                  </div>
                </div>
                <BasicInfo />
                <Resume />
                <Portfolio />
                <Contacts />
              </div>
          </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
