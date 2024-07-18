import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../Context/AppContext"
import { ColorRing } from "react-loader-spinner"

function ContactForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const form = useRef();

    const { loading, setLoading } = useContext(AppContext)

    const emailjsServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
    const emailjsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
    const emailjsTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_CONTACT

    const onSubmit = (data) => {
        if (data) {

            setLoading(true)
        } else {
            setLoading(false)
        }
        console.log(data)

        emailjs
            .sendForm(emailjsServiceId, emailjsTemplateId, form.current, {
                publicKey: emailjsPublicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("נשלח בהצלחה")
                    reset()
                    setLoading(false)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false)
                },
            );
    }
    return (
        <>
            <div className='contact-form-container mt-[7vh] mb-[12vh] p-[1%] flex flex-col items-center'>
                <div className='contact-form-box w-[60%] h-[70vh] bg-cardsColor text-[1.2rem] flex items-center justify-center rounded-[20px] max-sm:w-[95%] max-sm:h-[70vh] max-sm:p-[2%] max-md:w-[80%] max-lg:w-[80%]'>
                    <form
                        ref={form}
                        className='flex flex-col items-center gap-[3vh] w-[85%] max-sm:w-[95%]'
                        onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[30%] sm:w-[20%]'>שם מלא:&nbsp;</label>
                            <input type="text" className="form-control w-[70%] sm:w-[80%]" name='fullName'
                                id="fullName" aria-describedby="fullNameHelp" autoComplete='off'
                                {...register("fullName", { required: true })} />
                            {errors.fullName && <small id="fullNameHelp" className="text-red">שם מלא הוא ערך חובה!</small>}
                        </div>

                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[30%] sm:w-[20%]'>מספר טלפון:&nbsp;</label>
                            <input type="number" className="form-control w-[70%] sm:w-[80%]" id="phone" name='phone'
                                aria-describedby="phoneHelp" autoComplete='off'
                                {...register("phone", { required: true })} />
                            {errors.phone && <small id="phoneHelp" className="text-red">פאלפון הוא ערך חובה!</small>}
                        </div>

                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[30%] sm:w-[20%]'>דוא"ל:&nbsp;</label>
                            <input type="email" className="form-control w-[70%] sm:w-[80%]" id="email" name='email'
                                aria-describedby="emailHelp" autoComplete='off'
                                {...register("email", { required: true })} />
                            {errors.email && <small id="emailHelp" className="text-red">אימייל הוא ערך חובה!</small>}
                        </div>

                        <div className="form-group flex flex-col w-full">
                            <label className='self-start p-[1%]'>איך אפשר לעזור ?&nbsp;&nbsp;</label>
                            <textarea type="text" className="form-control w-full" id="message" name='message'
                                {...register("message", { required: true })} />
                        </div>
                        {loading ? (
                            <ColorRing
                                visible={true} height="500" width="500" ariaLabel="blocks-loading"
                                wrapperStyle={{ height: '5%', width: '25%', margin: 'auto' }}
                                wrapperClass="w-full h-[40vh] flex justify-center items-center"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        ) : (
                            <button type='submit' value="Send" className='btn btn-primary w-[20%]'>שלח</button>
                        )}
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactForm