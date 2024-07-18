import Logo from '../assets/Logo2.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResponsiveNavBar from './ResponsiveNavBar';


function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <header className='h-[15vh] absolute z-1 w-full relative'>
                <div className='header h-full flex flex-row justify-center gap-[4vw] max-sm:justify-around'>

                    <div className='responsive-nav-var sm:hidden flex items-center'>
                        <ResponsiveNavBar />
                    </div>

                    <div className='logo-box w-[10%] flex items-center justify-center max-sm:w-[25%] center max-xl:w-[17%]'>
                        <img src={Logo} alt="image not found"
                            className='logo h-[16vh] p-[1%] opacity-85 pr-[3%] max-sm:h-[14vh]' />
                    </div>

                    <nav className='h-full w-[50%] flex items-center justify-center max-sm:hidden'>
                        <ul className='flex items-center justify-center gap-[2vw] text-contentText text-white box-shadow-[black 2px solid]'>
                            <li><button className='bg-glassBg rounded-[16px]  shadow-glass backdrop-filter backdrop-blur-3.1  hover:bg-hoverGlass hover:font-bold hover:p-[6px]  hover:max-xl:p-[15px] hover:rounded-[16px] p-[6px] max-xl:p-[15px]' onClick={() => { navigate("/about") }}>אודות</button></li>
                            <li><button className='bg-glassBg rounded-[16px]  shadow-glass backdrop-filter backdrop-blur-3.1  hover:bg-hoverGlass hover:font-bold hover:p-[6px]  hover:max-xl:p-[15px] hover:rounded-[16px] p-[6px] max-xl:p-[15px]' onClick={() => { navigate("/contact") }}>צור קשר</button></li>
                            <li><button className='bg-glassBg rounded-[16px]  shadow-glass backdrop-filter backdrop-blur-3.1  hover:bg-hoverGlass hover:font-bold hover:p-[6px]  hover:max-xl:p-[15px] hover:rounded-[16px] p-[6px] max-xl:p-[15px]' onClick={() => { navigate("/RegistrationMenu") }}>רישום</button></li>
                            <li><button className='bg-glassBg rounded-[16px]  shadow-glass backdrop-filter backdrop-blur-3.1  hover:bg-hoverGlass hover:font-bold hover:p-[6px]  hover:max-xl:p-[15px] hover:rounded-[16px] p-[6px] max-xl:p-[15px]' onClick={() => { navigate("/") }}>דף הבית</button></li>
                        </ul>
                    </nav>

                    <div className='logo-heading h-full w-[30%] flex items-center content-center justify-center p-[2%] max-sm:hidden'>
                        <h1 className='text-[1.5rem] text-mainText font-bold  max-xl:text-[2rem]'>מרכז מו"ח- מרכז מחוננים ומצטיינים </h1>
                    </div>


                </div>
            </header>
        </>
    )
}

export default NavBar