import axios from "axios";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import "animate.css";
import { Helmet } from "react-helmet-async";

const AddTouristsSpot = () => {
  const { user } = useAuth();

  const handleAdd = (event) => {
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
    const addInfo = {
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
    console.log(addInfo);

    axios
      .post("https://nexus-travel-server.vercel.app/addTouristSpot", addInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tourist spot added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Tourist spot failed to add!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-287px)] lg:mt-12 lg:mb-16 animate__animated animate__zoomIn">
      <Helmet>
        <title>Nexus Travel | Add Tourist Spot</title>
      </Helmet>
      <div className="min-h-[calc(100vh-380px)] max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <div className="bg-base-200 w-full rounded-xl py-8 md:px-16">
          <h2 className="text-center font-inter text-3xl font-extrabold">
            Add Tourist Spot
          </h2>
          <form onSubmit={handleAdd} className="card-body px-6">
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
                  placeholder="Enter country name"
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
                  placeholder="Enter description"
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
                  placeholder="Enter image URL"
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
                  placeholder="Enter average cost"
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
                  placeholder="Enter tourists spot name"
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
                  placeholder="Enter location"
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
                  placeholder="Enter seasonality"
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
                  className="select bg-gray-200 w-full"
                  required
                >
                  <option value="" disabled selected>
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
                  placeholder="Enter total visitors per year"
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
                Add Tourist Spot
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
