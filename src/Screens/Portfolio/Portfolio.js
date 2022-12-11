import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaBriefcase } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`portfolio-wrapper resume-wrapper cs ${hide}`}>
        <div className={`bi-it-cs bi-it-portolio ${hide}`} >
            <button className={`bi-icon-cs bi-icon-port ${hide}`} onClick={()=>themeToggler()}>
                <FaBriefcase />
            </button>
        </div>
        <h4>PORTFOLIO</h4>
        <div className='bi-hide'>   
            <button className='bi-hi-wrapper' onClick={()=>themeToggler()}>
                { hide === "hide" ? <FaLock /> : <FaLockOpen /> }
            </button>
        </div>
        <div className={`portfolio-content ${hide}`}>
            <div className='portfolio-list'>
                <div className='portfolio-list-wrapper pl-1'>
                    <a href="https://makibaby78.github.io/clavs/" target="_blank" rel="noreferrer">
                        <div className='pwi'>
                            <h5>Shopping Website</h5>
                            <h5>React JS</h5>
                        </div>
                    </a>
                </div>
                <div className='portfolio-list-wrapper pl-2'>
                    <a href="https://makibaby78.github.io/hire-me-max/" target="_blank" rel="noreferrer">
                        <div className='pwi'>
                            <h5>Profile 2020</h5>
                        </div>
                    </a>
                </div>
                <div className='portfolio-list-wrapper pl-3'>
                    <a href="https://makibaby78.github.io/hostagame/" target="_blank" rel="noreferrer">
                        <div className='pwi'>
                            <h5>BlackJack</h5>
                            <h5>Vanilla JS</h5>
                        </div>
                    </a>
                </div>
                <div className='portfolio-list-wrapper pl-4'>
                    <a href="https://xo-app.au.meteorapp.com/" target="_blank" rel="noreferrer">
                        <div className='pwi'>
                            <h5>TiktakToe</h5>
                            <h5>React JS - Meteor JS</h5>
                            <span>Login System</span>
                            <span>Realtime Webapp</span>
                            <span>Chat System</span>
                            <span>Upload System</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio   