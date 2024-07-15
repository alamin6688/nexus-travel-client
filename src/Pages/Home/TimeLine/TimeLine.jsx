const TimeLine = () => {
  const spots = [
    {
      title: "Amazing Cities",
      date: "Mar 2024",
      description:
        "Discover the vibrant city life, with its bustling streets, diverse cuisine, and exciting nightlife. Perfect for urban explorers and culture lovers.",
    },
    {
      title: "Historical Landmark",
      date: "Jan 2023",
      description:
        "Explore the rich history and cultural heritage. A must-visit for history buffs and anyone interested in the past.",
    },
    {
      title: "Beautiful Beach",
      date: "Dec 2022",
      description:
        "Enjoy the pristine sands and crystal-clear waters. Perfect for sunbathing, swimming, and beach sports.",
    },
    {
      title: "Mountain Adventure",
      date: "Jul 2020",
      description:
        "Experience the thrill of hiking and breathtaking views. A perfect getaway for nature enthusiasts and adventure seekers.",
    },
    {
      title: "Enchanting Forest",
      date: "Oct 2018",
      description:
        "Immerse yourself in the tranquility of lush greenery and diverse wildlife. Ideal for nature walks, bird watching, and peaceful retreats.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-10 mb-16 px-2 md:px-0 bg-base-200">
      <div className="text-center pt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Journey Through Timeline
        </h1>
        <p className="w-full md:w-3/4 mx-auto pt-4">
          Experience a chronological journey through captivating destinations.
          Immerse yourself in unique experiences and create unforgettable
          memories.
        </p>
      </div>
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3 lg:col-span-3 lg:justify-center lg:flex lg:flex-col">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-400 before:dark:bg-green-600 lg:pl-8">
              <h3 className="text-3xl font-semibold">Tourist Spots</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400 dark:text-gray-600">
                Explore the best places
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
              {spots.map((spot, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400 before:dark:bg-green-600"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {spot.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">
                    {spot.date}
                  </time>
                  <p className="mt-3">{spot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
