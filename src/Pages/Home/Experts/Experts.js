import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] =useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setExperts(data))

    },[])
    return (
        <div className='container' id='news'>
           <div className="row">
           <h4 className="fw-bolder text-primary mb-4 display-6 text-center">Pain Free Dentistry
</h4>
           {
               experts.map(expert=><Expert
               key={expert.key}
                 expert={expert}
                 ></Expert>)
           }
           </div>
        </div>
    );
};

export default Experts;