import React from "react";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner mb-5  pt-5">
       <div className="container">
           <div className="row pt-5 ">
               <div className="col pt-5 z-index">
                   <h4 className="display-2 text-white pt-5  fw-bolder">Building <br /> great smiles <span className="fw-normal">...</span> </h4>
                   <p className="text-dark fw-bolder pt-2">
                   Welcome to the office of <br /> Dr Dentist .
                   </p>
               <button className="btn z-index btn-outline-light"> Make Appointment</button>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Banner;
