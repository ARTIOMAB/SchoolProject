import React from 'react'
import { useNavigate } from 'react-router-dom'

function Programs() {
    const navigate = useNavigate()
    return (
        <>
            <div className='programs-container bg-boardColor p-[1%] rounded-[20px] w-[90%] m-auto'>
                <h2 className='board-heading text-[2rem]'>התוכניות שלנו</h2>
                <div className="row flex items-center justify-center gap-[12vw] p-[4%]">
                    <div className="card div w-[200px] h-[200px] rounded-full p-[0px]">
                        <button onClick={() => { navigate("/program_B") }}>
                            <div className='card-body p-[0px]'>
                                <img
                                    className='w-[200px] h-[200px] rounded-full p-[0px]'
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xa5L5JcRbOVj7FL1XN7JWJKpimNmemJXO1_qa5FiRe7o_N3hxL_c0iKMsW-_RQvvupo&usqp=CAU"
                                    alt="The image was not found" />
                                <h5>כיתות ג' מחוננים</h5>
                            </div>
                        </button>
                    </div>

                    <div className="card div w-[200px] h-[200px] rounded-full p-[0px]">
                        <button onClick={() => { navigate("/program_A") }}>
                            <div className='card-body p-[0px]'>
                                <img
                                    className='w-[200px] h-[200px] rounded-full p-[0px]'
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgcgxsoN-BnGQ4NUyGXj4lZQ3fNNBU8FN2g&usqp=CAU"
                                    alt="The image was not found" />
                                <h5>כיתות ג' מצטיינים</h5>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs