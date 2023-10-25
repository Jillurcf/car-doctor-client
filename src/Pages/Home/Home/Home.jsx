import About from "../About/About";
import Banner from "../Banner/Banner";
import MeetOurTeam from "../MeeOurTeam/MeetOurTeam";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChoseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MeetOurTeam></MeetOurTeam>
            <WhyChooseUs></WhyChooseUs>
            
        </div>
    );
};

export default Home;