import axios from "axios";
import { useEffect, useState } from "react";
import HomeSingleTestimonial from "./HomeSingleTestimonial";
import Marquee from "react-fast-marquee";

const HomeTestimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    console.log(testimonials)
    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/PatientReview')
            if (data?.status == 200) {
                setTestimonials(data?.data);
            }
        }
        load();
    }, [])


    return (
        <div className="mt-28 mx-16">
            <div className="text-center  mb-10">
                <h1 className="font-semibold mb-2 btn text-xl bg-teal-100 text-teal-700 hover:text-black hover:bg-teal-100 rounded-full">Testimonial</h1>

                <h1 className="text-5xl font-semibold text-black">What Our Patient   <span className='text-teal-600'>Say About  </span>
                    Us </h1>
            </div>

            <div>
                <Marquee speed={50} gradientWidth={50} gradient={true} pauseOnClick={true} className="h-full my-10">
                    {
                        testimonials?.map((testimonial) =>
                        (
                            <HomeSingleTestimonial
                                key={testimonial.id}
                                testimonial={testimonial}
                            />

                        ))
                    }
                </Marquee>

            </div>

        </div>
    );
};

export default HomeTestimonial;