const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#FFF7F1] text-[#303841] h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Building modern solutions for your needs
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Fast & Secure</h3>
              <p>
                Our solutions are designed to be fast and secure to ensure the
                best performance for your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p>
                We provide scalable solutions that grow with your business and
                adapt to changing needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>
                Our team is available around the clock to help you with any
                issues or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#FFF7F1]  py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Join us today and start building a better future.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
