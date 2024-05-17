import React from 'react'
import ContactCards from '../components/contactComponents/ContactCards'
import ContactMap from '../components/contactComponents/ContactMap'

function Contact() {
    return (
        <>
            <main>
                <div className='contact-page-header h-[10vh] w-full flex items-center text-[2rem] p-[4vw]'>
                    <h1>צור קשר</h1>
                </div>

                <ContactCards />
                <ContactMap />
            </main>

        </>
    )
}

export default Contact