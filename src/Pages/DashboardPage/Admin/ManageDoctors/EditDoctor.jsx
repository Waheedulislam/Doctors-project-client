import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditDoctor = () => {
    const { id } = useParams();
    console.log(id)
    const [doctor, setDoctor] = useState([]);
    console.log(doctor)
    //Doctor GET
    useEffect(() => {
        async function lode() {
            const data = await axios.get(`https://doctors-project-server.vercel.app/doctors/${id}`)

            if (data?.status == 200) {
                setDoctor(data?.data)
            }
        }

        lode()
    }, [id])

    //Doctor Edit
    const handleEditDoctor = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const contact = form.contact.value;
        const experience = form.experience.value;
        const specialty = form.specialty.value;
        const imageUrl = form.imageUrl.value;

        const doctorInformation = {
            name: name,
            image: imageUrl,
            email: email,
            rating: rating,
            contact: contact,
            experience: experience,
            specialty: specialty,
        }
        console.log(doctorInformation)

        // Doctor patch
        const userConfirmed = window.confirm("Are you sure you want to Edit a Doctor?");
        if (userConfirmed) {
            const editDoctor = await axios.patch(`https://doctors-project-server.vercel.app/doctors/${id}`, doctorInformation);

            try {
                if (editDoctor?.status == 200) {
                    console.log(editDoctor)
                    toast.success('Successfully Edit a Doctor')
                }
            } catch (error) {
                console.error("There was an error Editing the Doctor!", error);
                alert("Failed to edit Doctor. Please try again.");
            }
        } else {
            alert("Doctor Edit cancelled.");
        }

    }
    return (
        <div>
            <div>
                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div className="text-center lg:w-2/4 lg:text-left lg:ml-10">
                            <h1 className="text-5xl text-teal-600 text-center mb-5 font-bold ">Edit a Doctor!</h1>
                            <img
                                className="w-full h-full"
                                src="https://wockhardthospital.b-cdn.net/wp-content/uploads/2023/03/107925-doctor-edited.gif" alt="" />


                        </div>

                        {/* From information  */}

                        <div className="card  bg-base-100 ml-5 mt-4 lg:w-2/4 shrink-0 shadow-2xl">

                            <form onSubmit={handleEditDoctor} className="card-body">

                                {/* Name/specialty  */}
                                <div className="gap-2 flex justify-center">

                                    <div>
                                        <label className="label">
                                            <span className="ml-4 label-text  font-semibold">Doctor Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={doctor?.name}
                                            name="name"
                                            placeholder="Doctor name"
                                            className="m-2 h-16 rounded-full input w-full input-bordered"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Specialty</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={doctor?.specialty}
                                            name="specialty"
                                            placeholder="Specialty"
                                            className="m-2 h-16 rounded-full input w-full input-bordered"
                                            required
                                        />
                                    </div>

                                </div>

                                {/* Email/Contact  */}

                                <div className="gap-2 flex justify-center">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold ml-4">Email</span>
                                        </label>

                                        <input
                                            type="email"
                                            defaultValue={doctor?.email}
                                            name="email"
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
                                            defaultValue={doctor?.contact}
                                            placeholder="Contact Number"
                                            className="h-16 m-2 rounded-full input w-full input-bordered "
                                            required
                                        />
                                    </div>

                                </div>

                                {/* Experience/Rating  */}

                                <div className="gap-2 flex justify-center">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold ml-4">Experience</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="experience"
                                            defaultValue={doctor?.experience}
                                            placeholder="Experience"
                                            className="h-16 m-2 rounded-full input w-full input-bordered"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold ml-4">Rating</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="rating"
                                            defaultValue={doctor?.rating}
                                            placeholder="Rating"
                                            className="h-16 m-2 rounded-full input w-full input-bordered "
                                            required
                                        />
                                    </div>

                                </div>

                                {/* Doctor  */}
                                <div >
                                    <label className="label">
                                        <span className="ml-4 label-text font-semibold">Image Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="imageUrl"
                                        defaultValue={doctor?.image}
                                        placeholder="Image Url"
                                        className="h-16  rounded-full input w-full input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Edit a Doctor</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditDoctor;