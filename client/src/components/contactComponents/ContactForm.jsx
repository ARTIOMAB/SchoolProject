import React from 'react'
import { useForm } from 'react-hook-form'

function ContactForm() {
    const { register, handleSubmit } = useForm()
    return (
        <>
            <div className='contact-form-container mt-[4vh] mb-[4vh] p-[1%] flex flex-col items-center'>
                <div className='contact-form-box w-[70%] gap-[5vh]'>
                    <form className='flex flex-col items-center gap-[4vh]'>
                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[20%]'>שם מלא:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>

                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[20%]'>מספר טלפון:</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>

                        <div className="form-group flex items-center justify-center w-full">
                            <label className='w-[20%]'>דוא"ל:</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group  w-full">
                            <label className='flex self-start p-[1%]'>איך אפשר לעזור ?</label>
                            <textarea type="email" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Enter email" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <button type='submit' className='btn btn-primary w-[10%]'>שלח</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm