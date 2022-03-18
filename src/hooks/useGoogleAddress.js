import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../config/index';
const useGoogleAddress = location => {
    const [map, setMap] = useState('');
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${config.MAPS_GOOGLE}`;
    
    useEffect( async () => {
        const request = await axios.get(API);
        
        setMap(request.data.results[0].geometry.location);
    }, []);

    
    return map;



}

export default useGoogleAddress;