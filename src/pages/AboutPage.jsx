import React from "react";
import mapImage from "../assets/prospectPark.png"; // Adjust the import path to where your image is located within your project
import card from "../assetsPhotos/card.jpeg";
const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-top">
        {/* Image Embed - this will be responsive and adjust to screen size */}
        <div className="w-full lg:w-1/2">
          {/* <img src={mapImage} alt="Map" className="max-w-full h-auto" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.9982719709587!2d-73.94002932329126!3d40.607861771409524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2449fb8b9f92d%3A0x2b07fc0b57711fc1!2sMarine%20Park%20Active%20Adults%20and%20Senior%20Center!5e0!3m2!1sen!2sus!4v1745286613679!5m2!1sen!2sus"
            // width="600"
            height="450px"
            width="100%"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Text Content - this will stack below the image on small screens and on the right on large screens */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
          <h2 className="text-xl font-bold mb-4">WHAT YOU NEED TO KNOW</h2>
          <p className="text-base lg:text-lg">
            Welcome to our Annual 5K Run! Join us again by running for a great
            cause...
            {/* More text */}
          </p>
          <p>
            Welcome to our 5th Annual “Run the Race Keep the Faith”! This year's
            5K run will take place on May 10th, 2025 at 12pm, located at Marine Park! Our run's mission is to raise money for cancer research
            and treatment in underserved communities in our homeland of Egypt!
            “Run the Race Keep the Faith” is dedicated to our beloved Tasoni
            Mariem Dosse, and all the proceeds of this fundraiser are directly
            sent to Saint Takla Hospital in Alexandria, Egypt for funding of
            their new Radiation and Immunotherapy Center! With each year we have
            been able to send thousands of dollars to St. Takla's Hospital that
            is being used toward necessary equipment and treatment efforts! This
            our Fourth Annual 5K Run and we cannot wait to see you all there for
            a fun-filled day of fellowship + love!
          </p>
          <div className="flex justify-center p-2">
            {/* Centering the image container */}
            <div
              style={{ height: "300px", width: "fit-content" }}
              className="flex items-center justify-center overflow-hidden"
            >
              {/* The image itself */}
              <img
                src={card}
                alt="flier"
                className="object-contain max-h-full" // Using object-contain to ensure the full image is visible and max-h-full to respect the container's height
                style={{ maxHeight: "300px" }} // Ensuring the image height does not exceed 300px
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
