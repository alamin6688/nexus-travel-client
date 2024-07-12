const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-16 px-2 md:px-0 bg-base-200">
      <div className="px-2 text-center">
        <h1 className="text-4xl pt-8 pb-8 font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-bold">
          What is Nexus Travel?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Nexus Travel is a comprehensive tourism management platform that
            enables you to explore, plan and manage travel experiences
            effortlessly. Whether you&apos;re organizing group tours, managing
            bookings or promoting destinations, Nexus Travel provides the tools
            to streamline your operations and enhance customer satisfaction.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          Can I customize the features and services on Nexus Travel?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Yes, Nexus Travel allows you to customize the features and services
            offered to match the needs of your travel business or organization.
            You can tailor the platform to include booking management, itinerary
            planning, destination guides and more, ensuring a personalized
            experience for your clients.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What benefits do users get with Nexus Travel?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Users of Nexus Travel enjoy exclusive benefits such as access to a
            wide range of travel destinations, personalized travel
            recommendations and real-time updates on travel advisories and
            promotions. Additionally, Nexus Travel offers a seamless booking
            experience and reliable customer support to ensure a hassle-free
            travel journey.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How does Nexus Travel ensure data security?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            At Nexus Travel, we prioritize the security and confidentiality of
            your data. All user information and transactional data are encrypted
            and stored securely. We implement robust authentication protocols
            and adhere to industry best practices to safeguard your information
            against unauthorized access or breaches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
