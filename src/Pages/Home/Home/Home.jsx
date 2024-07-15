import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Map from "../Map/Map";
import NewsLetter from "../NewsLetter/NewsLetter";
import TimeLine from "../TimeLine/TimeLine";
import TouristsSpotsSection from "../TouristsSpotsSection/TouristsSpotsSection";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-287px)]">
            <Banner></Banner>
            <TouristsSpotsSection></TouristsSpotsSection>
            <Map></Map>
            <TimeLine></TimeLine>
            <FAQ></FAQ>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;