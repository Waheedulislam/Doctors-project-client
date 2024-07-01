/* eslint-disable react/prop-types */

import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageSingleService = ({ service, onDelete }) => {

    const handleDeleteService = async () => {
        const userConfirmed = window.confirm('Are you sure you want to add a Service?')
        console.log(userConfirmed)
        if (userConfirmed) {
            const DeleteService = await axios.delete(`http://localhost:5000/services/${service._id}`)
            console.log(DeleteService)
            try {
                if (DeleteService?.status == 200) {
                    toast.success('Successfully Delete a Service')
                    onDelete(service._id)
                }
            } catch (error) {
                console.error("There was an error Delete the Service!", error)
            }
        } else {
            alert('Service Delete cancelled.')
        }
    }

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
                    <span className="font-bold"> schedule :</span> {
                        service?.schedule ?
                            <>
                                {service?.schedule}
                            </> :
                            <>
                                date: {service?.date} , Time: {service?.time}
                            </>
                    }

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
                    <button
                        onClick={handleDeleteService}
                        className="btn  text-center  bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-lg w-full "> Delete Service <MdDelete className="my-1.5 font-semibold" /></button>
                </p>
            </div>
        </div>
    );
};

export default ManageSingleService;