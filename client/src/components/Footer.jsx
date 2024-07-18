import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import arrowUp from "../assets/arrow-up-circle-fill.svg"
import Logo from '../assets/Logo2.svg'
import { AppContext } from '../Context/AppContext'
import Admin from "../assets/admin.svg"

function Footer() {

    const navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(AppContext)


    const handleLogin = () => {

        if (loggedIn) {
            return (
                <div className='buttons-box w-full flex flex-row items-center justify-between max-sm:justify-evenly'>
                    <button type='button' className='btn btn-dark ' onClick={() => {
                        setLoggedIn(false);
                        localStorage.removeItem('loggedIn');
                        navigate("/login");
                    }}>התנתק</button>

                    <button className='admin-btn w-[20%] h-full'
                        onClick={() => { navigate("/admin") }}>
                        <img src={Admin} alt="The image was not found" className='w-full h-full' />
                    </button>
                </div>

            );
        } else {
            return (
                <button type='button' className='btn btn-dark' onClick={() => navigate('/login')}>היכנס</button>
            );
        }
    }


    return (
        <>
            <footer className='w-full h-[15vh] w-full bottom-0 relative max-sm:h-[20vh]'>
                <div className='footer-container h-full w-full'>
                    <div className='footer-box w-full h-full '>
                        <div className="footer-main w-full h-full flex items-center justify-evenly gap-[5vw]  max-sm:flex-wrap max-sm:gap-0 max-md:flex-wrap max-md:gap-0 max-lg:gap-[1vw]">
                            <img src={Logo} alt="image not found" className='logo h-[11vh] self-center max-sm:h-[9vh] max-md:h-[7vh] max-lg:h-[10vh]' />
                            <h3 className='text-[1.5rem] text-mainText max-sm:text-[1rem]'>מרכז מו"ח- מרכז מחוננים ומצטיינים </h3>

                            <div className='login-admin-button w-[15vw] max-sm:w-[40vw]'>
                                {handleLogin()}
                            </div>
                            <div className='links-div flex items-center justify-center p-[1%] py-0.5'>
                                <ul className='footer-links flex flex-row gap-[2vw] max-sm:gap-[4vw] max-md:text-[1.2rem] max-lg:flex-wrap'>
                                    <li><button onClick={() => navigate('/registrationMenu')}>רישום</button></li>
                                    <li><button onClick={() => navigate('/about')}>אודותינו</button></li>
                                    <li><button onClick={() => navigate('/contact')}>צור קשר</button></li>
                                    <li>
                                        <a href="#">
                                            <img className='w-[4vh] h-[4vh] max-sm:hidden max-md:hidden max-lg:hidden' src={arrowUp} alt="The image was not found" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='copyright w-full h-[3vh] text-[0.6rem] flex justify-end items-center opacity-[0.5] relative'>
                            <span className='ml-[1vw]'>CopyRight 2024 AA</span>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer