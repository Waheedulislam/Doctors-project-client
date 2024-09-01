import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditAllServices = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        async function lode() {
            const data = await axios.get(`https://doctors-project-server.vercel.app/services/${id}`)

            if (data?.status == 200) {
                setServices(data?.data)
            }
        }

        lode()
    }, [id])

    const handleEditService = async (e) => {
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
            const addService = await axios.patch(`https://doctors-project-server.vercel.app/services/${id}`, serviceInformation)
            try {
                if (addService?.status == 200) {
                    console.log(addService)
                    toast.success('Successfully Edit a Service')
                }
            } catch (error) {
                console.error("There was an error Editing the Service!", error);
                alert("Failed to Edit Service. Please try again.");
            }
        } else {
            alert("Service Edit cancelled.");
        }


    }
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">
                        <h1 className="text-5xl text-teal-600 text-center mb-5 font-bold ">Edit a Service!</h1>
                        <img
                            className="w-full h-full"
                            src="https://assets-v2.lottiefiles.com/a/8c78c984-116a-11ee-ae61-932659819410/IAckMxcRJe.gif" alt="" />


                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100 ml-5 mt-4 lg:w-2/4 shrink-0 shadow-2xl">

                        <form onSubmit={handleEditService} className="card-body">

                            {/* Name/specialty  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold ml-4">Service Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="serviceName"
                                    defaultValue={services?.serviceName}
                                    placeholder="Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                            </div>

                            {/* Email/Contact  */}

                            <div className="gap-2 flex justify-center">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold ml-4">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={services?.email}
                                        placeholder="Email"
                                        className="h-16 m-2 rounded-full input w-full input-bordered"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold ml-4">Contact</span>
                                    </label>
                                    <input
                                        type="contact"
                                        name="contact"
                                        placeholder="contact"
                                        defaultValue={services?.contact}
                                        className="h-16 m-2 rounded-full input w-full input-bordered "
                                        required
                                    />
                                </div>

                            </div>
                            {/* Doctor  */}
                            <div >

                                <input
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Image Url"
                                    defaultValue={services?.imgUrl}
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                            </div>

                            {/* Date/Time  */}

                            <div className="gap-2 flex justify-center">
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={services?.date}
                                    placeholder="Date"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    placeholder="Time"
                                    defaultValue={services?.time}
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />

                            </div>



                            {/* Description  */}
                            <div >
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={services?.description}
                                    placeholder="Write your message..."
                                    className="h-28 m-2 rounded-2xl input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Edit a Service</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditAllServices;