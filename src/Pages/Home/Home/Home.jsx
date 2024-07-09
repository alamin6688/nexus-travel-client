import Banner from "../Banner/Banner";
import TouristsSpotsSection from "../TouristsSpotsSection/TouristsSpotsSection";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-366px)]">
            <Banner></Banner>
            <TouristsSpotsSection></TouristsSpotsSection>
        </div>
    );
};

export default Home;