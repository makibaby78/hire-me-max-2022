import React, { useState } from 'react';
import { FaLockOpen, FaLock, FaStream, FaAngleDown, FaAngleRight } from 'react-icons/fa';
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
        <div className={`resume-content ${hide}`}>
            <div className='resume-left'>
                <div className='icon-down rc-header-employment icon-down'>
                    <FaAngleDown /><h5>EMPLOYMENT</h5>
                </div>
                <div className='icon-right'>
                    <div className='employment-position'>
                        <div className='employment-title'>
                            <div className='icon-prot'><FaAngleRight /></div>
                            <h5>King Digital Solutions</h5>
                        </div>
                        <h6 className=' fc-1'>Front End Web Developer</h6>
                    </div>
                    <div className='employment-date'><span className=' fc-1'>2021 - Present</span></div>
                </div>
                <p className='mb-20 fc-1'>I maintained multiple websites run by Wordpress and React JS framework. This involves designing, e-commerce/woocommerce, UI/UX and etc.</p>
                <div className='icon-right'>
                    <div className='employment-position'>
                        <div className='employment-title'>
                            <div className='icon-prot'><FaAngleRight /></div>
                            <h5>The Church Of Jesus Christ Of Latter-day Saints</h5>
                        </div>
                        <h6 className=' fc-1'>Volunteer Missionary</h6>
                    </div>
                    <div className='employment-date'><span className=' fc-1'>2016 - 2018</span></div>
                </div>
                <p className='mb-20 fc-1'>I maintained multiple websites run by Wordpress and React JS framework. This involves designing, e-commerce/woocommerce, UI/UX and etc.</p>
                <div className='icon-down rc-header icon-down'>
                    <FaAngleDown /><h5>EDUCATION</h5>
                </div>
                <div className='icon-right'>
                    <div className='education-position'>
                        <div className='education-title'>
                            <div className='icon-prot'><FaAngleRight /></div>
                            <h5>MANDAUE CITY COMPREHENSIVE NATIONAL HIGH SCHOOL</h5>
                        </div>
                        <h6 className=' fc-1'>High School</h6>
                    </div>
                    <div className='employment-date'><span className=' fc-1'>2008 - 2012</span></div>
                </div>
                <div className='icon-right'>
                    <div className='education-position'>
                        <div className='education-title'>
                            <div className='icon-prot'><FaAngleRight /></div>
                            <h5>UNIVERSITY OF CEBU</h5>
                        </div>
                        <h6 className=' fc-1'>One Year in Computer Engineering</h6>
                    </div>
                    <div className='employment-date'><span className=' fc-1'>2012 - 2013</span></div>
                </div>
                <p className='mb-20 fc-1'>At that time I didn't know what course I should take. I eventually stopped and went to work odd jobs (2014 - 2016).</p>
                <div className='icon-right'>
                    <div className='education-position'>
                        <div className='education-title'>
                            <div className='icon-prot'><FaAngleRight /></div>
                            <h5>UNIVERSITY OF CEBU</h5>
                        </div>
                        <h6 className=' fc-1'>Associate's Degree - Information Technology</h6>
                    </div>
                    <div className='employment-date'><span className=' fc-1'>2019 - 2021</span></div>
                </div>
                <p className='mb-20 fc-1'>After I served as a volunteer missionary for The Church of Jesus Christ of Latter-day Saints (Mormons 2016-2018). I pursued my associate's degree because I was fascinated in creating and building software. In the process, I learned to love coding.</p>
            </div>
            <div className='resume-right'>
                <div className=''>
                    <h5>PROGRAMMING SKILLS</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume   