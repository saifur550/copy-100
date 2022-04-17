import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,desc,title ,key}= service;
    const navigate = useNavigate()
    const navigateServiceDetail = id =>{
        navigate(`service/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 col-12'>
           <div className="card mb-5">
            <img className="card-img-top" src={img} alt="img"/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <button onClick={()=>navigateServiceDetail(key)} className="btn btn-primary">Go somewhere</button>
         </div>
        </div>
     </div>
    );
};

export default Service;