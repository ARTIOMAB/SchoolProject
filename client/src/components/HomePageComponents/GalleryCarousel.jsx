import React from 'react'
import { useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { ColorRing } from "react-loader-spinner"
import 'bootstrap/dist/css/bootstrap.css';
import { AppContext } from '../../Context/AppContext';
import { allGalleryImages } from '../../utils/galleryCloudinary'

function GalleryCarousel() {
    const { galleryImages, setGalleryImages, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        const getImages = async () => {
            setLoading(true)
            try {
                const res = await allGalleryImages()
                setGalleryImages(res.data.galleryImage)
                setLoading(false)
            } catch (error) {
                console.error("Axios Error" + error)
                setLoading(false)
            }
        }
        getImages()
    }, [])


    const carouselImages = () => {
        return galleryImages.map((src, index) => (
            <Carousel.Item key={index}>
                <img
                    className="d-block h-[80vh] w-full object-fit-cover max-sm:rounded-[16px]"
                    src={src}
                    alt={`Slide ${index + 1}`}
                />
            </Carousel.Item>
        ))
    }
    return (
        <>
            {loading ? (
                <ColorRing
                    visible={true} height="500" width="500" ariaLabel="blocks-loading"
                    wrapperStyle={{ height: '25%', width: '25%', margin: 'auto' }}
                    wrapperClass="w-full h-[40vh] flex justify-center items-center"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            ) : (
                <Carousel data-bs-theme="dark" className='p-[5vw] px-[4vw] max-sm:rounded-[16px]'>
                    {carouselImages()}
                </Carousel>)}
        </>
    )
}

export default GalleryCarousel
