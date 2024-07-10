import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import axios from "axios";

const MyList = () => {
  const { user } = useAuth();
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myList`, {
        params: {
          email: user?.email,
        },
      })
      .then((response) => {
        setTouristSpots(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the tourist spots!", error);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="bg-base-200">
      <div className="min-h-[calc(100vh-366px)] max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-4 lg:px-2 pb-10">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div>
            <div className="text-center text-3xl md:text-4xl font-extrabold pt-8">
              <h1>My Tourists Spots List</h1>
            </div>
            <div className="w-full max-w-screen-lg mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 py-10">
              <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-300 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Tourists Spot Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Travel Time
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
                  {touristSpots.map((spot) => (
                    <tr key={spot._id}>
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
                        {spot.average_cost}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2 items-center">
                          <button className="btn">Update</button>
                          <button className="btn">Delete</button>
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
