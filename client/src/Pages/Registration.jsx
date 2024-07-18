import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner"
import RegistrationImage from "../assets/RegistrationImage.svg"
import { AppContext } from '../Context/AppContext';


function Registration() {

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm()

  const { program, selectedOption, setSelectedOption, loading, setLoading,
    currentPage, setCurrentPage, registrationData, setRegistrationData } = useContext(AppContext)

  const emailjsServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
  const emailjsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
  const emailjsTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_REGISTRATION


  useEffect(() => {
    setCurrentPage(0)
  }, [])

  const onSubmit = (data) => {
    setLoading(true)


    setRegistrationData((prevData) => [...prevData, data]);

    const emailParams = {
      program: program,
      user_email: 'giftedharish@gmail.com',
      user_name: 'Limor',
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      studentId: data.studentId,
      birthDate: data.birthDate,
      currentSchool: data.currentSchool,
      address: data.address,
      phone: data.phone,
      email: data.email,
      authority: data.authority,
      other: data.other,
      parent1Id: data.parent1Id,
      parent1Email: data.parent1Email,
      parent1FirstName: data.parent1FirstName,
      parent2Id: data.parent2Id,
      parent2Email: data.parent2Email,
      parent2FirstName: data.parent2FirstName
    };

    emailjs
      .send(emailjsServiceId, emailjsTemplateId, emailParams,
        emailjsPublicKey,
      )
      .then(
        () => {


          toast.success("נשלח בהצלחה")
          reset()
          setCurrentPage(0)
          setLoading(false)
        },
        (error) => {
          setLoading(false)
          toast.error("משהו הישתבש יש לנסות שוב")
          console.log(error)
        },
      );
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // console.log(event.target.value)
  };



  const nextPage = async () => {
    const result = await trigger();
    if (result) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
    }
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };


  return (
    <>
      <main className='w-full h-full '>

        <div className='absolute top-0 right-0 mt-[-3px]'>
          <img src={RegistrationImage} alt="The image was not found"
            className="about-image relative h-[65vh] top-0 right-0 object-cover mt-[-5px] opacity-[0.9] max-sm:h-[20vh] max-md:h-[30vh] max-lg:h-[30vh] max-xl:h-[30vh]" />
        </div>


        <div className="registration-container w-full h-full py-[7%] flex flex-col items-center justify-center mt-[60vh] mb-[10vh] max-sm:mt-[10vh] max-md:mt-[20vh] max-lg:mt-[20vh] max-xl:mt-[20vh]">

          <form onSubmit={handleSubmit(onSubmit)}
            className='registration-form w-full flex items-center justify-center max-sm:w-[90%] max-md:w-[90%] max-lg:w-[90%] '>

            {currentPage === 0 && (

              <div className="form-card1 w-full w-[50vw] h-auto bg-boardColor rounded-[20px] p-[3%] flex flex-col justify-start items-center max-sm:w-[90%] max-md:w-[90%] max-lg:w-[90%] ">

                <div className="registration-header text-[3rem] mb-4 self-start border-b-[2px] border-black">
                  <h2>רישום:</h2>
                </div>

                <h3 className="text-[2rem] mb-4 self-start pt-2">פרטי התלמיד:</h3>

                <div className="registration-inputs-box1 w-full flex flex-col items-center justify-center gap-[3vh]">

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    שם משפחה:
                    <input type="text" id="lastName" className="bg-white rounded-[5px] w-[50%]" {...register("lastName", { required: true })} />
                    {errors.lastName && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    שם פרטי:
                    <input type="text" id="firstName" className="bg-white rounded-[5px] w-[50%]" {...register("firstName", { required: true })} />
                    {errors.firstName && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    מין:
                    <select id="gender" className="bg-white rounded-[5px] w-[50%]" {...register("gender", { required: true })}>
                      <option value="">בחר מין</option>
                      <option value="נקבה">נקבה</option>
                      <option value="זכר">זכר</option>
                    </select>
                    {errors.gender && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    תעודת זהות:
                    <input type="number" id="studentId" className="bg-white rounded-[5px] w-[50%]" {...register("studentId", { required: true, minLength: 8, maxLength: 9 })} />
                    {errors.studentId && <span className="form-text text-red ml-2">ת"ז לא תקין!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    תאריך לידה:
                    <input type="date" id="birthDate" className="bg-white rounded-[5px] w-[50%]" {...register("birthDate", { required: true })} />
                    {errors.birthDate && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    בית הספר הנוכחי:
                    <input type="text" id="currentSchool" className="bg-white rounded-[5px] w-[50%] " {...register("currentSchool", { required: true })} />
                    {errors.currentSchool && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <button type="button" onClick={nextPage} className="self-center mt-4 bg-blue-500 text-white py-2 px-4 rounded">הבא</button>
                </div>
              </div>
            )}

            {currentPage === 1 && (

              <div className="form-card2 w-full w-[50vw] h-auto bg-boardColor m-auto rounded-[16px] p-[5%] flex flex-col justify-center items-center max-sm:w-[90%]">

                <div className="registration-header text-[3rem] mb-4">
                  <h2>רישום:</h2>
                </div>

                <h3 className="text-[2rem] mb-4">פרטים כללים:</h3>

                <div className="registration-inputs-box2 w-full flex flex-col items-start gap-[3vh]">

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    כתובת:
                    <input type="text" id="address" className="bg-white rounded-[5px] w-[50%]" {...register("address", { required: true })} />
                    {errors.address && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    נייד:
                    <input type="number" id="phone" className="bg-white rounded-[5px] w-[50%]" {...register("phone", { required: true, minLength: 9, maxLength: 10 })} />
                    {errors.phone && <span className="form-text text-red ml-2">מספר לא תקין!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    אימייל:
                    <input type="email" id="email" className="bg-white rounded-[5px] w-[50%]" {...register("email", { required: true, minLength: 5 })} />
                    {errors.email && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    שם הרשות:
                    <select id="authority" name="authority" className="bg-white rounded-[5px] w-[50%]" {...register("authority", { required: true })} onChange={handleChange}>
                      <option value="">בחר רשות</option>
                      <option value="חריש">חריש</option>
                      <option value="שומרון">שומרון</option>
                      <option value="אילנה">אילנה</option>
                      <option value="אחר">אחר</option>
                    </select>
                    {errors.authority && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  {selectedOption === "אחר" && (

                    <label className="w-[80%] flex justify-between items-center text-[1.2rem]">
                      אחר:
                      <input type="text" className="bg-white rounded-[5px] w-[50%]" id="other" name="other" {...register("other", { required: true })} />
                      {errors.other && <span className="form-text text-red ml-2">ערך חובה!</span>}
                    </label>
                  )}

                  <div className="w-full flex justify-between mt-4">
                    <button type="button" onClick={prevPage} className="bg-gray-500 text-white py-2 px-4 rounded">הקודם</button>
                    <button type="button" onClick={nextPage} className="bg-blue-500 text-white py-2 px-4 rounded">הבא</button>
                  </div>

                </div>
              </div>
            )}

            {currentPage === 2 && (

              <div className="form-card3 w-full w-[50vw] h-auto bg-boardColor m-auto rounded-[20px] p-[5%] flex flex-col justify-start items-center max-sm:w-[90%]">

                <div className="registration-header text-[3rem] mb-4">
                  <h2>רישום:</h2>
                </div>

                <h3 className="text-[2rem] mb-4">פרטי הורה 1:</h3>

                <div className="registration-inputs-box3 w-full flex flex-col items-start gap-[3vh]">

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    תעודת זהות:
                    <input type="number" id="parent1Id" className="bg-white rounded-[5px] w-[50%]" {...register("parent1Id", { required: true, minLength: 8, maxLength: 9 })} />
                    {errors.parent1Id && <span className="form-text text-red ml-2">ת"ז לא תקין!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    מייל:
                    <input type="email" id="parent1Email" className="bg-white rounded-[5px] w-[50%]" {...register("parent1Email", { required: true })} />
                    {errors.parent1Email && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    שם פרטי:
                    <input type="text" id="parent1FirstName" className="bg-white rounded-[5px] w-[50%]" {...register("parent1FirstName", { required: true })} />
                    {errors.parent1FirstName && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <div className="w-full flex justify-between mt-4">
                    <button type="button" onClick={prevPage} className="bg-gray-500 text-white py-2 px-4 rounded">הקודם</button>
                    <button type="button" onClick={nextPage} className="bg-blue-500 text-white py-2 px-4 rounded">הבא</button>
                  </div>

                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className="form-card4 w-full w-[50vw] h-auto bg-boardColor m-auto rounded-[20px] p-[5%] flex flex-col justify-start items-center max-sm:w-[90%]">

                <div className="registration-header text-[3rem] mb-4">
                  <h2>רישום:</h2>
                </div>

                <h3 className="text-[2rem] mb-4">פרטי הורה 2:</h3>

                <div className="registration-inputs-box4 w-full flex flex-col items-start gap-[3vh]">

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    תעודת זהות:
                    <input type="number" id="parent2Id" className="bg-white rounded-[5px] w-[50%]" {...register("parent2Id", { required: true, minLength: 8, maxLength: 9 })} />
                    {errors.parent2Id && <span className="form-text text-red ml-2">ת"ז לא תקין!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    מייל:
                    <input type="email" id="parent2Email" className="bg-white rounded-[5px] w-[50%]" {...register("parent2Email", { required: true })} />
                    {errors.parent2Email && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <label className="w-[80%] flex justify-between items-center text-[1.2rem] max-sm:w-full max-sm:flex-wrap max-md:w-full max-md:flex-wrap max-lg:w-full max-lg:flex-wrap">
                    שם פרטי:
                    <input type="text" id="parent2FirstName" className="bg-white rounded-[5px] w-[50%]" {...register("parent2FirstName", { required: true })} />
                    {errors.parent2FirstName && <span className="form-text text-red ml-2">ערך חובה!</span>}
                  </label>

                  <div className="w-full flex justify-between mt-4">
                    <button type="button" onClick={prevPage} className="bg-gray-500 text-white py-2 px-4 rounded">הקודם</button>
                    {loading ? (
                      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                    ) : (
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">שלח</button>
                    )}
                  </div>

                </div>
              </div>
            )}
          </form>
        </div>
      </main>

    </>
  );
}

export default Registration;
