import Counseling from "../Components/Home/Counseling";
import HomeBanner from "../Components/Home/HomeBanner";
import HomeBlogs from "../Components/Home/HomeBlogs";
import HomeCheckUp from "../Components/Home/HomeCheckUp";
import HomeChooseUs from "../Components/Home/HomeChooseUs";
import HomeDoctor from "../Components/Home/HomeDoctor/HomeDoctor";
import HomeService from "../Components/Home/HomeService/HomeService";
import HomeTestimonial from "../Components/Home/HomeTestimonial/HomeTestimonial";
import Process from "./Services/Process";

const Home = () => {
    return (
        <div className='lg:max-w-screen-xl	max-w-screen-sm mx-auto '>
            <HomeBanner />
            <HomeService></HomeService>
            <Process></Process>
            <HomeCheckUp />
            <HomeDoctor />
            <HomeTestimonial />
            <HomeChooseUs></HomeChooseUs>
            <Counseling />
            <HomeBlogs />
        </div>
    );
};

export default Home;