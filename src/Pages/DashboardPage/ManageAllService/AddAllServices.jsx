import axios from "axios";
import { useEffect, useState } from "react";

const AddAllServices = () => {
    const [serviceSpecialty, setServiceSpecialty] = useState();
    console.log(serviceSpecialty)
    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/doctorSpecialties')
            if (data.status == 200) {
                setServiceSpecialty(data?.data)
            }
        }
        load();
    }, [])

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">
                        <h1 className="text-5xl text-teal-600 text-center mb-5 font-bold ">Add a Service!</h1>
                        <img
                            className="w-full h-full"
                            src="https://assets-v2.lottiefiles.com/a/8c78c984-116a-11ee-ae61-932659819410/IAckMxcRJe.gif" alt="" />


                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100 ml-5 mt-4 lg:w-2/4 shrink-0 shadow-2xl">

                        <form className="card-body">

                            {/* Name/specialty  */}
                            <div className="gap-2 flex justify-center">

                                <select name="category"
                                    required
                                    id=""
                                    className="m-2 h-16 rounded-full input w-full input-bordered">
                                    {
                                        serviceSpecialty?.map(service => <option key={service} value={service?.title}>{service?.title}</option>)
                                    }
                                </select>
                            </div>

                            {/* Email/Contact  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="contact"
                                    placeholder="contact"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Date/Time  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Doctor  */}
                            <div >
                                <input
                                    type="text"
                                    placeholder="Image Url"
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
                                <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Add a Service</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>




    );
};

export default AddAllServices;