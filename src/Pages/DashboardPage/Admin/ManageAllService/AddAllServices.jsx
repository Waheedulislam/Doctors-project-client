import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

    const handleService = async (e) => {
        e.preventDefault();

        const form = e.target;

        const serviceName = form.serviceName.value;
        const email = form.email.value;
        const time = form.time.value;
        const date = form.date.value;
        const contact = form.contact.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;

        const serviceInformation = {
            serviceName: serviceName,
            imgUrl: imageUrl,
            email: email,
            contact: contact,
            time: time,
            date: date,
            description: description,
        }
        console.log(serviceInformation)
        const userConfirmed = window.confirm('Are you sure you want to add a Service?')
        console.log(userConfirmed)

        if (userConfirmed) {
            const addService = await axios.post('http://localhost:5000/services', serviceInformation)
            try {
                if (addService?.status == 200) {
                    console.log(addService)
                    toast.success('Successfully Added a Service')
                }
            } catch (error) {
                console.error("There was an error creating the Service!", error);
                alert("Failed to create Service. Please try again.");
            }
        } else {
            alert("Doctor creation cancelled.");
        }
        form.reset();
    }

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

                        <form onSubmit={handleService} className="card-body">

                            {/* Name/specialty  */}
                            <div className="gap-2 flex justify-center">

                                <select
                                    name="serviceName"
                                    required
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
                                    name="email"
                                    disabled
                                    defaultValue="doctorate123@gmail.com"
                                    placeholder="Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="contact"
                                    name="contact"
                                    placeholder="contact"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Date/Time  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="date"
                                    name="date"
                                    placeholder="Date"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="time"
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
                                    name="imageUrl"
                                    placeholder="Image Url"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
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