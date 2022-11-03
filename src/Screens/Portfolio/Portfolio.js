import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaBriefcase } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`resume-wrapper cs ${hide}`}>
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
    </div>
  )
}

export default Portfolio   