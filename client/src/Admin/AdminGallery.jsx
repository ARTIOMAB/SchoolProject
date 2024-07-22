import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from "axios"
import { ColorRing } from 'react-loader-spinner'
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { AdvancedImage } from '@cloudinary/react';
import { AppContext } from '../Context/AppContext'
import AdminDeleteGallery from './AdminDeleteGallery'


function AdminGallery() {


    const { setGalleryImages, publicId, setPublicId, setLoading, loading } = useContext(AppContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUD_NAME
        }
    });


    const myImage = cld.image(publicId);
    myImage
        .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))
        .roundCorners(byRadius(16));


    const uploadImage = async (file, preset) => {
        setLoading(true);
        try {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', preset);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: data
            });

            const result = await response.json();
            setLoading(false);
            toast.success("התמונה נשמרה בהצלחה")
            setPublicId(result.public_id)
            return result.secure_url;


        } catch (error) {
            console.error("Error uploading file to cloudinary", error)
            setLoading(false)
            toast.error("משהו הישתבש יש לנסות שוב!")
        }

    };

    const onSubmit = async (data) => {
        const imageUrl = await uploadImage(data.galleryImage[0], 'unsigned_preset_gallery');
        try {
            const response = await axios.post('https://harish-school.onrender.com/api/gallery/galleryImages', { galleryImage: imageUrl });
            setGalleryImages((prev) => [...prev, imageUrl]);
            reset()
        } catch (error) {
            console.error('Error uploading image URL to server', error);
        }
    };



    return (
        <>
            <div className="admin-gallery-container w-full h-auto flex flex-col items-center justify-center flex-shrink">
                <div className="admin-galley-box w-full h-full flex flex-col items-center justify-around py-[8%]">
                    <div className='admin-gallery-title w-full h-full flex items-center justify-center text-[2.5rem] '>
                        <h2>בחירת תמונות לגלריה</h2>
                    </div>

                    <div className="admin-gallery-form w-[60%] h-full max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full">

                        <form onSubmit={handleSubmit(onSubmit)}
                            className='w-full h-full flex items-center justify-center py-[5vh] gap-[1%]' >

                            <label className='gallery-admin-input text-[1.2rem] font-bold w-[30%]'>בחר תמונה:</label>
                            <input className='form-control' type="file" name="galleryImage" id="galleryImage"
                                {...register("galleryImage", { required: true })} />
                            {errors.galleryImage && <span className='form-text text-red'>משהו השתבש יש לנסות שוב</span>}

                            <AdvancedImage cldImg={myImage} />

                            {loading ? (
                                <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                            ) : (
                                <button className='btn btn-primary' type='submit' >שלח</button>
                            )}

                        </form>

                    </div>

                </div>
                <AdminDeleteGallery />
            </div >

        </>
    )
}

export default AdminGallery