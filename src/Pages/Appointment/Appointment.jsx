import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { toast } from "react-toastify";
const Appointment = () => {

    const [doctors, setDoctors] = useState([]);

    // doctor filter name and service
    useEffect(() => {
        async function lode() {
            const data = await axios.get('https://doctors-project-server.onrender.com/doctors')
            console.log(data)
            if (data?.status == 200) {
                setDoctors(data?.data)
            }
        }

        lode()
    }, [])

    // filter doctor Specialty
    const doctorSpecialty = doctors.filter(doctor => doctor?.specialty);
    // filter doctor Name
    const doctorNames = doctors.filter(doctor => doctor?.name);


    // handle post appointment
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




        const appointmentInformation = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            doctorName: doctorName,
            date: date,
            time: time,
            specialty: specialty,
            description: description,

        }
        const userConfirmed = window.confirm("Are you sure you want to add an appointment?");
        console.log(userConfirmed, appointmentInformation)
        if (userConfirmed) {
            try {
                const response = await axios.post('https://doctors-project-server.onrender.com/appointment', appointmentInformation);
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

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">
                        <h1 className="text-5xl font-bold text-black">Book an Appointment!</h1>
                        <p className="py-6 font-semibold text-black">
                            You can benefit from an expert medical consultation  - schedule an appointment now.
                        </p>
                        <ul className='my-3 ' >
                            <li className='flex justify-items-center'>
                                <FaCheckCircle className='mt-3  text-teal-600 text-2xl' />
                                <span className='text-xl my-2 mx-2 font-semibold'>200+ Doctor Always Available</span>
                            </li>
                            <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Free Appointment With Any Specialty</span></li>
                            <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Virtual On-Site</span></li>
                        </ul>

                        <div className="text-3xl mt-8 font-bold">
                            Need Some Help? <span className="text-teal-600">Contact Us Today</span>
                        </div>

                        <div className="lg:flex justify-start">
                            <div className="mt-4 flex ">
                                <FcCallback className="w-10 h-10" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500 "> (505) 555-0125</span>
                                </spa>
                            </div>
                            <div className="mt-4 flex ml-2">
                                <MdMarkEmailRead className="w-10 h-10 text-teal-600" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500">doctorate123@gmail.com</span> <br />
                                </spa>
                            </div>
                        </div>
                        <div className="flex text-2xl">
                            <MdLocationOn className="w-14 h-14 mt-2 text-teal-600" />
                            <span className="my-4">Ashulia,Savar,Dhaka-(1314)</span>
                        </div>
                    </div>

                    {/* From information  */}

                    <div className="card   bg-base-100  lg:w-2/4 shrink-0 shadow-2xl">
                        <form onSubmit={handleAppointment} className="card-body">

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

                            {/* Email/Service  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <select
                                    name="specialty"
                                    required
                                    className="m-2 h-16 rounded-full input w-full input-bordered">
                                    {
                                        doctorSpecialty?.map(doctor => <option key={doctor?._id} value={doctor?.specialty}>{doctor?.specialty}</option>)
                                    }
                                </select>
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
                            <div>
                                <select
                                    name="doctorName"
                                    required
                                    className="m-2 h-16 rounded-full input w-full input-bordered">
                                    {
                                        doctorNames?.map(doctor => <option key={doctor?._id} value={doctor?.name}>{doctor?.name}</option>)
                                    }
                                </select>
                            </div>

                            {/* Description  */}
                            <div >
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Write your message..."
                                    className="h-28 m-2 rounded-2xl input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Book Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;