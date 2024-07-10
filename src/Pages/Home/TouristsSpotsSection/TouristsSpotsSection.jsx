import axios from "axios";
import { useEffect, useState } from "react";
import AllTouristsSpotCard from "../../AllTouristsSpot/AllTouristsSpotCard";
import { Link } from "react-router-dom";

const TouristsSpotsSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allTouristSpot")
      .then((response) => {
        console.log(response.data);
        setTouristSpots(response.data);
        // Initially show all spots
        setFilteredSpots(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tourist spots!", error);
      });
  }, []);

  // Function to sort spots by totalVisitorsPerYear in descending order
  useEffect(() => {
    setFilteredSpots(
      [...touristSpots].sort(
        (a, b) => b.totalVisitorsPerYear - a.totalVisitorsPerYear
      )
    );
  }, [touristSpots]);

  return (
    <div className="mb-16">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-4 pb-10 bg-base-200">
        <div className="text-center text-3xl md:text-4xl font-extrabold pt-8">
          <h1>Popular Tourist Spots</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {filteredSpots.slice(0, 6).map((card) => (
            <AllTouristsSpotCard
              key={card._id}
              card={card}
            ></AllTouristsSpotCard>
          ))}
        </div>
        <div className="text-center">
          <Link to="/allTouristsSpot">
            <button className="btn btn-primary">Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotsSection;
