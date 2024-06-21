import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const DoctorAppointment = () => {
    const { id } = useParams();
    console.log(id)
    const [doctors, setDoctors] = useState([]);
    console.log(doctors)

    useEffect(() => {
        async function lode() {
            const data = await axios.get(`http://localhost:3000/doctors/${id}`)
            console.log(data)
            if (data?.status == 200) {
                setDoctors(data?.data)
            }
        }

        lode()
    }, [id])
    return (
        <div className="card grid w-96  bg-base-100 shadow-xl">
            <figure><img className="w-full h-80" src={doctors?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {doctors?.name}

                </h2>
                <h2 >
                    <span className="font-bold"> Specialty :</span> {doctors?.specialty}

                </h2>
                <h2 >
                    <span className="font-bold">Experience :</span>  {doctors?.experience}

                </h2>
                <h2 className="flex justify-items-center">
                    <span className="font-bold flex">Email :<MdEmail className="text-teal-500 my-1 mx-1" /></span>    {doctors?.email}

                </h2>
                <h2 className="flex justify-items-center">
                    <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {doctors?.rating}

                </h2>

                <p>
                    <Link
                        // to={`/serviceDescription/${service?.id}`}
                        className="btn text-center  bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg w-full mt-2 "> Book Appointment <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </p>
            </div>
        </div>
    );
};

export default DoctorAppointment;