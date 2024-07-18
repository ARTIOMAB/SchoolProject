import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { ColorRing } from 'react-loader-spinner';
import { toast } from "react-toastify";
import { AppContext } from "../Context/AppContext";
import AdminDeleteProgram from './AdminDeleteProgram';


function AdminProgram() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { setProgramA, setProgramB, loading, setLoading } = useContext(AppContext);

    axios.defaults.withCredentials = true;

    const onSubmit = async (data) => {

        try {
            setLoading(true);
            const result = await axios.post("http://localhost:5000/api/program/createProgram", {
                programType: data.programType,
                title: data.title,
                date: data.date,
            });

            if (data.programType === "programA") {
                setProgramA((prev) => [...prev, result.data]);
                setLoading(false);
            } else {
                setProgramB((prev) => [...prev, result.data]);
                setLoading(false);
            }
            toast.success("התוכנית נוצרה בהצלחה");
            setLoading(false);
            reset();

        } catch (error) {
            setLoading(false);
            console.error("Axios error" + error);
            toast.error("משהו השתבש יש לנסות שוב");
        }
    };

    return (
        <>
            <div className="admin-program-container w-full h-full py-[2%] flex flex-col items-center justify-start gap-[10vh]">

                <div className="admin-program-form-card h-[60vh] w-full flex flex-col items-center justify-center">
                    <h2 className="text-[2.5rem] self-center py-[2%]">פרטי תוכנית</h2>

                    <form
                        className='admin-programs-form w-[70%] h-full flex flex-col items-center justify-center gap-[6vh] max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='admin-program-form-input h-full w-full flex flex-col items-center justify-center gap-[3vh]'>

                            <div className=' h-[20%] w-full flex justify-around items-center'>
                                <label className='text-[1.3rem] w-[20%]'>בחר תוכנית</label>
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

                            <div className=' h-[20%] w-full flex justify-around items-center'>
                                <label className='text-[1.3rem] w-[20%]'>כותרת</label>
                                <input
                                    className='form-control w-[70%]'
                                    type="text"
                                    id='title'
                                    {...register("title", { required: true })}
                                />
                                {errors.title && <small className="form-text text-red text-[1rem]">ערך חובה!</small>}
                            </div>

                            <div className=' h-[20%] w-full flex justify-around items-center'>
                                <label className='text-[1.3rem] w-[20%]'>תאריך</label>
                                <input
                                    className='form-control w-[70%]'
                                    type="date"
                                    id='date'
                                    {...register("date", { required: true })}
                                />
                                {errors.date && <small className="form-text text-red text-[1rem]">ערך חובה!</small>}
                            </div>
                        </div>

                        {loading ? (
                            <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />

                        ) : (
                            <div className='admin-program-form-button w-[30%] h-[10%] flex items-start justify-center'>

                                <button className="btn btn-primary w-full" type="submit">שלח</button>
                            </div>
                        )}

                    </form>
                </div>
                <AdminDeleteProgram />
            </div>
        </>
    );
}

export default AdminProgram;
