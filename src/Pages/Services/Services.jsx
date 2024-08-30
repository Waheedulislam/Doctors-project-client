import axios from "axios";
import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Process from "./Process";

const Services = () => {
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)
    console.log(services)
    useEffect(() => {
        async function lodeBike() {
            const data = await axios.get('https://doctors-project-server.onrender.com/services')
            console.log(data)
            if (data?.status == 200) {
                setServices(data?.data)
            }
        }

        lodeBike()
    }, [])
    // Search Services
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="mt-8">
            <div className="text-center  mb-10">
                <h1 className="font-bold mb-2 btn text-xl bg-teal-100 text-teal-700 hover:text-black hover:bg-teal-100 rounded-full">All Service List</h1>

                <h1 className="text-5xl font-bold text-black">The  <span className='text-teal-600'>Best Quality </span>
                    Service </h1>
                <h1 className="text-5xl font-bold text-black">You Can Get</h1>
            </div>

            {/* search  */}
            <div >
                <form className="flex gap-2 justify-center">
                    <div className="form-control">
                        <input
                            type="text"
                            required
                            onChange={handleSearch}
                            placeholder="Search by services Title"
                            className="input input-bordered w-96 " />
                    </div>
                    <div >
                        <button ><FaSearch className=" w-10 h-10 my-1 right-4" /></button>
                    </div>
                </form>
            </div>

            <div className="grid my-8  grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  justify-items-center">

                {
                    services?.filter((service) => {
                        console.log(service)
                        return searchTerm.toLocaleLowerCase() === '' ? service
                            :
                            service?.serviceName.toLocaleLowerCase().includes(searchTerm)
                    })?.map((service) =>
                    (
                        <SingleServices
                            key={service.id}
                            service={service}
                        />

                    ))
                }
            </div>
            <div className="text-center">
                <Link to='/' className=" btn text-center rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Back to Home Page <FaArrowLeft className="my-1.5 font-semibold" /></Link>
            </div>

            {/* process  */}
            <Process></Process>

        </div>
    );
};

export default Services;