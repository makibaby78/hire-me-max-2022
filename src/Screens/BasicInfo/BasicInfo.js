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
                <img className={`bi-pic-owner ${hide}`} src='https://lh3.googleusercontent.com/fife/AAbDypA7L-cPApAWx5fLunxSlHrwfk1vssnhwW8AIiL3bHVRu1Q6XAqk885LiuVqL-QXl2TRT2oAFuq5MY-IUB1CDWcR12r3mrK2PpndOjKQViCM3JW-Q6zUmgGP39_xkflAX9eWGYoZBcCS-72CyDlrkKvTcCMIBe-nl-XodY8dAZ6Lz3VIMvfv0_UwxwnRaanZyuJ2CE6l5ebIICOhKQ9AOndPnymf8ygngjytivsdcxzLOBbXHl6nawqNDyBAh4cjDGo9adQJO9Abjj-lyjX_4Ij5wtbi-8aOHStjamUDUhaoGWgBib-KCEZE1cmVOpRwNIXASYGTXuN5V9lEu0e4SW2VoMpMxGWdAyC8fyqJTiVxnrGyIYWIxVQS-EBdToVNu-kZcANN2HYWltPkpRj-MdeJIl4o-R-HS9vogfoQhcrWmg4Yj9oXYEogIu_YMED_M_5c10_PivykWrGJzCQD2yPrY9RH0zi608uJ4hetB9Ik0Y0WiQCnkDsHVb2gLezpodPOghCrVexN2Ts6apGMF-y2PXtjnsNYetm11Y5Ap8h5LfnWpJKeyvDPy6JJsX9IBCLB1iLUL0Ex3CkG5RFNpQ4pl4YwRgvXfaa_576WRehToHfrfN9vOY1ePNb_JfKT2dPqzmeegHGLUfE-e0MlnAKpcBE-xexGwh0Q17lpIbtJX-b3ycEu-BdHvRBi48CHwa-_7RejBJweHc99liiHawHl9Vg5kGKDmZH22cQ8APKvue2wQK0lUjO7nx0aMIl3zmUFdp_Pfvj5MAOQ5wPqgnK1XFLEU11qyQ2AfpnUSI9O5nKOHvKaSZERPJ43ZUtax_yvuSq-XSinulq8C-s1w3cnZa7agnMiIrx7hDW6m6z1mWgUsxS_tB39IP2prsLD2x1nP3ewYI5OQoLIHArwCBT-P_NSm0Ddwkw-UAfB64RjPubHeMeOdvSZim3GN9DgeljN_n1T8a1-h5_22SU_kdIeLzGstCati933V4q3M_4i5FeXiMgxOMHc2zNBlLAWjzQoPoHpLdek9LxTHMy9K7ttI5jmh1nmdSELbMu1patzFkaXU1PEo9cU1mJLA7i_SgKiNKIBHmWRN5XTyD_InCk2mNblQMaXRfWB_McIl-ELU6KA70ask8PXqMMgVLNG9KRaCHbdn9jJKxEhS5IcfA9Ksfpr00m_2K1S0hgUt_pCmKmTRlKswUSxTGt_0P3kFrr9EvmuT2viWTmFgp3J4xcrkGcckruUFQACAid-XhS208iqooPZZ9bbAXMBjNuocDYYXQt-sx20B8hgs-07WdpDfzPxJt7hBeND108TUlMK2GqhLIEuHGxHqTcla4mbpx_t0g1QdHf8RRhvSOS-v9ZqU0WMVP93pi4OTkw0Wuln5P2dxv7wm_g5unSgazx0FJYjiAv4UMINIzEfDkp8AI3Iu4sCWvR2CBkyCMUdj4SWuk0vDC-mzy7-l40kFnfWF98TlVhEMDgsdWi9meX4nJLOrnOD1YChJQaNtJh8BVDETD05bwWbx5kEXK8=w912-h836'  alt='max' />
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