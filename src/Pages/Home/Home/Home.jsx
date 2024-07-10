import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import TouristsSpotsSection from "../TouristsSpotsSection/TouristsSpotsSection";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-366px)]">
            <Banner></Banner>
            <TouristsSpotsSection></TouristsSpotsSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;