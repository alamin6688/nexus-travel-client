import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateTouristsSpot = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [spotData, setSpotData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allTouristSpot/${id}`)
      .then((response) => {
        setSpotData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tourist spot data:", error);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const average_cost = form.average_cost.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const updatedInfo = {
      name,
      description,
      image,
      average_cost,
      tourists_spot_name,
      location,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      userEmail,
      userName,
    };
    axios
      .put(`http://localhost:5000/allTouristSpot/${id}`, updatedInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tourist spot updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-list");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Tourist spot failed to update!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating tourist spot:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Tourist spot failed to update!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (!spotData) {
    return (
      <div className="min-h-[calc(100vh-287px)] flex items-center justify-center">
        <div>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-287px)] lg:mt-12 lg:mb-16">
      <Helmet>
        <title>Nexus Travel | Update Tourist Spot</title>
      </Helmet>
      <div className="min-h-[calc(100vh-380px)] max-w-screen-xl mx-auto flex flex-col items-center justify-center animate__animated animate__zoomIn">
        <div className="bg-base-200 w-full rounded-xl py-8 md:px-16">
          <h2 className="text-center font-inter text-3xl font-extrabold">
            Update Tourist Spot
          </h2>
          <form onSubmit={handleUpdate} className="card-body px-6">
            <div className="flex flex-col gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Country Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={spotData.name}
                  className="input w-full bg-gray-200"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  defaultValue={spotData.description}
                  className="textarea w-full bg-gray-200 resize-y"
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={spotData.image}
                  className="input bg-gray-200"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Average Cost
                  </span>
                </label>
                <input
                  type="text"
                  name="average_cost"
                  defaultValue={spotData.average_cost}
                  className="input bg-gray-200"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Tourists Spot Name
                  </span>
                </label>
                <input
                  type="text"
                  name="tourists_spot_name"
                  defaultValue={spotData.tourists_spot_name}
                  className="input bg-gray-200"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={spotData.location}
                  className="input bg-gray-200"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Seasonality
                  </span>
                </label>
                <input
                  type="text"
                  name="seasonality"
                  defaultValue={spotData.seasonality}
                  className="input bg-gray-200"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Travel Time
                  </span>
                </label>
                <select
                  name="travel_time"
                  defaultValue={spotData.travel_time}
                  className="select bg-gray-200 w-full"
                  required
                >
                  <option value="" disabled>
                    Select travel time
                  </option>
                  <option value="1-2 days">1-2 days</option>
                  <option value="3-4 days">3-4 days</option>
                  <option value="4-5 days">4-5 days</option>
                  <option value="5-6 days">5-6 days</option>
                  <option value="7 days">7 days</option>
                  <option value="10 days">10 days</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[16px] font-bold">
                    Total Visitors Per Year
                  </span>
                </label>
                <input
                  type="text"
                  name="totalVisitorsPerYear"
                  defaultValue={spotData.totalVisitorsPerYear}
                  className="input bg-gray-200"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn btn-primary hover:btn-secondary border-none text-white text-[18px]"
              >
                Update Tourist Spot
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTouristsSpot;
