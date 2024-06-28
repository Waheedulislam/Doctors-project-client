import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { MdEmail, MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { useParams } from "react-router-dom";

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

        <div>
            <h1 className="text-5xl font-bold text-black text-center mt-10">Book an Appointment..!</h1>


            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">

                        <figure><img className="w-full h-96 mt-12 rounded-2xl" src={doctors?.image} alt="Shoes" /></figure>
                        <h2 className="card-title my-4 text-3xl hover:text-teal-600 font-bold justify-center text-center">
                            {doctors?.name}

                        </h2>
                        <h2 className="my-1 text-xl text-start">
                            <span className="font-bold"> Specialty :</span> {doctors?.specialty}

                        </h2>
                        <h2 className="my-1 text-xl text-start">
                            <span className="font-bold">Experience :</span>  {doctors?.experience}

                        </h2>
                        <h2 className="my-1 text-xl flex justify-items-center">
                            <span className="font-bold flex">Email :<MdEmail className="text-teal-500 my-1 mx-1" /></span>    {doctors?.email}

                        </h2>
                        <h2 className="my-1 text-xl flex justify-items-center">
                            <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {doctors?.rating}

                        </h2>
                        <div className=" text-3xl mt-4 font-bold">
                            Need Some Help? <span className="text-teal-600">Contact Us</span>
                        </div>

                        <div className="lg:flex justify-start">
                            <div className="mt-4 flex ">
                                <FcCallback className="w-8 h-8" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500 "> (+880) 1633-521872</span>
                                </spa>
                            </div>
                            <div className="mt-4 flex ml-2">
                                <MdMarkEmailRead className="w-8 h-8 text-teal-600" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500">doctorate123@gmail.com</span> <br />
                                </spa>
                            </div>
                        </div>
                        <div className="flex text-2xl">
                            <MdLocationOn className="w-10 h-10 mt-2 text-teal-600" />
                            <span className="my-4 hover:text-teal-600">Ashulia,Savar,Dhaka-(1314)</span>
                        </div>
                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100  lg:w-2/4 shrink-0 shadow-2xl">
                        <form className="card-body mt-10">

                            {/* Name/Phone number  */}
                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="m-2 h-16 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="m-2 h-16 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Email/Service  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="Service"
                                    placeholder="Service"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Date/Time  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="Date"
                                    name="date"
                                    placeholder="Date"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="Time"
                                    name="time"
                                    placeholder="Time"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Doctor  */}
                            <div >
                                <input
                                    type="text"
                                    placeholder="Chooses Doctor"
                                    value={doctors?.name}
                                    disabled
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                            </div>

                            {/* Description  */}
                            <div >
                                <input
                                    type="text"
                                    placeholder="Write your message..."
                                    className="h-28 m-2 rounded-2xl input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Book Appointment <FaArrowRight className="my-1.5 font-semibold" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>



    );
};

export default DoctorAppointment;