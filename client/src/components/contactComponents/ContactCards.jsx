import React from 'react'
import phoneIcon from "../../assets/phone.svg"
import emailIcon from "../../assets/email.svg"
import locationIcon from "../../assets/location.svg"

function ContactCards() {
    return (
        <>
            <div className='contact-card-container h-full w-full flex items-center justify-center'>
                <div className='contact-card-box w-[90%]'>
                    <div className="row">
                        <div className="col p-[2%]">
                            <div className="card div bg-cardsColor">
                                <div className='card-body h-[20vh] flex flex-col items-center justify-center gap-[2vh]'>
                                    <img
                                        className='phone-icon-image w-[25px] h-[25px]'
                                        src={phoneIcon}
                                        alt="The image was not found" />
                                    <p className='font-bold'>לימור: <a href="tel:0542329875">0542329875 </a></p>

                                </div>
                            </div>
                        </div>

                        <div className="col p-[2%]">
                            <div className="card div bg-cardsColor">
                                <div className='card-body h-[20vh] flex flex-col items-center justify-center gap-[2vh]'>
                                    <img
                                        className='email-icon-image w-[25px] h-[25px]'
                                        src={emailIcon}
                                        alt="The image was not found" />
                                    <p className='font-bold'><a href="mailto:giftedharish@gmail.com">giftedharish@gmail.com</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col p-[2%]">
                            <div className="card div bg-cardsColor">
                                <div className='card-body h-[20vh] flex flex-col items-center justify-center gap-[2vh]'>
                                    <img
                                        className='email-icon-image w-[25px] h-[25px]'
                                        src={locationIcon}
                                        alt="The image was not found" />

                                    <a
                                        target='_blank'
                                        href="https://www.google.com/maps/place/%D7%94%D7%AA%D7%97%D7%93%D7%A9%D7%95%D7%AA+8,+Harish%E2%80%AD/@32.4609703,35.0566365,17z/data=!3m1!4b1!4m6!3m5!1s0x151d0575ecdc2ae7:0x18042a1afea24e1b!8m2!3d32.4609703!4d35.0566365!16s%2Fg%2F11spdcfb7n?entry=ttu">
                                        התחדשות 8 חריש
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCards