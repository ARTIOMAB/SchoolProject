import React from 'react'
import GalleryCarousel from '../components/HomePageComponents/GalleryCarousel'
import Board from '../components/HomePageComponents/Board'
import Programs from '../components/HomePageComponents/Programs'
import BackGround from "../assets/BackGround.svg"

function HomePage() {
    return (
        <>
            <main>
                <section className='first-homePage-section h-screen w-full flex items-center'>
                    <div className='home-page-container w-full flex items-center justify-center gap-[6vw] p-[3%] text-right mt-[10vh] max-sm:p-[5%]'>
                        <div className='home-page-box w-full h-auto'>
                            <div className='absolute top-0 right-0'>
                                <img src={BackGround} alt="The image was not found!"
                                    className='relative h-[80vh] top-0 right-0 object-cover mt-[-5px] opacity-[0.9] max-sm:h-[40vh] max-lg:h-[60vh] max-xl:h-[70vh]' />
                            </div>

                            <div className='content-home-page h-full w-1/2 mr-[45%] relative max-sm:w-full max-sm:mr-0 max-lg:mr-[35%] max-lg:w-[60%]'>
                                <h2 className='homePage heading text-[3.5rem] text-mainText max-sm:text-[3rem] max-lg:text-[4rem] max-xl:text-[4.2rem]'>מרכז מחוננים ומצטיינים </h2>
                                <p className='home-page-paragraph text-contentText p-[2%] max-sm:text-[1.2rem] max-lg:text-[1.4rem] max-xl:text-[1.7rem]'>מרכז מחוננים ומצטיינים בחריש הינו בית ספר על- אזורי ייחודי המפעיל תוכניות העשרה למחוננים ומצטיינים מאזורינו זו השנה הראשונה.
                                    זהו מרכז המחוננים ה-61 שהוקם במדינת ישראל.
                                    התלמידים מגיעים לבית ספרנו במהלך שנת הלימודים ונחשפים למגוון של תוכניות לימוד, והתנסויות חקר בתחומי המדע, הטכנולוגיה, האמנויות והחברה.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='h-full w-full'>
                    <Board />
                </section>
                <hr />
                <section>
                    <GalleryCarousel />
                </section>
                <hr />
                <section>
                    <Programs />
                </section>
                <hr />
            </main>
        </>
    )
}

export default HomePage