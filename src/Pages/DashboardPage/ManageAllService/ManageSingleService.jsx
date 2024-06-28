/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ManageSingleService = ({ service }) => {
    console.log(service)

    return (
        <div className="card grid w-80  bg-base-100 shadow-xl">
            <figure><img className="w-80 h-60" src={service?.imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {service?.serviceName}

                </h2>



                <h2 >
                    <span className="font-bold"> Contact :</span> {service?.contact}

                </h2>
                <h2 >
                    <span className="font-bold"> Email :</span> {service?.email}

                </h2>
                <h2 >
                    <span className="font-bold"> schedule :</span> {service?.schedule}

                </h2>

                {
                    service?.description?.length > 50 ?
                        <p>{service?.description.slice(0, 50)}
                            <Link
                                to={`/serviceDescription/${service?.id}`}
                                className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{service?.description}</p>
                }
                <p>
                    <Link
                        to={`/doctorAppointment/${service?.id}`}
                        className="btn text-center  bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg w-full mt-2 "> Edit Service <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </p>
                <p>
                    <Link
                        to={`/doctorAppointment/${service?.id}`}
                        className="btn text-center  bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-lg w-full "> Delete Service <MdDelete className="my-1.5 font-semibold" /></Link>
                </p>
            </div>
        </div>
    );
};

export default ManageSingleService;