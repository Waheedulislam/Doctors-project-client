import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddDoctors = () => {

    const [specialty, setSpecialty] = useState();
    useEffect(() => {
        async function load() {
            const data = await axios.get('https://doctors-project-server.vercel.app/doctorSpecialties')
            if (data.status == 200) {
                setSpecialty(data?.data)
            }
        }
        load();
    }, [])

    const handleAddDoctor = async (e) => {
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


        // Doctor post
        const userConfirmed = window.confirm("Are you sure you want to add a Doctor?");
        if (userConfirmed) {
            const addDoctor = await axios.post('https://doctors-project-server.vercel.app/doctors', doctorInformation);
            try {
                if (addDoctor?.status == 200) {
                    console.log(addDoctor)
                    toast.success('Successfully Added a Doctor')

                }
            } catch (error) {
                console.error("There was an error creating the Doctor!", error);
                alert("Failed to create Doctor. Please try again.");
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
                        <h1 className="text-5xl text-teal-600 text-center mb-5 font-bold ">Add a Doctor!</h1>
                        <img
                            className="w-full h-full"
                            src="https://wockhardthospital.b-cdn.net/wp-content/uploads/2023/03/107925-doctor-edited.gif" alt="" />


                    </div>

                    {/* From information  */}

                    <div className="card  bg-base-100 ml-5 mt-4 lg:w-2/4 shrink-0 shadow-2xl">

                        <form onSubmit={handleAddDoctor} className="card-body">

                            {/* Name/specialty  */}
                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Doctor name"
                                    className="m-2 h-16 rounded-full input w-full input-bordered"
                                    required
                                />
                                <select
                                    name="specialty"
                                    required
                                    className="m-2 h-16 rounded-full input w-full input-bordered">
                                    {
                                        specialty?.map(specialty => <option key={specialty?._id} value={specialty?.title}>{specialty?.title}</option>)
                                    }
                                </select>
                            </div>

                            {/* Email/Contact  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="contact"
                                    name="contact"
                                    placeholder="Contact Number"
                                    className="h-16 m-2 rounded-full input w-full input-bordered "
                                    required
                                />
                            </div>

                            {/* Experience/Rating  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="Experience"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="text"
                                    name="rating"
                                    placeholder="Rating"
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
                            <div className="form-control mt-6">
                                <button className="h-16 btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Add a Doctor</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>




    );
};

export default AddDoctors;