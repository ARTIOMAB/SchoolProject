import React from 'react'
import { useNavigate } from 'react-router-dom'
import iconB from "../../assets/IconB.svg"
import iconA from "../../assets/IconA.svg"

function Programs() {

    const navigate = useNavigate()

    return (
        <>
            <div className='programs-container p-[2%] w-full h-full '>

                <div className='programs-box bg-boardColor w-[65%] h-[90%] m-auto p-[4%] rounded-[16px] max-sm:w-[95%] max-sm:h-full'>
                    <h2 className='board-heading text-[2.5rem] w-[40%] border-b-[2px] border-black m-auto max-lg:w-[60%]'>התוכניות שלנו</h2>

                    <div className="row h-full w-full m-auto flex items-center justify-center gap-[12vw] p-[5%] max-sm:p-[10%]">
                        <div className="card div w-[200px] h-[200px] rounded-full p-[0px]">
                            <button onClick={() => { navigate("/program_B") }}>
                                <div className='card-body p-[0px]'>
                                    <img
                                        className='w-[200px] h-[200px] rounded-full p-[0px] object-cover'
                                        src={iconB}
                                        alt="The image was not found" />
                                    <h5 className='py-2 text-[1.2rem]'>כיתות ג' מצטיינים</h5>
                                </div>
                            </button>
                        </div>

                        <div className="card div w-[200px] h-[200px] rounded-full p-[0px]">
                            <button onClick={() => { navigate("/program_A") }}>
                                <div className='card-body p-[0px]'>
                                    <img
                                        className='w-[200px] h-[200px] rounded-full p-[0px] object-cover'
                                        src={iconA}
                                        alt="The image was not found" />
                                    <h5 className='py-2 text-[1.2rem]'>כיתות ג' מחוננים</h5>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs