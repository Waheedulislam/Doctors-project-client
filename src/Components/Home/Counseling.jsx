import { motion } from 'framer-motion'
import { fadeIn } from '../../vairants'
import img from '../../assets/image/search-doctor.jpg'
const Counseling = () => {
    return (
        <div className=" my-10" >
            <motion.img
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='opacity-80'
                src={img} alt="" />
        </div>
    );
};

export default Counseling;