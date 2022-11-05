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
                <p className='mb-20 fc-1'>Over the course of two years, while serving as a full-time missionary for The Church of Jesus Christ of Latter-day Saints, I honed my leadership and communication abilities.</p>
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
                <div className='ps-sec rr-content'>
                    <h5 className='mb-10'>PROGRAMMING SKILLS</h5>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Wordpress</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-wp'>70%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>PHP</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-php'>30%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Javascript</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-wp'>80%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>HTML</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-html'>90%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>CSS</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-css'>93%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>MySQL</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-sql'>30%</div>
                        </div>
                    </div>
                </div>
                <div className='waf-sec rr-content'>
                    <h5 className='mb-10'>Web application framework</h5>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Laravel</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-lara'>30%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>React JS</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-rjs'>60%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Express JS</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-ejs'>45%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Bootstrap</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-bts'>80%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>JQuery</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-jq'>60%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Tailwind CSS</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-tw'>60%</div>
                        </div>
                    </div>
                </div>
                <div className='gs-sec rr-content'>
                    <h5 className='mb-10'>GRAPHIC SKILLS</h5>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Photoshop</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-ps'>40%</div>
                        </div>
                    </div>
                    <div className='skills-tb'>
                        <span className='skills-title fc-4'>Video Editing</span>
                        <div className='skills-bar'>
                            <div className='skills-bar-rate skills-bar-ve'>60%</div>
                        </div>
                    </div>
                </div>
                <div className='o-sec rr-content'>
                    <h5 className='mb-10'>OTHERS</h5>
                    <div className='db-stb'>
                        <div className='skills-tb'>
                            <span className='skills-title fc-4'>Ontraport</span>
                            <div className='skills-bar'>
                                <div className='skills-bar-rate skills-bar-op'>80%</div>
                            </div>
                        </div>
                        <div className='skills-tb'>
                            <span className='skills-title fc-4'>ClickFunnels</span>
                            <div className='skills-bar'>
                                <div className='skills-bar-rate skills-bar-cf'>80%</div>
                            </div>
                        </div>
                    </div>
                    <div className='db-stb'>
                        <div className='skills-tb'>
                            <span className='skills-title fc-4'>Wix</span>
                            <div className='skills-bar'>
                                <div className='skills-bar-rate skills-bar-wx'>80%</div>
                            </div>
                        </div>
                        <div className='skills-tb'>
                            <span className='skills-title fc-4'>Leadpages</span>
                            <div className='skills-bar'>
                                <div className='skills-bar-rate skills-bar-lp'>80%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume   