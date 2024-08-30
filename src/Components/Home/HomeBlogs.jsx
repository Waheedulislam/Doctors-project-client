import doctor1 from '../../assets/image/blogDoctor1.jpg'
import doctor2 from '../../assets/image/blogDoctor2.jpg'
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const HomeBlogs = () => {
    return (
        <div className='mt-20 mb-10'>
            <div className="text-center ">
                <p className='font-semibold text-xl'>From the blog</p>
                <h1 className="text-5xl text-teal-700">What’s New?</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-28 grid-cols-1 mt-12 justify-items-center">
                {/* card 1 */}
                <div
                    className=" bg-base-100 card shadow-lg w-full">
                    <figure>
                        <img
                            className="w-full  h-96"
                            src={doctor1}
                            alt="Shoes" />
                    </figure>
                    <div className='mt-8 '>
                        <p className='flex items-center ml-52 my-2 font-semibold text-teal-600'><SlCalender className='mr-2' />April 19, 2016</p>
                        <h2 className="text-2xl text-center font-semibold hover:text-teal-600">Effective Medical Help During Mental Crisis</h2>
                        <p className='mt-8 text-center mx-2  font-semibold'>We provide fast help to guide you through the challenging times you confront. We will help you resolve your crisis and develop coping strategies to prevent or manage future situations.</p>
                        <p>
                            <Link
                                className="text-xl my-10 flex justify-center align-middle gap-2 font-bold hover:text-teal-600 "> Learn More <FaArrowRight className="my-1.5 font-semibold" /></Link>
                        </p>
                    </div>
                </div>
                {/* card 2  */}
                <div className=" bg-base-100 w-full card shadow-lg">
                    <figure>
                        <img
                            className="w-full  h-96"
                            src={doctor2}
                            alt="Shoes" />
                    </figure>
                    <div className='mt-8'>
                        <p className='flex items-center ml-52 my-2 font-semibold text-teal-600'><SlCalender className='mr-2' />April 19, 2016</p>
                        <h2 className="text-2xl text-center font-semibold hover:text-teal-600">Coping with Emotional Distress of Parenthood</h2>
                        <p className='mt-8  mx-2 text-center font-semibold'>Most new parents experience some type of worry and stress during pregnancy and early parenthood. Maintaining positive mental health is important for the health of new parents the baby.</p>
                    </div>
                    <p>
                        <Link
                            className="text-xl my-10 flex justify-center align-middle gap-2 font-bold hover:text-teal-600 "> Learn More <FaArrowRight className="my-1.5 font-semibold" /></Link>
                    </p>
                </div>

            </div>
            <div className="text-center mt-20">
                <button className=" btn text-center rounded-lg bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg ">View More Post<FaArrowRight className="my-1.5 font-semibold" /></button>
            </div>
        </div>
    );
};

export default HomeBlogs;