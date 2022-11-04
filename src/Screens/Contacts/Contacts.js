import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaEnvelope, FaHouseUser, FaPhoneAlt, FaGlobeAsia, FaAngleDown } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
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
                        <div>
                            <div className='ci-c-header icon-down'>
                                <FaAngleDown /><h3>SEND ME A MESSAGE</h3>
                            </div>
                            <div className='ne-wrapper'>
                                <div className='li-wrapper'>
                                    <label className='fc-4' type='text'>Name</label>
                                    <input type="text" name='name' />
                                </div>
                                <div className='li-wrapper'>
                                    <label className='fc-4' type='text'>Email</label>
                                    <input type="email" name='email' />
                                </div>
                            </div>
                            <div className='li-wrapper'>
                                <label className='fc-4' type='text'>Your Message</label>
                                <textarea type="long-text" />
                            </div>
                            <button className='btn-ci'>Submit</button>
                        </div>
                        <div className='ci-card'>
                            <h5>CONTACT INFO</h5>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaHouseUser /></div> 
                                <div className='details-wrapp'>
                                    <span className='fc-1'>East Binabag Tayud, Consolacion Cebu</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaPhoneAlt /></div> 
                                <div className='details-wrapp'>
                                    <span className='fc-1'>09453529874</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaHouseUser /></div>
                                <div className='details-wrapp'>
                                    <span className='fc-1'>raindrops.dark@gmail.com</span>
                                </div>
                            </div>
                            <div className='icon-details'>
                                <div className='icon-wrapp'><FaGlobeAsia /></div> 
                                <div className='details-wrapp'></div>
                                    <span className='fc-1'>https://makibaby78.github.io/hire-me-max-2022/</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}


export default Contacts   