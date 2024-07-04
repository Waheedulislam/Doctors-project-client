import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorAppointment = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        // doctor get
        async function load() {
            const data = await axios.get(`http://localhost:5000/doctors/${id}`)

            if (data?.status == 200) {
                setDoctor(data?.data)
            }
        }

        load()

    }, [id])

    const handleAppointment = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const doctorName = form.doctorName.value;
        const email = form.email.value;
        const specialty = form.specialty.value;
        const date = form.date.value;
        const time = form.time.value;
        const description = form.description.value;


        const imageUrl = form.imageUrl.value;

        const appointmentInformation = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            doctorName: doctorName,
            date: date,
            time: time,
            specialty: specialty,
            description: description,
            image: imageUrl,

        }
        const userConfirmed = window.confirm("Are you sure you want to add an appointment?");

        if (userConfirmed) {
            try {
                const response = await axios.post('http://localhost:5000/appointment', appointmentInformation);
                if (response?.status === 200) {
                    console.log(response)
                    toast.success('Successfully Added an Appointment')
                }
            } catch (error) {
                console.error("There was an error creating the appointment!", error);
                alert("Failed to create appointment. Please try again.");
            }
        } else {
            alert("Appointment creation cancelled.");
        }
        form.reset();
    };

    return (

        <div>
            <h1 className="text-center text-xl  font-bold text-teal-600 ">Appointment</h1>

            <div className="flex w-full justify-items-center  px-80 flex-col">
                <div className="divider"></div>
            </div>
            <h1 className="text-5xl font-bold text-teal-700 text-center ">Book an Appointment..! </h1>
            <div className="flex w-full justify-items-center  px-80 flex-col">
                <div className="divider"></div>
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">

                        <figure><img className="w-full h-96 mt-12 rounded-2xl" src={doctor?.image} alt="Shoes" /></figure>
                        <h2 className="card-title my-4 text-3xl hover:text-teal-600 font-bold justify-center text-center">
                            {doctor?.name}

                        </h2>
                        <h2 className="my-1 text-xl text-start">
                            <span className="font-bold"> Specialty :</span> {doctor?.specialty}

                        </h2>
                        <h2 className="my-1 text-xl text-start">
                            <span className="font-bold">Experience :</span>  {doctor?.experience}

                        </h2>
                        <h2 className="my-1 text-xl flex justify-items-center">
                            <span className="font-bold flex">Email :<MdEmail className="text-teal-500 my-1 mx-1" /></span>    {doctor?.email}

                        </h2>
                        <h2 className="my-1 text-xl flex justify-items-center">
                            <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {doctor?.rating}

                        </h2>
                        <div className="divider"> OR </div>
                        <div className=" text-3xl font-bold">
                            Need Some Help ? <span className="text-teal-600">Contact Us</span>
                        </div>

                        <div className="lg:flex justify-start">
                            <div className="mt-4 flex ">
                                <IoCall className="w-6 h-6 text-teal-600" />
                                <spa className='font-semibold'><span className="hover:text-teal-500 mx-2"> (+880)1633-521872</span>
                                </spa>
                            </div>
                            <div className="lg:mt-4 flex lg:ml-2">
                                <MdMarkEmailRead className="w-6 h-6 text-teal-600" />
                                <spa className='font-semibold  '><span className="hover:text-teal-500 mx-2">doctorate123@gmail.com</span> <br />
                                </spa>
                            </div>
                        </div>
                        <div className="flex font-semibold lg:mb-12">
                            <MdLocationOn className="w-6 h-6 mt-2 text-teal-600" />
                            <span className="my-2 hover:text-teal-600">Ashulia,Savar,Dhaka-(1314)</span>
                        </div>

                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100  lg:w-2/4 shrink-0 shadow-2xl">
                        <form onSubmit={handleAppointment} className="card-body ">
                            <h1 className="text-center text-4xl my-8 font-bold text-teal-600 ">Appointment</h1>
                            {/* Name/Phone number  */}
                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className="m-2 h-16 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="m-2 h-16 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Email/Specialty   */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="text"
                                    name="specialty"
                                    placeholder="Specialty"
                                    value={doctor?.specialty}
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
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
                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    name="doctorName"
                                    placeholder="Chooses Doctor"
                                    value={doctor?.name}
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />


                                <input
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Chooses Doctor"
                                    value={doctor?.image}
                                    disabled
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />

                            </div>

                            {/* Description  */}
                            <div >
                                <input
                                    name="description"
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