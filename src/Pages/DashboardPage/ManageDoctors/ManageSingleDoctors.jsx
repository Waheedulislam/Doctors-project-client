/* eslint-disable react/prop-types */
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdDelete, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ManageSingleDoctors = ({ doctor }) => {
    return (
        <div className="card grid w-80  bg-base-100 shadow-xl">
            <figure><img className="w-full h-80" src={doctor?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl hover:text-teal-600 font-bold ">
                    {doctor?.name}

                </h2>
                <h2 >
                    <span className="font-bold"> Specialty :</span> {doctor?.specialty}

                </h2>
                <h2 >
                    <span className="font-bold">Experience :</span>  {doctor?.experience}

                </h2>
                <h2 className="flex justify-items-center">
                    <span className="font-bold flex">Email :<MdEmail className="text-teal-500 my-1 mx-1" /></span>    {doctor?.email}

                </h2>
                <h2 className="flex justify-items-center">
                    <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {doctor?.rating}

                </h2>

                <p>
                    <Link
                        to={`/doctorAppointment/${doctor?.id}`}
                        className="btn text-center  bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg w-full mt-2 "> Edit Doctors <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </p>
                <p>
                    <Link
                        to={`/doctorAppointment/${doctor?.id}`}
                        className="btn text-center  bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-lg w-full "> Delete Doctors <MdDelete className="my-1.5 font-semibold" /></Link>
                </p>
            </div>
        </div>
    );
};

export default ManageSingleDoctors;