import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <Services />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
