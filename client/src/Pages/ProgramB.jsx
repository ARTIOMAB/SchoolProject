import React from 'react'
import programB from "../assets/programB.svg"

function ProgramB() {
    return (
        <>
            <div className='programB-container flex items-center justify-center'>
                <img
                    className='w-[80vw] h-[90vh] p-[5%]'
                    src={programB}
                    alt="The image was not found" />
            </div>
        </>
    )
}

export default ProgramB