import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const {serviceId} = useParams()
  return (
    <div className="container min-vh-100">
      <div className="row">
        <div className="col-lg-10 mx-auto">
            <div className="services">
            <h4> services : {serviceId} </h4>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
