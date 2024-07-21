import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { ColorRing } from 'react-loader-spinner';
import { AppContext } from "../Context/AppContext";

function AdminDeleteProgram() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { altLoading, setAltLoading } = useContext(AppContext);

    axios.defaults.withCredentials = true;

    const onSubmit = async (data) => {
        try {
            setAltLoading(true);
            if (data.deleteType === "all") {
                await axios.delete(`https://harish-school.onrender.com/api/program/deleteAllProgramsByType/${data.programType}`);
                toast.success("כל התוכניות נמחקו בהצלחה");
            } else if (data.deleteType === "last") {
                await axios.delete(`https://harish-school.onrender.com/api/program/deleteLastProgramByType/${data.programType}`);
                toast.success("התוכנית האחרונה נמחקה בהצלחה");
            }
            setAltLoading(false);
            reset();
        } catch (error) {
            setAltLoading(false);
            console.error("Axios error" + error);
            toast.error("משהו השתבש יש לנסות שוב");
        }
    };

    return (
        <div className="admin-delete-program-container w-full h-full py-[3%] mt-[10vh] flex flex-col items-center justify-start grow">

            <h2 className="text-[2.5rem] self-center">מחיקת תוכנית</h2>

            <div className="admin-delete-program-form-card h-[50vh] w-full flex flex-col items-center justify-center">

                <form
                    className='admin-delete-program-form w-[70%] h-full flex flex-col items-center justify-center gap-[6vh] max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className='admin-delete-program-form-input h-full w-full flex flex-col items-center justify-center gap-[2vh]'>

                        <div className=' h-[20%] w-full flex justify-around items-center text-[1.3rem]'>
                            <label className='text-[1.3rem]'>בחר תוכנית</label>
                            <select
                                className="form-select w-[70%]"
                                id="programType"
                                {...register("programType", { required: true })}
                            >
                                <option value="">בחר תוכנית</option>
                                <option value="programA">מחוננים</option>
                                <option value="programB">מצטיינים</option>
                            </select>
                            {errors.programType && <small className="form-text text-red text-[1rem]">ערך חובה!</small>}
                        </div>

                        <div className=' h-[20%] w-full flex justify-around items-center text-[1.3rem]'>
                            <label className='text-[1.3rem]'>סוג מחיקה</label>
                            <select
                                className="form-select w-[70%]"
                                id="deleteType"
                                {...register("deleteType", { required: true })}
                            >
                                <option value="">בחר סוג מחיקה</option>
                                <option value="all">כל התוכנית</option>
                                <option value="last">תאריך אחרון שהוזן</option>
                            </select>
                            {errors.deleteType && <small className="form-text text-red text-[1rem]">ערך חובה!</small>}
                        </div>

                    </div>

                    {altLoading ? (
                        <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                    ) : (
                        <div className='admin-delete-program-form-button w-[30%] h-[10%] flex items-start justify-center'>
                            <button className="btn btn-primary w-full" type="submit">מחק</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default AdminDeleteProgram;
