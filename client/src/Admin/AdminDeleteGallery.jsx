import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { AppContext } from '../Context/AppContext';
import { allGalleryImages } from "../utils/galleryCloudinary"



function AdminDeleteGallery() {

    const [selectedImage, setSelectedImage] = useState([]);

    const { galleryImages, altLoading, setAltLoading } = useContext(AppContext)

    const fetchGalleryImages = async () => {
        setAltLoading(true);
        try {
            const res = await allGalleryImages();
            console.log(res)
            setSelectedImage(res.data.galleryImage);
            setAltLoading(false);
        } catch (error) {
            console.error('Error fetching gallery images', error);
            setAltLoading(false);
            toast.error("משהו הישתבש יש לנסות שוב!")
        }
    };

    useEffect(() => {
        fetchGalleryImages();
    }, [galleryImages]);

    const handleDelete = async (public_id) => {

        const confirmDelete = window.confirm('Are you sure you want to delete this image?');

        if (confirmDelete) {
            setAltLoading(true);
            try {
                await axios.delete('https://harish-school.onrender.com/api/gallery/deleteImage', { data: { public_id } });
                setSelectedImage((prev) => prev.filter((img) => img !== public_id));
                toast.success("התמונה נמחקה בהצלחה")
                setAltLoading(false);

            } catch (error) {
                console.error('Error deleting image', error);
                toast.error("משהו הישתבש יש לנסות שוב!")
                setAltLoading(false);
            }
        }
    };

    return (
        <>
            <div className="admin-gallery-delete-container w-full h-full flex flex-col items-center justify-center">

                <div className="admin-gallery-delete-box w-full h-full flex flex-wrap items-center justify-evenly p-[2%]">

                    {selectedImage.map((image) => (

                        <div key={image} className="admin-gallery-delete-item flex flex-col items-center justify-center gap-[1vh] p-[1%]">

                            <img src={image} alt="Gallery" className="w-34 h-48 object-cover  rounded-[16px]" />
                            {altLoading ?
                                (
                                    <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                                ) : (
                                    <button className="btn btn-danger mt-2" onClick={() => handleDelete(image)}>Delete</button>
                                )}

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AdminDeleteGallery