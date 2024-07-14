import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const { user } = useAuth();
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

  const handleAdd = (id) => {
    console.log(id);
    const myList = {
      name: touristSpot.name,
      description: touristSpot.description,
      image: touristSpot.image,
      average_cost: touristSpot.average_cost,
      tourists_spot_name: touristSpot.tourists_spot_name,
      location: touristSpot.location,
      seasonality: touristSpot.seasonality,
      travel_time: touristSpot.travel_time,
      totalVisitorsPerYear: touristSpot.totalVisitorsPerYear,
      loggedUser: user?.email,
      userName: user?.displayName,
      cartId: touristSpot._id,
    };
    axios
      .post(`https://nexus-travel-server.vercel.app/my-List`, myList)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to your list successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response && error.response.data.message) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Tourist spot failed to add in your list!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
                  <span className="font-semibold">Country Name:</span>{" "}
                  {touristSpot.name}
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
                    <span className="font-semibold">Average Cost:</span>{" "}
                    {touristSpot.average_cost}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => handleAdd(id)}
                    className="btn btn-primary bg-green-600 hover:bg-green-700 border-none"
                  >
                    Add To List
                  </button>
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
