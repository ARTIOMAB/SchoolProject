import React from 'react'
import GalleryCarousel from '../components/GalleryCarousel'
import Board from '../components/Board'
import Programs from '../components/Programs'
import HomePageImage from "../assets/homePageImage.svg"

function HomePage() {
    return (
        <>
            <main>
                <section className='first-homePage-section'>
                    <div className='home-page-container flex items-center justify-center gap-[6vw] p-[3%]'>
                        <div className="homePage-image">
                            <img src={HomePageImage} alt="The image was not found" className='w-[20vw] h-full cover' />
                        </div>
                        <div className='content-home-page h-full w-1/2'>
                            <h2 className='homePage heading text-[3rem] text-mainText'>מרכז מו"ח- מרכז המחוננים והמצטיינים </h2>
                            <p className='home-page-paragrhap text-[1rem] text-contentText p-[2%]'>מרכז המחוננים והמצטיינים בחריש הינו בית ספר על- אזורי ייחודי המפעיל תוכניות העשרה למחוננים ומצטיינים מאזורינו זו השנה הראשונה.
                                זהו מרכז המחוננים ה-61 שהוקם במדינת ישראל.
                                התלמידים מגיעים לבית ספרנו במהלך שנת הלימודים ונחשפים למגוון של תוכניות לימוד, והתנסויות חקר בתחומי המדע, הטכנולוגיה, האמנויות והחברה.
                            </p>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='p-[6vw]'>
                    <Board />
                </section>
                <hr />
                <section>
                    <GalleryCarousel />
                </section>
                <hr />
                <section className='p-[6vw]'>
                    <Programs />
                </section>
                <hr />
            </main>
        </>
    )
}

export default HomePage