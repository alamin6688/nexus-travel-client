import axios from "axios";
import { useEffect, useState } from "react";
import { TiWorld } from "react-icons/ti";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [touristSpot, setTouristSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nexus-travel-server.vercel.app/allTouristSpot/${id}`)
      .then((response) => {
        setTouristSpot(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the tourist spot!", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-[calc(100vh-287px)] flex flex-col items-center justify-center bg-base-300">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        touristSpot && (
          <div className="hero bg-base-200 max-w-screen-xl lg:my-10 mx-auto">
            <div className="hero-content flex-col lg:flex-row py-10">
              <img
                src={touristSpot.image}
                className="w-full md:w-1/2 rounded-lg shadow-2xl"
                alt={touristSpot.name}
              />
              <div className="w-full space-y-4">
                <h1 className="text-5xl font-bold">
                  {touristSpot.tourists_spot_name}
                </h1>
                <h4 className="font-semibold text-xl">
                  <div className="flex items-center justify-start gap-1">
                    <span className="font-semibold">
                      <TiWorld className="text-3xl"/>
                    </span>
                    <div>{touristSpot.name}</div>
                  </div>
                </h4>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {touristSpot.description}
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">
                      Total Visitors Per Year:
                    </span>{" "}
                    {touristSpot.totalVisitorsPerYear}
                  </p>
                  <p>
                    <span className="font-semibold">Travel Time:</span>{" "}
                    {touristSpot.travel_time}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {touristSpot.location}
                  </p>
                  <p>
                    <span className="font-semibold">Seasonality:</span>{" "}
                    {touristSpot.seasonality}
                  </p>
                  <p>
                    <span className="font-semibold">Average Cost:</span> $
                    {touristSpot.average_cost}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DetailsPage;
