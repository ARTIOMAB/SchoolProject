import Logo from '../assets/SchoolLogoClean.jpg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <header className='h-[15vh]'>
                <div className='header h-full flex flex-row justify-center gap-[6vw]'>
                    <div className='logo-heading h-full w-[50%] flex items-center content-center justify-center'>
                        <img src={Logo} alt="image not found" className='logo h-full p-[1%] pr-[3%]' />
                        <h1 className='text-[1.5rem] text-mainText font-bold'>מרכז מו"ח- מרכז המחוננים והמצטיינים </h1>
                    </div>

                    <nav className='h-full w-[50%] flex items-center'>
                        <ul className='flex items-center justify-center gap-[3vw] text-contentText'>
                            <li>אודות</li>
                            <li ><button className='hover:bg-mainText hover:text-white hover:font-bold hover:p-[5px] hover:rounded-[10px]' onClick={() => { navigate("/contact") }}>צור קשר</button> </li>
                            <li>הצטיינות</li>
                            <li>רישום</li>
                            <li><button className='hover:bg-mainText hover:text-white hover:font-bold hover:p-[5px] hover:rounded-[10px]' onClick={() => { navigate("/") }}>דף הבית</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar