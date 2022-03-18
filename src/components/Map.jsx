import React from 'react';

import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';


import config from '../config/index';



const Map = ( {address}) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: config.MAPS_GOOGLE,
      })
    
    const [map, setMap] = React.useState(null)

    const containerStyle = {
        width: '1080px',
        height: '800px'
      };
      const center = {
        lat: address.lat,
        lng: address.lng 
      };
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    return isLoaded ? (
        <div>
           
            <GoogleMap center={center} zoom= {17} mapContainerStyle={containerStyle} onLoad={onLoad} onUnmount={onUnmount} > 
                <Marker position={center} />
            </GoogleMap>
       
        </div>
    ): <></>
}

export default Map;