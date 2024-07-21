import React, { useContext, useEffect } from 'react'
import { ColorRing } from "react-loader-spinner"
import { AppContext } from '../../Context/AppContext'
import { fetchBoard } from "../../utils/boardService"


function Board() {

    const { boardItem, setBoardItem, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        const allBoardItems = async () => {
            setLoading(true)
            try {
                const res = await fetchBoard()
                setBoardItem(res.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(
                    "Fetching error:",
                    error.response ? error.response.data : error.message
                );
            }
        }
        allBoardItems()
    }, [setBoardItem])



    return (
        <>
            {loading ? (

                <ColorRing
                    visible={true} height="500" width="500" ariaLabel="blocks-loading"
                    wrapperStyle={{ height: '25%', width: '25%', margin: 'auto' }}
                    wrapperClass="w-full h-[40vh] flex justify-center items-center"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />

            ) : (<div className="board-container bg-boardColor p-[8vw]">
                <div className='board-box h-full w-full flex flex-col items-center'>
                    <h2 className='board-heading text-[3rem] border-b-2 border-black font-rubikBubblesRegular h-[10%] pt-[3%]'>
                        לוח מודעות
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-[1%] pt-[2%]">
                        {boardItem.map((item) => (
                            <div key={item._id} className="card bg-white rounded-t-[10px] shadow-md">
                                <img
                                    src={`https://harish-school.onrender.com/images/${item.image}`}
                                    alt={item.title}
                                    className="h-40 w-full object-cover mb-4 rounded-t-[10px]"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-xl font-bold mb-2">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}

        </>
    )
}

export default Board


