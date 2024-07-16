import { Link } from "react-router-dom";

const AllTouristsSpotCard = ({ card }) => {
  const {
    _id,
    description,
    image,
    tourists_spot_name,
    average_cost,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
  } = card;

  return (
    <div className="flex flex-col h-full">
      <div className="card card-compact bg-base-200 w-full shadow-2xl overflow-hidden flex flex-col h-full transform transition-transform duration-300 ease-in-out hover:scale-95">
        <figure className="overflow-hidden relative">
          <img
            src={image}
            alt="Spot Image"
            className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out transform scale-100 hover:scale-90"
          />
        </figure>
        <div className="p-4 pb-8 space-y-2 flex-1 flex flex-col">
          <div className="mt-1 mb-3">
            <h2 className="card-title text-3xl">{tourists_spot_name}</h2>
          </div>
          <p className="line-clamp-3 text-[16px]">{description}</p>
          <div className="flex-1"></div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Total Visitors Per Year:</span>{" "}
              {totalVisitorsPerYear}
            </p>
            <p>
              <span className="font-semibold">Travel Time:</span> {travel_time}
            </p>
            <p>
              <span className="font-semibold">Seasonality:</span> {seasonality}
            </p>
            <p>
              <span className="font-semibold">Average Cost:</span>{" "}
              ${average_cost}
            </p>
          </div>
          <div className="card-action pt-4">
            <Link to={`/allTouristSpot/${_id}`}>
              <button className="btn btn-primary bg-green-600 hover:bg-green-700 border-none w-full font-bold text-[16px]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpotCard;