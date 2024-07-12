import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-12">
      <div className="carousel w-full h-[420px] md:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/YC2wzWk4/umbrella-chair-around-swimming-pool.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <Link to="/allTouristsSpot">
                  <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/LszGxVyR/golden-gate-bridge-body-water-near-rock-formations-sunset-san-francisco-california.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex  items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/3wnFr4Nm/sea-beach.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex  items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/DwQcDYKC/beautiful-shot-desert-mountain-arches-national-park-sunny-day.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex  items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/TYgSd06b/las-vegas-sunset.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex  items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/sxpRwPvW/villa-nature-water-travel-background.jpg"
            className="w-full  object-cover"
          />
          <div className="absolute flex  items-center md:w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 md:p-14">
            <div className="text-white space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Discover the World with Nexus Travel
              </h2>
              <p>
                Nexus Travel offers affordable & curated tours that promise
                unforgettable adventures. Start your next adventure with Nexus
                Travel today!
              </p>
              <div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white mr-5 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide5"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-green-600 hover:bg-green-700 border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
