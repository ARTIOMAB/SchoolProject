import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import BackGround from "../assets/BackGround.svg"
import AdminBoard from "./AdminBoard"
import AdminGallery from './AdminGallery'
import AdminProgram from './AdminProgram'


function Admin() {

    const { setLoggedIn } = useContext(AppContext);

    const navigate = useNavigate();


    useEffect(() => {

        const logIn = localStorage.getItem('loggedIn');
        if (logIn === 'true') {
            setLoggedIn(true);
        } else {
            navigate("/login");
        }
    }, [setLoggedIn]);

    return (
        <>
            <main className='h-full w-full'>
                <div className='admin-container w-full h-full flex flex-col items-center justify-center'>
                    <div className=' absolute top-0 right-0'>
                        <img src={BackGround} alt="The image was not found!" className='relative h-[80vh] top-0 right-0 object-cover mt-[-5px] opacity-[0.9] max-sm:h-[40vh] max-lg:h-[60vh] max-xl:h-[70vh]' />
                    </div>
                    <div className="admin-box w-full h-full flex flex-col items-center justify-center mt-[20%] gap-[5vh] max-sm:mt-[50%] max-md:mt-[70%] max-lg:mt-[70%] max-xl:mt-[70%]">

                        <section className='board-section w-[80%] h-full bg-boardColor rounded-[16px] max-sm:w-[95%] max-md:w-[95%] max-lg:w-[95%] max-xl:w-[95%]'>
                            <AdminBoard />
                        </section>
                        <section className='h-full w-[80%] bg-boardColor rounded-[16px] max-sm:w-[95%] max-md:w-[95%] max-lg:w-[95%] max-xl:w-[95%]'>
                            <AdminGallery />
                        </section>
                        <section className='programs-section w-[80%] h-full  bg-boardColor rounded-[16px] max-sm:w-[95%] max-md:w-[95%] max-lg:w-[95%] max-xl:w-[95%]'>
                            <AdminProgram />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Admin