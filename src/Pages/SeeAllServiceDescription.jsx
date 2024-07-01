import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SeeAllServiceDescription = () => {

    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        async function lode() {
            const data = await axios.get(`http://localhost:5000/services/${id}`)
            console.log(data)
            if (data?.status == 200) {
                setServices(data?.data)
            }
        }

        lode()
    }, [id])
    return (
        <div>
            <p>{id}</p>
            <div className="card grid w-96  bg-base-100 shadow-xl">
                <figure><img className="w-80 h-60" src={services?.imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                        {services?.serviceName}

                    </h2>
                    {
                        services?.description?.length > 100 ?
                            <p>{services?.description.slice(0, 100)}
                                <Link
                                    to={`/serviceDescription/${services?.id}`}
                                    className="text-teal-600 font-semibold"> Read more</Link></p>
                            :
                            <p>{services?.description}</p>
                    }
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeAllServiceDescription;