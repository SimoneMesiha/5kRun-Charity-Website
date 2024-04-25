import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const email = "cyhelpinghands@gmail.com";
  const instagramUrl = "https://instagram.com/stgeorgebk5k"; // Replace with your Instagram profile link

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href={`mailto:${email}`} className="hover:text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div className="text-sm text-gray-400">© Run the Race Keep the Faith Annual 5K </div>
        {/* <div className="flex mt-4 md:mt-0">
          <NavLink className="text-white hover:text-gray-300 px-3 py-2" to="/">
            Home
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300 px-3 py-2"
            to="/about"
          >
            About the Run
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300 px-3 py-2"
            to="/2024-run"
          >
            2024 Run
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300 px-3 py-2"
            to="registration"
          >
            Registration
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300 px-3 py-2"
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300 px-3 py-2"
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div> */}
        <button
          onClick={scrollToTop}
          className="text-white hover:text-gray-300 p-2"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      </div>
    </footer>
  );
};
export default Footer;