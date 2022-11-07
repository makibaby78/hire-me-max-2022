import React, { useState } from 'react'
import Axios from 'axios'
import { FaLockOpen, FaLock, FaEnvelopeOpen } from 'react-icons/fa';
import './Messages.css';

function Messages() {
    const [hide, setHide] = useState("hide");
    const [messages, setMessages] = useState([]);

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };
     Axios.get('https://cv-profile-messages.herokuapp.com/messages').then(async (response) => {
        setMessages(response.data)

    });

  return (
    <div>
        <div className={`messages-wrapper resume-wrapper cs ${hide}`}>
            <div className={`bi-it-cs bi-it-messages ${hide}`} >
                <button className={`bi-icon-cs bi-icon-mes ${hide}`} onClick={()=>themeToggler()}>
                    <FaEnvelopeOpen />
                </button>
            </div>
            <h4>MESSAGES</h4>
            <div className='bi-hide'>   
                <button className='bi-hi-wrapper' onClick={()=>themeToggler()}>
                    { hide === "hide" ? <FaLock /> : <FaLockOpen /> }
                </button>
            </div>
            <div className={`messages-content ${hide}`}>
                {messages.map((anyNameYouWant, index)=>{
                    return(
                        <div className='m-wrapper' key={index}>
                            <div className=''>
                                <h3>{anyNameYouWant.name}</h3>
                                <span className='m-date'>{anyNameYouWant.dateCreated}</span>
                            </div>
                            <p className='fc-1'>"{anyNameYouWant.message}"</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Messages