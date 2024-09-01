/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../vairants'

// eslint-disable-next-line react/prop-types, no-unused-vars
const HomeSingleService = ({ service }) => {
    return (

        <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="card grid w-96  bg-base-100 shadow-2xl">
            <figure><img className="w-80 h-60" src={service?.imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {service?.serviceName}

                </h2>
                {
                    service?.description?.length > 100 ?
                        <p>{service?.description.slice(0, 100)}
                            <Link
                                to={`/serviceDescription/${service?._id}`}
                                className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{service?.description}</p>
                }
                <p>
                    <Link
                        to={`/serviceDescription/${service?._id}`}
                        className="text-xl flex justify-center align-middle gap-2 font-bold hover:text-teal-600 "> Learn More <FaArrowRight className="my-1.5 font-semibold" /></Link>
                </p>
            </div>
        </motion.div>

    );
};

export default HomeSingleService;