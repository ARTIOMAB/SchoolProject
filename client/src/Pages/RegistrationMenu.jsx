import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import RegistrationImage from "../assets/RegistrationImage.svg"
import iconB from "../assets/IconB.svg"
import iconA from "../assets/IconA.svg"

function RegistrationMenu() {

    const navigate = useNavigate()

    const { setProgram } = useContext(AppContext)

    return (
        <>
            <main className='w-full h-full'>

                <div className='absolute top-0 right-0'>
                    <img src={RegistrationImage} alt="The image was not found"
                        className='about-image relative h-[65vh] top-0 right-0 object-cover mt-[-5px] opacity-[0.9] max-sm:h-[20vh] max-md:h-[30vh] max-lg:h-[30vh] max-xl:h-[30vh]' />
                </div>

                <div className='registration-menu-container w-full h-full mt-[30%] py-[7%] flex flex-col items-center justify-center max-sm:mt-[20%] max-md:mt-[25%]'>

                    <h2 className='board-heading text-[2.5rem] '>בחרו את התוכנית </h2>

                    <div className='menu-box h-[60vh] w-[60vw] bg-boardColor p-[5%] rounded-[16px] mt-[5vh] max-sm:w-[85%] max-sm:h-screen max-md:w-[85%] max-md:h-screen max-lg:h-[80vh]'>
                        <div className="row w-full h-full flex items-center justify-center m-auto gap-[12vw] pb-[5%] max-sm:gap-0">

                            <div className="card div w-[200px] h-[200px] rounded-full p-[0px] ">
                                <button onClick={() => { navigate("/registration"), setProgram("מחוננים") }} >
                                    <div className='card-body p-[0px] object-cover'>
                                        <img
                                            className='w-[200px] h-[200px] rounded-full p-[0px] object-cover mb-[3vh]'
                                            src={iconB}
                                            alt="The image was not found" />
                                        <h5 className='text-[1.3rem]'>הרשמה לתוכנית מחוננים</h5>
                                    </div>
                                </button>
                            </div>

                            <div className="card div w-[200px] h-[200px] rounded-full p-[0px] ">

                                <button onClick={() => { navigate("/registration"), setProgram("מצטיינים") }}>
                                    <div className='card-body p-[0px]'>
                                        <img
                                            className='w-[200px] h-[200px] rounded-full p-[0px] object-cover mb-[3vh]'
                                            src={iconA}
                                            alt="The image was not found" />
                                        <h5 className='text-[1.3rem]'>הרשמה לתוכנית מצטיינים</h5>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RegistrationMenu