import React from 'react'
import AboutImage from "../assets/aboutImage.svg"

function About() {
    return (
        <>
            <main className='w-full h-full'>
                <div className='about-container w-full h-full flex flex-col items-center justify-center'>

                    <div className='about-image absolute top-0 right-0'>
                        <img src={AboutImage} alt="The image was not found"
                            className='relative h-[55vh] object-cover opacity-[0.9] max-sm:h-[20vh]  max-lg:h-[30vh] max-xl:h-[30vh]' />
                    </div>
                    <div className='about-header w-full h-full  flex justify-center items-center text-[2.5rem] mt-[40vh] pt-[5%] max-sm:mt-[10vh] max-sm:py-[5%] max-lg:mt-[20vh] max-xl:mt-[15vh]'>
                        <h2>אודות מרכז מו"ח</h2>
                    </div>


                    <div className='about-box w-[80%] p-[3%]  text-right max-sm:w-[95%] max-md:w-[90%]  max-lg:w-[90%]  max-xl:w-[90%]'>
                        <div className='about-fist-paragraph bg-cardsColor p-[4%] rounded-[16px] text-[1.2rem] max-sm:text-[1.4rem] max-md:text-[1.4rem] max-lg:text-[1.6rem] max-xl:text-[2rem]'>
                            <p> מרכז המחוננים והמצטיינים בחריש הינו בית ספר על- אזורי ייחודי המפעיל תוכניות העשרה למחוננים ומצטיינים מאזורינו זו השנה הראשונה.
                            </p>
                            <p>
                                זהו מרכז המחוננים ה-61 שהוקם במדינת ישראל.
                                התלמידים מגיעים לבית ספרנו במהלך שנת הלימודים ונחשפים למגוון של תוכניות לימוד, והתנסויות חקר בתחומי המדע, הטכנולוגיה, האמנויות והחברה.

                            </p>
                            <br />

                            <p className='text-[1.4rem] font-bold py-8 max-xl:text-[2rem]'>בית הספר מפעיל כיום תכניות עבור:</p>

                            <ul>
                                <li>א.	תלמידים מחוננים שאותרו באמצעות מבחני איתור של משרד החינוך. תכנית המחוננים מתקיימת בשעות הבוקר.</li>
                                <br />
                                <li>ב.	 תוכניות העשרה לתלמידים מצטיינים מחריש והאזור, בתחומי מדע, פיתוח החשיבה והטכנולוגיה. תכנית זו מתקיימת בשעות אחר הצהריים.</li>
                                <br />
                                <li>                ג.	החל משנת הלימודים תשפ"ה אנו שואפים להקים תכנית המיועדת לתלמידים מצטיינים שהומלצו כתלמידים מצטיינים על ידי בתי הספר היסודיים בחריש.</li>
                            </ul>

                            <br />
                            <p>
                                אנו מאמינים כי תלמידנו יעמדו ביום מן הימים בחזית החברה, המחקר והעשייה הטכנולוגית ויהיו חוד החנית לקידום ופיתוח התעשייה, המחקר, המדע והחברה בישראל. לבית ספרנו, ניתנה הזכות להובילם קדימה, לאתגר אותם ולספק להם את הכלים לפיתוח החשיבה, היצירתיות וההתפתחות האישית.
                                אנו רואים בכל אחד ואחת מהם אתגר אינטלקטואלי משמעותי שיש לאפשר לסקרנותו לפרוץ קדימה, שיש לאתגר ולכוון, לצד מתן תמיכה וחיזוק רגשיים וחברתיים.
                                בנוסף לפעילות זו, שואף בית הספר  ליצור לאורך השנה, מפגשי ילדים הורים מכלל הקהילה סביב נושאי דיון משותפים, הרצאות ערב וסדנאות בתחומי המדע, האמנות והחברה.
                            </p>
                            <br />
                            <p>
                                מפגשים אלו מטרתם להפגיש ילדים והורים יחד להנאה ולמידה משותפים ומגוונים.
                                שמנו לפנינו מטרה להפוך את המרכז לבית של מצוינות, לתת מענה למגוון רחב של צרכים בתחום: הרצאות למבוגרים, העשרה לילדים, פיתוח תכניות נוספות הנותנות מענה לגילאים שונים.

                                בית הספר נתמך ומופעל ע"י משרד החינוך ועיריית חריש.
                            </p>
                        </div>
                        <br />
                        <h3 className='sub-header text-[2.1rem] p-[4%]'> קבלה לביה"ס</h3>

                        <div className='second-paragrhap bg-cardsColor p-[4%] text-[1.2rem] rounded-[16px] max-sm:text-[1.4rem] max-md:text-[1.4rem] max-lg:text-[1.6rem] max-xl:text-[2rem]'>
                            <p>
                                משרד החינוך, בשיתוף מכון טלדור מבצעים מדי שנה תהליך מיון ואיתור של תלמידים מחוננים ומצטיינים בבתיה"ס השייכים לאזור הרישום של מרכזנו.
                                <br /> בהתאם לממצאי האיתור, מקבלות המשפחות הודעות על זכאותם של ילדיהם להשתתף בתוכנית ההעשרה.
                            </p>
                        </div>

                        <h3 className='sub2-header text-[2.1rem] p-[4%]'>ימי פעילות</h3>
                        <div className='last-pharagrahp bg-cardsColor p-[4%] text-[1.2rem] rounded-[16px] max-sm:text-[1.4rem] max-md:text-[1.4rem] max-lg:text-[1.6rem] max-xl:text-[2rem]'>
                            <p>
                                מרכז ההעשרה פעיל בשלב זה יומיים בשבוע:
                                יום ב' אחר הצהריים- פעילות העשרה לתלמידים מצטיינים.
                                יום ד' - פעילות העשרה לתלמידים מחוננים מכיתות ג' - ד'

                            </p>


                            <span>
                                בכל שאלה, התלבטות, בקשה, הנכם מוזמנים לפנות אלי או לצוות ביה"ס.

                            </span>
                            <br />
                            <br />
                            <span>  נשמח לראותכם מבקרים באתרנו ובביה"ס.</span>

                            <br />
                            <span>

                                לימור עופרת אוסטרובסקי
                                מנהלת מרכז מ"וח -מחוננים ומצטיינים חריש

                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About