import React from 'react';
import error from '../../../image/svg/error.svg'

const Notpage = () => {
    return (
        <div className='notFound' >
           <div  className="">
           <img style={{height:'95vh'}} className="d-block mx-auto" src={error} alt="" />
           </div>
        </div>
    );
};

export default Notpage;