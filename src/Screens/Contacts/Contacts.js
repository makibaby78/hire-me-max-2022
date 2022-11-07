import React, { useState, useRef } from 'react';
import Axios from 'axios'
import { validate } from 'react-email-validator'
import { FaLockOpen, FaLock, FaEnvelope, FaHouseUser, FaPhoneAlt, FaGlobeAsia, FaAngleDown } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const [messsageSent, setMessageSent] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault();
        const nameVal = nameRef.current.value
        const emailVal = emailRef.current.value
        const messageVal = messageRef.current.value

        if(nameVal===""||messageVal===""||messageVal===""){
            console.log("empty fields")
        }else if(validate(emailVal)===false){
            console.log("invalid email")
        }else{
            Axios.post("https://cv-profile-messages.herokuapp.com/messages", {
                    name: nameVal,
                    message: messageVal,
                    email: emailVal,
            });
            setMessageSent(true)
        }
    }

    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`contact-wrapper resume-wrapper cs ${hide}`}>
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
            <iframe title='google-map'
              src="https://maps.google.com/maps?q=consolacion%20tayud&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            <div className='ci-c-wrapper'>
                    <div className='ci-wrapper'>
                    { messsageSent ?  
                        <div className='ci-c-header icon-down'>
                                <FaAngleDown /><h3>Your Message Was Sent</h3>
                        </div>
                        :
                        <div>
                            <div className='ci-c-header icon-down'>
                                <FaAngleDown /><h3>SEND ME A MESSAGE</h3>
                            </div>
                            <div className='ne-wrapper'>
                                <div className='li-wrapper'>
                                    <label className='fc-4' type='text'>Name</label>
                                    <input ref={nameRef}  type="text" name='name' />
                                </div>
                                <div className='li-wrapper'>
                                    <label className='fc-4' type='text'>Email</label>
                                    <input ref={emailRef}  type="email" name='email' />
                                </div>
                            </div>
                            <div className='li-wrapper'>
                                <label className='fc-4' type='text'>Your Message</label>
                                <textarea ref={messageRef} type="long-text" />
                            </div>
                            <button className='btn-ci' onClick={(e)=>sendMessage(e)}>Submit</button>
                        </div>
                    }
                        <div className='ci-card'>
                            <h4 className='fc-3'>CONTACT INFO</h4>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaHouseUser /></div> 
                                <div className='details-wrapp'>
                                    <span className='fc-1'>East Binabag Tayud, Consolacion Cebu</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaPhoneAlt /></div> 
                                <div className='details-wrapp'>
                                    <span className='fc-1'>09922791830</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaHouseUser /></div>
                                <div className='details-wrapp'>
                                    <span className='fc-1'>max.baisac@gmail.com</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaGlobeAsia /></div> 
                                <div className='details-wrapp'></div>
                                    <span className='fc-1'><a href="https://makibaby78.github.io/hire-me-max-2022/">https://makibaby78.github.io/hire-me-max-2022/</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}


export default Contacts   