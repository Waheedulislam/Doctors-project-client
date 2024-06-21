/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleServices = ({ service }) => {
    return (
        <div className="card grid w-96  bg-base-100 shadow-xl">
            <figure><img className="w-80 h-60" src={service?.imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {service?.serviceName}

                </h2>
                {
                    service?.description?.length > 100 ?
                        <p>{service?.description.slice(0, 100)}
                            <Link
                                to={`/serviceDescription/${service?.id}`}
                                className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{service?.description}</p>
                }
                <p>
                    <Link
                        to={`/serviceDescription/${service?.id}`}
                        className="text-xl flex justify-center align-middle gap-2 font-bold hover:text-teal-600 "> Learn More <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </p>
            </div>
        </div>
    );
};

export default SingleServices;