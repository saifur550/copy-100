import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] =useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='container' id='services'>
            <div className="row">
            <h4 className="fw-bolder text-primary mb-2 display-6 text-center">Featured services</h4>
            <p className="text-muted text-center py-2 ">
            SmileBuilders is equipped to handle all your dental needs,   from a regular cleaning to a full-mouth reconstruction. <br /> Learn more about some of the common services we offer at our office.
            </p>
                {
                    services.map(service=><Service 
                        key={service.key}
                        service={service}
                        ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;