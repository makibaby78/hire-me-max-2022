import React, { useState } from 'react';
import './BasicInfo.css';
import { FaLockOpen, FaLock, FaUserAlt } from 'react-icons/fa';

function BasicInfo() {
    const [hide, setHide] = useState("hide");

    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };

  return (
    <div className={`basic-wrapper ${hide}`}>
        <div className='bi-icon-text'>
            <button className={`bi-icon ${hide}`} onClick={()=>themeToggler()}>
                <FaUserAlt />
            </button>
            <div  className={`bi-title-text ${hide}`}>
                <span>PROFILE</span>
            </div>
        </div>
        <div className='bi-hide'>   
            <button className='bi-hi-wrapper' onClick={()=>themeToggler()}>
                { hide === "hide" ? <FaLock /> : <FaLockOpen /> }
            </button>
        </div>
        <div className={`bi ${hide}`}>
            <div className='bi-pic'>
                <img className={`bi-pic-owner ${hide}`} src='https://makibaby78.github.io/hire-me-max/images/IMG20210711185232.jpg' alt='owner' />
                <div className='nt'>
                    <h3 className='name'>Max Loued Baisac</h3>
                    <span className='title fc-2'>Web Developer</span>
                </div>
            </div>
            <div className={`bi-details ${hide}`}>
                <table>
                    <tbody>
                        <tr className='bi-info'>
                            <td className='bi-left'>Name:</td>
                            <td className='bi-right fc-1'> Max Loued Baisac</td>
                        </tr>
                        <tr className='bi-info'>
                            <td className='bi-left'>Date of birth:</td>
                            <td className='bi-right fc-1'> June 23, 1995</td>
                        </tr>
                        <tr className='bi-info'>
                            <td className='bi-left'>Address:</td>
                            <td className='bi-right fc-1'>East Binabag Tayud, Consolacion Cebu</td>
                        </tr>
                        <tr className='bi-info'>
                            <td className='bi-left'>Date of birth:</td>
                            <td className='bi-right fc-1'> June 23, 1995</td>
                        </tr>
                        <tr className='bi-info'>
                            <td className='bi-left'>Phone:</td>
                            <td className='bi-right fc-1'>09453529874</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className={`bi-intro ${hide}`}>
            <p className='fc-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </div>
  )
}

export default BasicInfo