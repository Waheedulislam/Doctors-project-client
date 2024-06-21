import Marquee from "react-fast-marquee";
import { GiDiscussion } from "react-icons/gi";
import Discussion from '../../assets/image/Discussion.jpg'
import Dental from '../../assets/image/Dental surgery.jpg'
import Electronic from '../../assets/image/Electronic contract.jpg'
import Follow from '../../assets/image/Follow up check.jpg'
import { RiUserFollowFill } from "react-icons/ri";
import { TbDentalOff } from "react-icons/tb";
const Process = () => {
    return (
        <div className="mt-20">

            <div className="text-center mb-6">
                <h1 className="text-5xl pb-10 text-teal-800 font-semibold text-center">The Best Process</h1>
                <p className="text-xl text-gray-700 font-medium">Our focus is on your overall well being and helping you achieve optimal healthand
                    <br /> esthetics. We provide state-of-the-art dental care in a comfortable.</p>

            </div>
            {/* card  */}
            <Marquee speed={50} gradientWidth={100} gradient={true} pauseOnClick={true} className="h-full my-10">
                {/* card 1 */}
                <div className="card mr-12 w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80 h-60" src={Discussion} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-bold justify-center text-center">
                            01. <span className="text-teal-800">
                                Discussion
                            </span>
                            <div className="text-teal-800"> <GiDiscussion /> </div>
                        </h2>
                        <p className="text-center font-medium">Using the contact form on  the website, you can send  us a detailed enquiry</p>

                    </div>
                </div>
                {/* card 2 */}
                <div className="card  mr-12 w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80 h-60" src={Electronic} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-bold justify-center text-center">
                            02. <span className="text-teal-800">Electronic contract</span>

                        </h2>
                        <p className="text-center font-medium">One of our dentists will examine your request and we will make a suggestion</p>

                    </div>
                </div>
                {/* card 3   */}
                <div className="card  mr-12 w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80 h-60" src={Follow} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-bold justify-center text-center">
                            03. <span className="text-teal-800">Follow up check</span>
                            <div className="text-teal-800"> <RiUserFollowFill /> </div>
                        </h2>
                        <p className="text-center font-medium">The most important part of preventive dentistry is to brush teeth</p>

                    </div>
                </div>
                {/* card 4 */}
                <div className="card  mr-12 w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80 h-60" src={Dental} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-bold justify-center text-center">
                            04. <span className="text-teal-800">Dental surgery</span>
                            <div className="text-teal-800"> <TbDentalOff /> </div>
                        </h2>
                        <p className="text-center font-medium ">There are only 2 dental specialties that only focus on dental esthetics</p>

                    </div>
                </div>

            </Marquee>
        </div>
    );
};

export default Process;