import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { ColorRing } from 'react-loader-spinner';
import { AppContext } from '../Context/AppContext';
import { findBoardItem, deleteBoardItem } from "../utils/boardService";

function AdminDeleteBoard() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { setLoading, altLoading, setAltLoading } = useContext(AppContext);
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = async (data) => {
        setAltLoading(true);
        try {
            const result = await findBoardItem(data.findBoard);
            setSearchResult(result[0]);
            setValue('title', result[0].title);
            setValue('text', result[0].text);
            setAltLoading(false);

        } catch (error) {
            console.error('Error finding board item:', error);
            setAltLoading(false);
        }
    }

    const handleDelete = async () => {
        setLoading(true);
        try {
            await deleteBoardItem(searchResult._id);
            setSearchResult(null);
            toast.success("המודעה נמחקה בהצלחה")
            setLoading(false);


        } catch (error) {
            console.error(`Error deleting board item:`, error);
            toast.error(" משהו השתבש יש לנסות שוב ")
            setLoading(false);
        }
    }

    return (
        <div className="admin-delete-board-container w-[80%] h-auto pt-3 flex flex-col items-center justify-center gap-6">

            <div className="admin-delete-board-box h-auto w-full flex flex-col items-center justify-center gap-6">
                <h2 className='text-[2.5rem] pt-[6vh]'>מחיקת מודעות</h2>

                <form onSubmit={handleSubmit(handleSearch)} className='w-3/5 flex items-center justify-center gap-4'>

                    <input type="text" className='form-control' name="findBoard"
                        id="findBoard" placeholder='מצא מודעה לפי הכותרת או הטקסט'
                        {...register("findBoard", { required: true })} />

                    {errors.findBoard && <span className='form-text text-red'>המודעה לא נימצאה</span>}

                    <button type="submit" className="btn btn-primary">חפש</button>
                </form>

                {altLoading ? (

                    <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                ) :
                    null}
                {searchResult && (
                    <div className='w-full flex flex-col items-center justify-center gap-4 mt-4'>
                        <div className='card w-3/5 max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
                            <img src={`http://localhost:5000/images/${searchResult.image}`}
                                className="card-img-top" alt="The image was not found" />
                            <div className="card-body">
                                <h5 className="card-title">{searchResult.title}</h5>
                                <p className="card-text">{searchResult.text}</p>
                            </div>
                        </div>
                        <button className='btn btn-danger mt-4' onClick={handleDelete}>מחק</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDeleteBoard;
