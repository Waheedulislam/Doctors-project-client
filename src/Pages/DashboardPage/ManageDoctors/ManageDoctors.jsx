import axios from "axios";
import { useEffect, useState } from "react";
import ManageSingleDoctors from "./ManageSingleDoctors";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const ManageDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function lode() {
            const data = await axios.get('http://localhost:3000/doctors')
            console.log(data)
            if (data?.status == 200) {
                setDoctors(data?.data)
            }
        }

        lode()
    }, [])
    // Search Services
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="mt-8">



            <div className="text-center  mb-10">


                <h1 className="text-5xl font-bold text-black">Our  <span className='text-teal-600'>Best Quality </span>
                    Doctors </h1>
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
                    doctors?.filter((doctor) => {

                        return searchTerm.toLocaleLowerCase() === '' ? doctor
                            :
                            doctor?.name.toLocaleLowerCase().includes(searchTerm)
                    })?.map((doctor) =>
                    (
                        <ManageSingleDoctors
                            key={doctor.id}
                            doctor={doctor}
                        />

                    ))
                }
            </div>
            <div className="text-center">
                <Link to='/' className=" btn text-center rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Back to Home Page <FaArrowLeft className="my-1.5 font-semibold" /></Link>
            </div>


        </div>
    );
};

export default ManageDoctors;