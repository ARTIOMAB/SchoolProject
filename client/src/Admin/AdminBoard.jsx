import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { AppContext } from '../Context/AppContext';
import { uploadBoard } from "../utils/imageUploader"
import AdminEditBoard from './AdminEditBoard';
import AdminDeleteBoard from './AdminDeleteBoard';


function AdminBoard() {

    const { setBoardItem, loading, setLoading, boardItem } = useContext(AppContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {

        setLoading(true);
        console.log(data);
        try {
            const res = await uploadBoard(data);
            setBoardItem(prevItems => [...prevItems, res]);
            console.log(res);
            setLoading(false);
            toast.success("המודעה נוצרה בהצלחה")


        } catch (error) {
            console.error("Uploading board failed", error);
            toast.error("משהו השתבש יש לנסות שוב")
        } {

            reset();
        }
    };
    console.log(boardItem)

    return (
        <>
            <div className="admin-board-container w-full h-full py-[1%] flex flex-col items-center justify-start grow">

                <h2 className="text-[2.5rem] self-center pt-[5%]" >הגדרת לוח מודעות</h2>

                <div className="admin-board-box h-[60vh] w-full flex flex-col items-center justify-center">

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='admin-board-form w-[70%] h-[40vh] flex flex-col items-center justify-center gap-[6vh] max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>

                        <div className='admin-board-form-input h-full w-full flex flex-col items-center justify-center gap-[2vh]'>

                            <div className='h-[20%] w-full flex justify-around items-center text-[1.1rem]'>
                                <label>בחירת תמונה</label>
                                <input
                                    className='form-control w-[70%]' type="file" id='image' name='image'
                                    {...register("image")} />
                            </div>

                            <div className=' h-[20%] w-full flex justify-around items-center text-[1.1rem]'>
                                <label>בחירת כותרת</label>
                                <input className='form-control w-[70%]' type="text" id='title' aria-describedby='titleHelp' placeholder='כותרת המודעה'
                                    {...register("title", { required: true, minLength: 3, maxLength: 10 })} />
                                {errors.title && <small id="titleHelp" className="form-text text-red text-[1rem]">ערך חובה!</small>}
                            </div>

                            <div className=' h-[20%] w-full flex justify-around items-center text-[1.1rem]'>
                                <label>טקסט המודעה</label>
                                <input className='form-control w-[70%]' type="text" id='text' aria-describedby='textHelp'
                                    {...register("text", { required: true, minLength: 3, maxLength: 20 })} />
                                {errors.text && <small id="textHelp" className="form-text text-red text-[1rem]">ערך חובה!</small>}
                            </div>
                        </div>

                        <div className='admin-board-form-button w-[30%] h-[10%] flex items-start justify-center'>
                            <button className="btn btn-primary w-full"
                                type='submit' >שלח</button>
                        </div>

                    </form>

                </div>
                <hr />
                <div className='admin-edit w-full h-full flex flex-col items-center justify-center py-[8vh] '>
                    <AdminEditBoard />
                    <hr />
                    <AdminDeleteBoard />
                </div>
            </div>

        </>
    )
}

export default AdminBoard

