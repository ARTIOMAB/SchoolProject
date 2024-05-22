import React from 'react'
import { APIProvider, Map, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';

function ContactMap() {
    const position = { lat: 32.46111061415389, lng: 35.056647228835715 };
    return (
        <>
            <div className='contact-map-container w-full flex items-center mt-[5vh] mb-[3vh] p-[1%]'>
                <div className='contact-map-box w-[90%] h-[40vh] m-auto'>
                    <APIProvider apiKey={"AIzaSyCr0U8Watrghgt2vVW46XwWddD2F3jDS-Y"}>
                        <Map
                            style={{ width: '100%', height: '100%' }}
                            center={position}
                            zoom={15}>
                            <Marker position={position} />
                        </Map>
                    </APIProvider>
                </div>
            </div>
        </>

    )
}

export default ContactMap
