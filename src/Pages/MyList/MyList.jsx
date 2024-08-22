import { useEffect, useState } from "react";
import axios from "axios";
import EmptyState from "../../Components/EmptyState";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";

const MyList = () => {
  const { user } = useAuth();
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allTouristSpot`)
      .then((response) => {
        setTouristSpots(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the tourist spots!", error);
        setLoading(false);
      });
  }, []);

  // Filtering tourist spots by the logged-in user's email
  const filteredSpots = touristSpots.filter(
    (spot) => spot.userEmail === user?.email
  );

  if (filteredSpots.length < 1) {
    return (
      <EmptyState
        message={"No Tourist Spots added yet!"}
        address={"/allTouristsSpot"}
        label={"Explore Tourist Spots"}
      />
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/allTouristSpot/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your tourist spot has been deleted!",
              icon: "success",
            });
            setTouristSpots((remainingSpots) =>
              remainingSpots.filter((spot) => spot._id !== id)
            );
          })
          .catch((error) => {
            console.error(
              "There was an error deleting the tourist spot!",
              error
            );
          });
      }
    });
  };

  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Nexus Travel | My List</title>
      </Helmet>
      <div className="min-h-[calc(100vh-287px)] max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-4 lg:px-2 pb-10">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div className="animate__animated animate__zoomIn">
            <div className="text-center text-3xl md:text-4xl font-extrabold pt-8">
              <h1>Tourist Spots List</h1>
            </div>
            <div className="w-full max-w-screen-xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 py-10">
              <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-300 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      SL No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Country Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Tourists Spot Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Travel Time(days)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Average Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-700 divide-gray-200">
                  {filteredSpots.map((spot, idx) => (
                    <tr key={spot._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {spot.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {spot.tourists_spot_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {spot.travel_time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${spot.average_cost}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2 items-center">
                          <Link to={`/updateTouristsSpot/${spot._id}`}>
                            <button className="btn btn-primary text-[16px] font-bold text-white">
                              Update
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(spot._id)}
                            className="btn text-[16px] font-bold text-white bg-red-500 border-none hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
