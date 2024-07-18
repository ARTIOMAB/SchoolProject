import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { login } from "../utils/authService"
import { AppContext } from '../Context/AppContext'
import BackGround from "../assets/BackGround.svg"


function AdminLogin() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const navigate = useNavigate()

    const { setLoggedIn, setAdminData, loggedIn } = useContext(AppContext)

    const onSubmit = async (data) => {
        try {
            const res = await login(data)
            console.log(res.data)
            setAdminData(res.data)
            setLoggedIn(true)
            toast.success("התחברת בהצלחה")
            localStorage.setItem("loggedIn", "true")
            navigate("/admin")
        } catch (error) {
            console.log(error)
            toast.error("משהו השתבש יש לנסות שוב")
        }
        reset()
    }

    useEffect(() => {
        console.log(loggedIn)
    }, [setLoggedIn])


    return (
        <>
            <main>
                <div className="login-box h-screen w-full flex flex-col items-center justify-center py-8">
                    <div className="login-container w-full h-full flex flex-col items-center justify-center pt-[25vh] max-sm:pt-[10vh]">

                        <div className='absolute top-0 right-0'>
                            <img src={BackGround} alt="The image was not found!"
                                className='relative h-[70vh] top-0 right-0 object-cover mt-[-5px] opacity-[0.9]' />
                        </div>

                        <div className='login-form w-[60%] h-full py-[5%] px-[3%] bg-glassBg rounded-[16px] shadow-glass backdrop-filter backdrop-blur-3.1 z-1 max-sm:w-[95%] max-md:w-[95%] max-lg:w-[95%]' >
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='w-full h-full flex flex-col items-center justify-center gap-[2%]'>

                                <div className="form-group h-[10vh] w-full flex flex-row justify-center items-center max-sm:flex-wrap">
                                    <label className='text-[1.2rem] w-[30%] max-sm:w-[40%]' >שם משתמש:</label>
                                    <input type="text" className="form-control w-[50%]" id="userName"
                                        aria-describedby="userNameHelp" placeholder="הכנס שם משתמש"
                                        {...register("userName", { required: true, minLength: 4 })} />

                                </div>
                                {errors.userName && <small id="emailHelp" className="form-text text-red">ערך חובה.</small>}


                                <div className="form-group h-[10vh] w-full flex flex-row justify-center items-center pb-[3%]">
                                    <label className='text-[1.2rem] w-[30%] pl-[6%] max-sm:w-[40%] ' >סיסמה:</label>
                                    <input type="password" className="form-control w-[50%]" id="password"
                                        aria-describedby="passwordHelp" placeholder="הכנס סיסמה"
                                        {...register("password", { required: true, minLength: 4 })} />
                                </div>
                                {errors.password && <small id="passwordHelp" className="form-text text-red">ערך חובה.</small>}

                                <button type="submit" className="btn btn-primary">היכנס</button>
                            </form>
                        </div>

                    </div>

                </div>
            </main>
        </>

    )
}

export default AdminLogin