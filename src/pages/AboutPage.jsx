import React from "react";
import card from "../assetsPhotos/card.jpeg";

import pic1 from "../aboutPics/pic1.png";
import pic2 from "../aboutPics/pic2.png";
import pic3 from "../aboutPics/pic3.png";
import pic4 from "../aboutPics/pic4.png";
import pic5 from "../aboutPics/pic5.png";
import pic6 from "../aboutPics/pic6.png";
import pic7 from "../aboutPics/pic7.png";
import pic8 from "../aboutPics/pic8.png";
import pic9 from "../aboutPics/pic9.png";
import pic10 from "../aboutPics/pic10.png";
import pic11 from "../aboutPics/pic11.png";
import pic12 from "../aboutPics/pic12.png";
import pic13 from "../aboutPics/pic13.png";
import pic14 from "../aboutPics/pic14.png";
import pic15 from "../aboutPics/pic15.png";
import pic16 from "../aboutPics/pic16.png";

const runners = [
  { id: 1, name: "pic1", imageUrl: pic1 },
  { id: 2, name: "pic2", imageUrl: pic2 },
  { id: 3, name: "pic3", imageUrl: pic3 },
  { id: 4, name: "pic4", imageUrl: pic4 },
  { id: 5, name: "pic5", imageUrl: pic5 },
  { id: 6, name: "pic6", imageUrl: pic6 },
  { id: 7, name: "pic7", imageUrl: pic7 },
  { id: 8, name: "pic8", imageUrl: pic8 },
  { id: 9, name: "pic9", imageUrl: pic9 },
  { id: 10, name: "pic10", imageUrl: pic10 },
  { id: 11, name: "pic11", imageUrl: pic11 },
  { id: 12, name: "pic12", imageUrl: pic12 },
  { id: 13, name: "pic13", imageUrl: pic13 },
  { id: 14, name: "pic14", imageUrl: pic14 },
  { id: 15, name: "pic15", imageUrl: pic15 },
  { id: 16, name: "pic16", imageUrl: pic16 },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 font-body text-gray-800">
      {/* Top section: map embed + info + flyer */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-1/2">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.9982719709587!2d-73.94002932329126!3d40.607861771409524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2449fb8b9f92d%3A0x2b07fc0b57711fc1!2sMarine%20Park%20Active%20Adults%20and%20Senior%20Center!5e0!3m2!1sen!2sus!4v1745286613679!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="font-heading text-2xl sm:text-3xl mb-4">
            WHAT YOU NEED TO KNOW
          </h2>
          <p className="mb-4">
            Welcome to our 5th Annual “Run the Race Keep the Faith”! This year's
            5K run will take place on May 10th, 2025 at 12pm, located at Marine
            Park! Our run's mission is to raise money for cancer research and
            treatment in underserved communities in our homeland of Egypt!
          </p>
          <p className="mb-6">
            “Run the Race Keep the Faith” is dedicated to our beloved Tasoni
            Mariem Dosse, and all proceeds go to Saint Takla Hospital in
            Alexandria, Egypt for funding their new Radiation and Immunotherapy
            Center. Each year we’ve sent thousands of dollars to St. Takla’s
            toward essential equipment and treatments—thank you for your
            support!
          </p>

          <div className="flex justify-center">
            <div
              className="overflow-hidden rounded-lg shadow-md"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            >
              <img
                src={card}
                alt="Event Flyer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Past Achievements Gallery */}
      <div className="mt-12">
        <h3 className="font-heading text-xl sm:text-2xl text-center mb-6">
          Over the years, your support has helped us create this:
        </h3>
        <div className="flex flex-wrap -mx-2">
          {runners.map((runner) => (
            <div
              key={runner.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="h-[350px] w-full overflow-hidden rounded-lg shadow-sm">
                <img
                  src={runner.imageUrl}
                  alt={`Achievement ${runner.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
