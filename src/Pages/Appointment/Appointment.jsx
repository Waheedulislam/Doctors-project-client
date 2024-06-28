import { FaCheckCircle } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
const Appointment = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">
                        <h1 className="text-5xl font-bold">Book an Appointment!</h1>
                        <p className="py-6 font-semibold">
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
                            Need Some Help? <span className="text-teal-500">Contact Us Today</span>
                        </div>

                        <div className="lg:flex justify-start">
                            <div className="mt-4 flex ">
                                <FcCallback className="w-14 h-14" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500"> (505) 555-0125</span> <br />
                                    <span className="hover:text-teal-500">(316) 555-0116</span></spa>
                            </div>
                            <div className="mt-4 flex ">
                                <MdMarkEmailRead className="w-14 h-14 text-red-400" />
                                <spa className='font-semibold text-xl '><span className="hover:text-teal-500">doctorate123@gmail.com</span> <br />
                                    <span className="hover:text-teal-500">baoppyhossen1234@gmail.com</span></spa>
                            </div>
                        </div>
                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100  lg:w-2/4 shrink-0 shadow-2xl">
                        <form className="card-body">

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
                                    placeholder="Date"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="Time"
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