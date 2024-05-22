import React from 'react'
import instagramLogo from "../assets/instagram.svg"
import arrowUp from "../assets/arrow-up-circle-fill.svg"
import facebookLogo from "../assets/facebook.svg"
import youtubeLogo from "../assets/youtube.svg"

function Footer() {
    return (
        <>
            <footer>
                <div className='footer-container h-[10vh]'>
                    <div className="footer-main flex items-center justify-center gap-[7vw] ">
                        <h3 className='text-[1.5rem] text-mainText'>מרכז מו"ח- מרכז המחוננים והמצטיינים </h3>
                        <div className='footer-social flex items-center justify-center gap-[2vw]'>
                            <a href="https://www.instagram.com/" target='_blank'>
                                <img className='w-[25px] h-[25px]' src={instagramLogo} alt="The image was not found" />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <img className='w-[25px] h-[25px]' src={facebookLogo} alt="The image was not found" />
                            </a>
                            <a href="https://www.youtube.com/" target='_blank'>
                                <img className='w-[25px] h-[25px]' src={youtubeLogo} alt="The image was not found" />
                            </a>
                        </div>
                        <div className='links-div'>
                            <ul className='footer-links flex flex-row gap-[2vw]'>
                                <li>תנאי שימוש</li>
                                <li>אודותינו</li>
                                <li>צור קשר</li>
                                <li>
                                    <a href="#">
                                        <img className='w-[25px] h-[25px]' src={arrowUp} alt="The image was not found" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright w-full h-[5vh] text-[0.6rem] flex justify-end items-center'><span className='ml-[1vw]'>Copyright 2024 AA</span></div>
                </div>
            </footer>
        </>
    )
}

export default Footer