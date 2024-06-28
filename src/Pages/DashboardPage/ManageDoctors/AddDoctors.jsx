import axios from "axios";
import { useEffect, useState } from "react";

const AddDoctors = () => {

    const [specialty, setSpecialty] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/doctorSpecialties')
            if (data.status == 200) {
                setSpecialty(data?.data)
            }
        }
        load();
    }, [])
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

                        <form className="card-body">

                            {/* Name/specialty  */}
                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="m-2 h-16 rounded-full input w-full input-bordered"
                                    required
                                />
                                <select name="category"
                                    required
                                    id=""
                                    className="m-2 h-16 rounded-full input w-full input-bordered">
                                    {
                                        specialty?.map(specialty => <option key={specialty} value={specialty?.title}>{specialty?.title}</option>)
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

                            {/* Experience/Rating  */}

                            <div className="gap-2 flex justify-center">

                                <input
                                    type="text"
                                    placeholder="Experience"
                                    className="h-16 m-2 rounded-full input w-full input-bordered"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Rating"
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