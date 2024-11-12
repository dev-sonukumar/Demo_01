import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-8">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <p className="text-2xl">Page Not Found</p>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
