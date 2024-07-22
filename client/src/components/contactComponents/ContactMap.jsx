import React, { useContext, useEffect } from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { ColorRing } from 'react-loader-spinner'
import { AppContext } from "../../Context/AppContext"


function ContactMap() {

    const { altLoading, setAltLoading } = useContext(AppContext)

    const position = { lat: 32.46111061415389, lng: 35.056647228835715 };

    useEffect(() => {
        if (!altLoading)
            setAltLoading(true)
    }, [])

    const mapLoading = () => {
        setAltLoading(false)
    }

    return (
        <>
            {altLoading ? (
                <ColorRing
                    visible={true} height="500" width="500" ariaLabel="blocks-loading"
                    wrapperStyle={{ height: '25%', width: '25%', margin: 'auto' }}
                    wrapperClass="w-full h-[40vh] flex justify-center items-center max-sm:h-[50vh]"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            ) : (
                <div className='contact-map-container w-full flex items-center mt-[15vh] mb-[10vh] p-[1%] max-sm:mt-[10vh] '>
                    <div className='contact-map-box w-[90%] h-[40vh] m-auto max-sm:h-[50vh] '>
                        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
                            onLoad={mapLoading}>

                            <Map
                                style={{ width: '100%', height: '100%' }}
                                defaultCenter={position}
                                defaultZoom={14}
                                mapId={import.meta.env.VITE_GOOGLE_MAP_CLIENT_ID}

                            >
                                <AdvancedMarker
                                    position={position}
                                    title='My Marker'
                                    mapPaneName='markerLayer'
                                    clickable={true} />
                            </Map>
                        </APIProvider>
                    </div>
                </div>
            )}

        </>

    )
}
export default ContactMap
