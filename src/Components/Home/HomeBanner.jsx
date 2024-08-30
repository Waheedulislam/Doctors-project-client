import doctorBanner from '../../assets/image/DoctorBanner.jpg'
import flower from '../../assets/image/flower.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../vairants'
const HomeBanner = () => {
    return (
        <div className="bg-[url('/src/assets/image/bg.png')]">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='lg:w-11/12 lg:pl-30 pt-12'>
                        <img src={doctorBanner} className='rounded-lg shadow-2xl' />

                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h4 className='text-2xl font-bold pb-6 flex'><img src={flower} className='h-12 w-12' /><p className='pt-2'>SERVING TO THE PEOPLE SINCE 2000</p></h4>
                        <h1 className="text-7xl text-black font-bold">On a Pursuit of
                            Better <span className='text-teal-600'> Medicine</span></h1>
                        <p className="py-6 font-semibold">This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location .</p>
                        <button className="btn animate-bounce rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700  hover:bg-white text-lg ">Get Started</button>


                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;