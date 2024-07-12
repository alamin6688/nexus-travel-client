import axios from "axios";
import { useEffect, useState } from "react";
import AllTouristsSpotCard from "./AllTouristsSpotCard";

const AllTouristsSpot = () => {
  const [touristSpot, setTouristSpot] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allTouristSpot")
      .then((response) => {
        console.log(response.data);
        setTouristSpot(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the tourist spots!", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-base-200">
      <div className="min-h-[calc(100vh-287px)] max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-4 lg:px-2 pb-10">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div>
            <div className="text-center text-3xl md:text-4xl font-extrabold pt-8">
              <h1>All Tourists Spots</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
              {touristSpot.map((card) => (
                <AllTouristsSpotCard key={card._id} card={card} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
