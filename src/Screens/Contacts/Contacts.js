import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaEnvelope } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`resume-wrapper cs ${hide}`}>
        <div className={`bi-it-cs bi-it-con ${hide}`} >
            <button className={`bi-icon-cs bi-icon-con ${hide}`} onClick={()=>themeToggler()}>
                <FaEnvelope />
            </button>
        </div>
        <h4>CONTACTS</h4>
        <div className='bi-hide'>   
            <button className='bi-hi-wrapper' onClick={()=>themeToggler()}>
                { hide === "hide" ? <FaLock /> : <FaLockOpen /> }
            </button>
        </div>
        <div className={`contact-content ${hide}`}>
            Test
        </div>
    </div>
  )
}

export default Contacts   