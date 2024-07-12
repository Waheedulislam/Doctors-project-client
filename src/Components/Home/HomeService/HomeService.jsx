import { useEffect, useState } from "react";
import HomeSingleService from "./HomeSingleService";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function lodeBike() {
            const data = await axios.get('https://doctors-project-server.onrender.com/services')

            if (data?.status == 200) {
                setServices(data?.data)
            }
        }

        lodeBike()
    }, [])
    return (
        <div className="mt-20">
            <div className="text-center my-20">
                <h1 className="font-bold mb-8 btn text-xl bg-teal-100 text-black hover:text-black hover:bg-teal-100 rounded-full">Services</h1>
                <h1 className="text-5xl font-bold text-black">The  <span className='text-teal-600'>Best Quality </span>
                    Service </h1>
                <h1 className="text-5xl font-bold text-black">You Can Get</h1>
            </div>

            <div className="grid my-8  grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  justify-items-center">

                {
                    services?.slice(0, 6)?.map((service) =>
                    (
                        <HomeSingleService
                            key={service._id}
                            service={service}
                        />

                    ))
                }
            </div>
            <div className="text-center">
                <Link to='/service' className=" btn text-center rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">See All Services <FaArrowRight className="my-1.5 font-semibold" /></Link>
            </div>

        </div>
    );
};

export default HomeService;