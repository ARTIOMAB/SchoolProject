import React from 'react'
import ContactCards from '../components/contactComponents/ContactCards'
import ContactMap from '../components/contactComponents/ContactMap'
import ContactForm from '../components/contactComponents/ContactForm'
import AboutImage from "../assets/aboutImage.svg"


function Contact() {
    return (
        <>
            <main className='w-full h-full'>
                <div className='about-image absolute top-0 right-0'>
                    <img src={AboutImage} alt="The image was not found"
                        className='relative h-[52vh] w-full object-cover opacity-[0.9] max-sm:h-[20vh] max-md:h-[30vh] max-lg:h-[30vh] max-xl:h-[30vh]' />
                </div>

                <div className='contact-page-header h-[10vh] w-full flex items-center justify-center text-[2.5rem] p-[4vw] mt-[40vh] max-sm:mt-[10vh] max-md:mt-[20vh] max-lg:mt-[20vh] max-xl:mt-[20vh]'>
                    <h1>צור קשר</h1>
                </div>
                <ContactCards />
                <ContactMap />
                <ContactForm />
            </main>

        </>
    )
}

export default Contact