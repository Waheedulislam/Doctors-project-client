/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const HomeSingleTestimonial = ({ testimonial }) => {
    return (
        <div className="card grid w-96 mr-12  bg-base-100 shadow-xl">
            <div className="avatar justify-center">
                <div className="w-32 my-5 rounded-full">
                    <img src={testimonial?.imageUrl} alt="Shoes" />
                </div>
                {/* https://doctors-project-server.onrender.com */}
                {/* https://doctors-project-server.onrender.com */}
            </div>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {testimonial?.name}

                </h2>
                {
                    testimonial?.comment?.length > 230 ?
                        <p>{testimonial?.comment.slice(0, 230)}
                            <Link className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{testimonial?.comment}</p>
                }
                <p> <span className="font-bold">Date :</span> {testimonial?.date}</p>


                <ReactStars
                    className="flex justify-center "
                    count={5}
                    value={testimonial?.rating}
                    size={32}
                    color2={'#319997'}
                    edit={false}
                />


            </div>
        </div>
    );
};

export default HomeSingleTestimonial;