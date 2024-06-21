import HomeBanner from "../Components/Home/HomeBanner";
import HomeCheckUp from "../Components/Home/HomeCheckUp";
import HomeService from "../Components/Home/HomeService/HomeService";
import Process from "./Services/Process";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeService></HomeService>
            <Process></Process>
            <HomeCheckUp />
        </div>
    );
};

export default Home;