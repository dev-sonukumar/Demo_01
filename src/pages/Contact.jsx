const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg max-w-2xl text-center mb-8">
        We’d love to hear from you! Please fill out the form below or reach us
        at contact@mybrand.com.
      </p>
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
