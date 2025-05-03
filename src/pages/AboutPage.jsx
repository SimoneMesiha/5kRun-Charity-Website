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
  { id: 1, imageUrl: pic1 },
  { id: 2, imageUrl: pic2 },
  { id: 3, imageUrl: pic3 },
  { id: 4, imageUrl: pic4 },
  { id: 5, imageUrl: pic5 },
  { id: 6, imageUrl: pic6 },
  { id: 7, imageUrl: pic7 },
  { id: 8, imageUrl: pic8 },
  { id: 9, imageUrl: pic9 },
  { id: 10, imageUrl: pic10 },
  { id: 11, imageUrl: pic11 },
  { id: 12, imageUrl: pic12 },
  { id: 13, imageUrl: pic13 },
  { id: 14, imageUrl: pic14 },
  { id: 15, imageUrl: pic15 },
  { id: 16, imageUrl: pic16 },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 font-body text-gray-700">
      {/* Top section: map + info + flyer */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Google Maps Embed */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.9982719709587!2d-73.94002932329126!3d40.607861771409524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2449fb8b9f92d%3A0x2b07fc0b57711fc1!2sMarine%20Park%20Active%20Adults%20and%20Senior%20Center!5e0!3m2!1sen!2sus!4v1745286613679!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Info + Flyer */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 tracking-tight">
            What You Need to Know
          </h2>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Welcome to our 5th Annual “Run the Race Keep the Faith”! This year's
            5K run will take place on <strong>May 10th, 2025 at 12pm</strong>,
            located at <strong>Marine Park</strong>! Our mission is raising
            money for cancer research and treatment in underserved communities
            in Egypt.
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            “Run the Race Keep the Faith” honors our beloved Tasoni Mariem
            Dosse. All proceeds benefit <strong>Saint Takla Hospital</strong> in
            Alexandria, Egypt, funding their new Radiation and Immunotherapy
            Center. Your generous donations have enabled essential treatments
            and new equipment—thank you!
          </p>
          <div className="flex justify-center">
            <img
              src={card}
              alt="Event Flyer"
              className="rounded-lg shadow-lg object-contain max-h-[300px] w-auto"
            />
          </div>
        </div>
      </div>

      {/* Past Achievements Gallery */}
      <section className="mt-16">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-center mb-8 tracking-tight">
          Over the years, your support helped create this:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {runners.map((runner) => (
            <div
              key={runner.id}
              className="rounded-lg overflow-hidden shadow-md h-[350px]"
            >
              <img
                src={runner.imageUrl}
                alt={`Achievement ${runner.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
