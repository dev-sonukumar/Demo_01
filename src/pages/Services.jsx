const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-800 p-8">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <p>
            We create fast, modern, and responsive websites tailored to your
            needs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
          <p>
            Our team builds mobile applications that provide seamless user
            experiences.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
          <p>
            Boost your brands online presence with our expert digital marketing
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
