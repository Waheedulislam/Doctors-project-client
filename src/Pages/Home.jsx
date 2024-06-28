import HomeBanner from "../Components/Home/HomeBanner";
import HomeCheckUp from "../Components/Home/HomeCheckUp";
import HomeChooseUs from "../Components/Home/HomeChooseUs";
import HomeDoctor from "../Components/Home/HomeDoctor/HomeDoctor";
import HomeService from "../Components/Home/HomeService/HomeService";
import HomeTestimonial from "../Components/Home/HomeTestimonial/HomeTestimonial";
import Process from "./Services/Process";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeService></HomeService>
            <Process></Process>
            <HomeCheckUp />
            <HomeDoctor />
            <HomeTestimonial />
            <HomeChooseUs></HomeChooseUs>
        </div>
    );
};

export default Home;