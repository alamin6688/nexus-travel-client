import axios from "axios";
import { useEffect, useState } from "react";
import AllTouristsSpotCard from "./AllTouristsSpotCard";
import { Helmet } from "react-helmet-async";

const AllTouristsSpot = () => {
  const [touristSpot, setTouristSpot] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get("https://nexus-travel-server.vercel.app/allTouristSpot")
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

  const filteredTouristSpots = touristSpot
    .filter((spot) =>
      spot.name.toLowerCase().includes(filterOption.toLowerCase())
    )
    .sort((a, b) => {
      const costA = parseInt(a.average_cost[0], 10);
      const costB = parseInt(b.average_cost[0], 10);

      if (sortOption === "low-to-high") {
        return costA - costB;
      } else if (sortOption === "high-to-low") {
        return costB - costA;
      } else {
        return 0;
      }
    });

  // Create a unique list of tourist spot names for the select dropdown
  const uniqueNames = [...new Set(touristSpot.map((spot) => spot.name))];

  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Nexus Travel | All Tourist Spots</title>
      </Helmet>
      <div className="min-h-[calc(100vh-287px)] max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-4 lg:px-2 pb-10">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div>
            <div className="text-center pt-8">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                All Tourist Spots
              </h1>
              <p className="w-full md:w-3/4 mx-auto pt-3 text-[18px]">
                Discover a place where history and natural beauty converge;
                Offering unforgettable experiences and lasting memories for
                adventurers of all kinds.
              </p>
            </div>
            <div className="flex justify-center pt-4 md:pt-8">
              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="">All Countries</option>
                {uniqueNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="select select-bordered w-full max-w-xs ml-4"
              >
                <option value="">Sort by Cost</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 md:pt-8 pb-10">
              {filteredTouristSpots.map((card) => (
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
