import { FaCheckCircle } from 'react-icons/fa';
import Women from '../../assets/image/women.jpg'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'
import { fadeIn } from '../../vairants'

const HomeChooseUs = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img src={Women}
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-2/4 rounded-lg shadow-2xl"
                />
                <motion.div
                    variants={fadeIn('down', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='lg:w-2/4 lg:ml-10'>
                    <h4 className='text-2xl text-teal-500 font-semibold'>Choose Us</h4>
                    <h1 className="text-5xl font-bold"> Why Choose Us </h1>
                    <ul className='my-5 ' >
                        <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Safety is your first priority</span></li>
                        <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Flexibility Treatment</span></li>
                        <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Diagnose with technology</span></li>
                        <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Reliable pricing</span></li>
                        <li className='flex justify-items-center'><FaCheckCircle className='mt-3  text-teal-600 text-2xl' /><span className='text-xl my-2 mx-2 font-semibold'>Expert Staff</span></li>
                    </ul>
                    <Link to='Appointment' className="btn  bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Take an Appointment</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeChooseUs;