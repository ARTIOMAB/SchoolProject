import Logo from '../assets/SchoolLogoClean.jpg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const navigate = useNavigate();
    // onClick={() => { navigate("/contact") }}
    return (
        <>
            <header className='h-[15vh]'>
                <div className='header h-full flex flex-row justify-center gap-[6vw]'>
                    <div className='logo-heading h-full w-[50%] flex items-center content-center justify-center'>
                        <img src={Logo} alt="image not found" className='logo h-full p-[1%] pr-[3%]' />
                        <h1 className='text-[1.5rem] text-mainText font-bold'>מרכז מו"ח- מחוננים ומצטיינים חריש</h1>
                    </div>

                    <nav className='h-full w-[50%] flex items-center'>
                        <ul className='flex items-center justify-center gap-[2vw] text-contentText'>
                            <li>אודות</li>
                            <li ><button>צור קשר</button> </li>
                            <li>הצטיינות</li>
                            <li>רישום</li>
                            <li><button onClick={() => { navigate("/") }}>דף הבית</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar