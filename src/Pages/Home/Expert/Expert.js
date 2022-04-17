import React from 'react';

const Expert = ({expert}) => {
    const {img, title,desc} =expert
    return (
        <div className='col-lg-4 col-md-6 col'>
            <div className="card mb-5">
                <img className="card-img-top" src={img} alt="Card cap"/>
                <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        </div>
    );
};

export default Expert;