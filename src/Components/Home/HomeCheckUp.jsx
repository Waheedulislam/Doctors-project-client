import checkUp from '../../assets/image/checkUp.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../vairants'
const HomeCheckUp = () => {
    return (
        <div className="">
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">


                    <motion.img
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='lg:w-2/4 rounded-lg shadow-2xl' src={checkUp} />


                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h1 className="text-5xl font-bold">We provide high <br /> quality & <span className='text-teal-700'>cost effective</span> services</h1>
                        <ul className='my-10 ' style={{ listStyleType: 'disc' }}>
                            <li className='text-xl font-semibold mt-2'>Professional dental services 24/7</li>
                            <li className='text-xl font-semibold mt-2'>Various cosmetic dentistry services</li>
                            <li className='text-xl font-semibold mt-2'>Oral hygiene advisory & assessment</li>
                        </ul>
                        <button className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">Get Started</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeCheckUp;