import { useEffect, useState } from "react";
import HomeSingleDoctor from "./HomeSingleDoctor";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeDoctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        async function lodeBike() {
            const data = await axios.get('http://localhost:3000/doctors')

            if (data?.status == 200) {
                setDoctors(data?.data)
            }
        }

        lodeBike()
    }, [])
    return (
        <div>
            <div >
                <div className="text-center my-20">
                    <h1 className="font-bold mb-8 btn text-xl bg-teal-100 text-black hover:text-black hover:bg-teal-100 rounded-full">Doctors</h1>
                    <h1 className="text-5xl font-bold text-black">Our  <span className='text-teal-600'>Best Quality </span>
                        Doctors </h1>
                    <h1 className="text-5xl font-bold text-black">You Can Get</h1>
                </div>

                <div className="grid my-8  grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  justify-items-center">

                    {
                        doctors?.slice(0, 6)?.map((doctor) =>
                        (
                            <HomeSingleDoctor
                                key={doctor.id}
                                doctor={doctor}
                            />

                        ))
                    }
                </div>
                <div className="text-center">
                    <Link to='/doctors' className=" btn text-center rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">See All Doctors <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </div>

            </div>
        </div>
    );
};

export default HomeDoctor;