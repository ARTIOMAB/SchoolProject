import React from 'react'
import programA from "../assets/programA.svg"

function ProgramA() {
    return (
        <>
            <div className='programA-container flex items-center justify-center'>
                <img
                    className='w-[80vw] h-[90vh] p-[5%]'
                    src={programA}
                    alt="The image was not found" />
            </div>
        </>
    )
}

export default ProgramA