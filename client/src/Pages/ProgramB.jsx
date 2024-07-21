import React, { useEffect, useContext } from 'react'
import axios from "axios"
import AboutImage from "../assets/aboutImage.svg"
import { AppContext } from '../Context/AppContext';


function ProgramB() {

    const { programB, setProgramB } = useContext(AppContext)

    useEffect(() => {
        const fetchProgramB = async () => {
            try {
                const result = await axios.get("http://localhost:5000/api/program/getProgramByType/programB")
                setProgramB(result.data)
            } catch (error) {
                console.error("Axios error!" + error)
            }
        }
        fetchProgramB()
    }, [])

    const sortedPrograms = [...programB].sort((a, b) => new Date(a.date) - new Date(b.date));

    const leftColumn = [];
    const rightColumn = [];

    sortedPrograms.forEach((program, index) => {
        if (index % 30 < 15) {
            leftColumn.push(program);
        } else {
            rightColumn.push(program);
        }
    });
    while (leftColumn.length < rightColumn.length) {
        leftColumn.push(null);
    }
    while (rightColumn.length < leftColumn.length) {
        rightColumn.push(null);
    }
    const combinedRows = leftColumn.map((leftProgram, index) => {
        return { left: leftProgram, right: rightColumn[index] };
    });

    return (
        <>
            <main className='w-full h-full'>

                <div className='absolute top-0 right-0'>
                    <img src={AboutImage} alt="The image was not found"
                        className='about-image relative h-[52vh] w-full object-cover opacity-[0.9] max-sm:h-[20vh] max-md:h-[30vh] max-lg:h-[30vh] max-xl:h-[30vh]' />
                </div>

                <div className='programB-container flex items-center justify-center p-[5%] mt-[40vh] max-sm:mt-[10vh] max-md:mt-[20vh] max-lg:mt-[20vh]'>

                    <div className="relative overflow-hidden shadow-md rounded-lg">

                        <h2 className='board-heading text-[2rem] p-[1%] '>תוכנית מצטיינים- לוח פעילויות 2024</h2>

                        <table className="table-auto w-full text-left mt-[5vh]">
                            <thead className="uppercase bg-boardColor text-[#e5e7eb]">
                                <tr>
                                    <td className="border text-center p-4 text-black text-[1.2rem]">מקבץ ראשון</td>
                                    <td className="border text-center p-4 text-black text-[1.2rem]">מקבץ שני</td>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]">
                                {combinedRows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="py-1 border text-center p-4">
                                            {row.left ? `${row.left.title} - ${new Date(row.left.date).toLocaleDateString('he-IL')}` : ''}
                                        </td>
                                        <td className="py-1 border text-center p-4">
                                            {row.right ? `${row.right.title} - ${new Date(row.right.date).toLocaleDateString('he-IL')}` : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProgramB