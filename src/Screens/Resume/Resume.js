import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaStream } from 'react-icons/fa';
import './Resume.css';

function Resume() {
    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`resume-wrapper cs ${hide}`}>
        <div className={`bi-it-cs bi-it-resume ${hide}`} >
            <button className={`bi-icon-cs bi-icon-resume ${hide}`} onClick={()=>themeToggler()}>
                <FaStream />
            </button>
        </div>
        <h4>RESUME</h4>
        <div className='bi-hide'>   
            <button className='bi-hi-wrapper' onClick={()=>themeToggler()}>
                { hide === "hide" ? <FaLock /> : <FaLockOpen /> }
            </button>
        </div>
    </div>
  )
}

export default Resume   