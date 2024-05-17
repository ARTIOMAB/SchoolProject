import React from 'react'
import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { AppContext } from '../Context/AppContext';

function GalleryCarousel() {
    const { galleryImages } = useContext(AppContext)
    console.log(galleryImages)
    const carouselImages = () => {
        return galleryImages.map((src, index) => (
            <Carousel.Item key={index}>
                <img
                    className="d-block h-[70vh] w-full object-fit-cover"
                    src={src}
                    alt={`Slide ${index + 1}`}
                />
                {/* <Carousel.Caption>
                    <h5>{`Slide ${index + 1} label`}</h5>
                    <p>{`Slide ${index + 1} content`}</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        ))
    }
    return (
        <>
            <Carousel data-bs-theme="dark" className='p-[3%]'>
                {carouselImages()}
            </Carousel>

        </>
    )
}

export default GalleryCarousel