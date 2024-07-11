import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapWithTitle = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-base-200 pb-12">
      <div className="px-4 lg:px-6">
        <h1 className="text-center text-4xl font-extrabold pt-8 pb-4">Find Your Tourist Spots On Map</h1>
        <p className="w-full md:w-3/4 mx-auto text-center text-lg text-gray-600 mb-6">
        Discover popular tourist spots and attractions on the map below. Explore the beauty and culture of destinations around the world.
        </p>
        <div className="rounded-lg overflow-hidden border border-gray-300 mb-8">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            className="rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapWithTitle;
