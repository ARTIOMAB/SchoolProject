import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { ColorRing } from 'react-loader-spinner';
import { AppContext } from '../Context/AppContext';
import { findBoardItem, updatedBoardItem } from "../utils/boardService";

function AdminEditBoard() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [searchEditResult, setEditSearchResult] = useState(null);

    const { setBoardItem, loading, setLoading, altLoading, setAltLoading, } = useContext(AppContext);

    const handleSearch = async (data) => {
        setLoading(true);
        try {
            const result = await findBoardItem(data.findBoard);
            setEditSearchResult(result[0]);
            setValue('title', result[0].title);
            setValue('text', result[0].text);
            setLoading(false)

        } catch (error) {
            console.error('Error finding board item:', error);
            setLoading(false);
        }
    }

    const handleUpdate = async (data) => {
        setAltLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('text', data.text);
            if (data.image && data.image[0]) {
                formData.append('image', data.image[0]);
            }

            const updatedItem = await updatedBoardItem(searchEditResult._id, formData);
            setBoardItem((prevItems) => prevItems.map((item) => (item._id === updatedItem._id ? updatedItem : item)));
            setAltLoading(false);
            toast.success("המודעה שונתה בהצלחה")
        } catch (error) {
            console.error(`Error updating board item:`, error);
            setAltLoading(false);
            toast.error("משהו השתבש יש לנסות שוב")
        }
    }

    return (
        <div className="admin-edit-container w-full h-auto pt-3 flex flex-col items-center justify-center gap-6 flex-shrink">

            <div className="admin-edit-header text-[2.5rem] h-[10%] flex items-center justify-center">
                <h2>עריכת מודעות</h2>
            </div>

            <div className="admin-edit-box w-[80%] flex flex-col items-center justify-center max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full">

                <form onSubmit={handleSubmit(handleSearch)}
                    className='search-form w-3/5 flex items-center justify-center gap-4'>

                    <input type="text" className='form-control' name="findBoard" id="findBoard"
                        placeholder='מצא מודעה לפי הכותרת או הטקסט'
                        {...register("findBoard", { required: true })} />

                    {errors.findBoard && <span className='form-text text-red'>המודעה לא נימצאה</span>}

                    {loading ? (
                        <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                    ) : (
                        <button className="btn btn-primary">חפש</button>

                    )}

                </form>
                {searchEditResult && (

                    <form onSubmit={handleSubmit(handleUpdate)}
                        className='edit-board-form w-full flex flex-col items-center justify-center py-[4%] gap-[2vh] text-[1.2rem]'>

                        <div className="w-[60%] flex items-center justify-between gap-[2vw]">
                            <label className='admin-title-update-label' htmlFor='title'>כותרת</label>
                            <input type="text" className='form-control' id='title' name='title' {...register("title", { required: true })} />
                            {errors.title && <span className='form-text text-red'>ערך חובה</span>}
                        </div>

                        <div className="w-[60%] flex items-center justify-between gap-[2vw]">
                            <label className='admin-text-update-label' htmlFor='text'>טקסט</label>
                            <input type="text" className='form-control' id='text' name='text' {...register("text", { required: true })} />
                            {errors.text && <span className='form-text text-red'>ערך חובה</span>}

                        </div>

                        <div className="w-[60%] flex items-center justify-between gap-[2vw]">
                            <label className='admin-image-update-label' htmlFor='image'>תמונה</label>
                            <input type="file" className='form-control' id='image' name='image' {...register("image")} />
                        </div>

                        {altLoading ? (
                            <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                        ) : (
                            <button type='submit' className='btn btn-primary'>עדכן</button>

                        )}

                    </form>
                )}
            </div>
        </div>
    );
}

export default AdminEditBoard;
