const NewsLetter = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12 mb-16">
      <div
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/TYgSd06b/las-vegas-sunset.jpg')",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        className="w-full bg-base-200 dark:bg-gray-600"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-16 mx-auto md:p-10">
          <h1 className="text-3xl md:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-200">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-300">
            Sign-up for our newsletter to get up-to-date from us.
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Enter your email..."
              className="w-3/5 p-3 mr-2 rounded-lg sm:w-2/3"
            />
            <button
              type="button"
              className="btn border-none btn-primary w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
