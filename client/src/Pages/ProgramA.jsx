import React from 'react'
import programA from "../assets/programA.svg"

function ProgramA() {
    return (
        <>
            <main>
                <div className='programA-container flex items-center justify-center p-[5%]'>
                    <div className="relative overflow-hidden shadow-md rounded-lg">
                        <h2 className='board-heading text-[2rem] p-[1%]'>תוכנית מחוננים- לוח פעילויות 2024</h2>
                        <table className="table-auto w-full text-left">
                            <thead className="uppercase bg-[#008080] text-[#e5e7eb]">
                                <tr>
                                    <td className="border text-center p-4"></td>
                                    <td className="border text-center p-4"></td>
                                    <td className="border text-center p-4"></td>
                                    <td className="border text-center p-4"></td>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]">
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">6/5/24 -כח' בניסן</td>
                                    <td className="py-1 border text-center p-4">19/2/24 י' באדר א'</td>
                                    <td className="py-1 border text-center p-4">18/12/23 –ו' בטבת</td>
                                    <td className="py-1 border text-center p-4">מפגש פתיחה 20/9/23 ה' בתשרי</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">20/5/24-יב' באייר</td>
                                    <td className="py-1 border text-center p-4">-26/2/24 יז' באדר א'</td>
                                    <td className="py-1 border text-center p-4">25/12/23 -יג' בטבת
                                    </td>
                                    <td className="py-1 border text-center p-4">23/10/23 ח' בחשון- זום</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">יט' באייר 27/5/24</td>
                                    <td className="py-1 border text-center p-4">-4/3/24 כד' באדר א'</td>
                                    <td className="py-1 border text-center p-4">1/1/24 -כ' בטבת</td>
                                    <td className="py-1 border text-center p-4">טו' בחשון 30/10/23 מפגש</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">3/6/24 כו' באייר</td>
                                    <td className="py-1 border text-center p-4">-11/3/24 א' באדר ב'</td>
                                    <td className="py-1 border text-center p-4">8/1/24 -כז' בטבת</td>
                                    <td className="py-1 border text-center p-4">6/11/23 -&nbsp;כב' בחשון</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">10/6/24-&nbsp;ד' בסיון</td>
                                    <td className="py-1 border text-center p-4">-18/3/24 ח' באדר ב'</td>
                                    <td className="py-1 border text-center p-4">15/1/24-ה' בשבט</td>
                                    <td className="py-1 border text-center p-4">13/11/23 -כט' בחשון</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">17/6/24 -יא' בסיון</td>
                                    <td className="py-1 border text-center p-4">-1/4/24 כב' באדר ב'</td>
                                    <td className="py-1 border text-center p-4">22/1/24 -יב' בשבט</td>
                                    <td className="py-1 border text-center p-4">20/11/23 -ז' בכסלו</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4">-24/6/24 יח' בסיון מפגש סיום שנה</td>
                                    <td className="py-1 border text-center p-4">-8/4/24 כט' באדר ב'</td>
                                    <td className="py-1 border text-center p-4">-29/1/24 יט' בשבט מפגש סיום מחצית</td>
                                    <td className="py-1 border text-center p-4">27/11/23-יד' בכסלו</td>
                                </tr>
                                <tr className="py-1">
                                    <td className="py-1 border text-center p-4"></td>
                                    <td className="py-1 border text-center p-4"></td>
                                    <td className="py-1 border text-center p-4"></td>
                                    <td className="py-1 border text-center p-4">4/12 –כא' בכסלו מפגש לקראת חנוכה</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProgramA