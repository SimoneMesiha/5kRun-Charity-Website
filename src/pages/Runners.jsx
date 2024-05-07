import React from "react";
import sponsorRulesImage from "../assets/sponsorInstructions.jpg"; // Update path as needed
import qrCodeImage from "../assets/venmo.jpg"; // Update path as needed

import mapImage1 from "../runners/5K Sponsors posts 2k24 - 10.jpg";
import mapImage2 from "../runners/5K Sponsors posts 2k24 - 11.jpg";
import mapImage3 from "../runners/5K Sponsors posts 2k24 - 12.jpg"
import mapImage4 from "../runners/5K Sponsors posts 2k24 - 13.jpg"
import mapImage5 from "../runners/5K Sponsors posts 2k24 - 14.jpg"
import mapImage6 from "../runners/5K Sponsors posts 2k24 - 15.jpg"
import mapImage7 from "../runners/5K Sponsors posts 2k24 - 16.jpg"
import mapImage8 from "../runners/5K Sponsors posts 2k24 - 17.jpg"
import mapImage9 from "../runners/5K Sponsors posts 2k24 - 18.jpg"
import mapImage10 from "../runners/IMG_7555.jpg"
import mapImage11 from "../runners/IMG_7556.jpg"
import mapImage12 from "../runners/IMG_7557.jpg"

const Runners = () => {
  const runners = [
    {
      id: 1,
      name: "Runner 1",
      imageUrl: mapImage8,
    },
    {
      id: 2,
      name: "Runner 2",
      imageUrl: mapImage1,
    },
    {
      id: 3,
      name: "Runner 3",
      imageUrl: mapImage7,
    },
    {
      id: 4,
      name: "Runner 4",
      imageUrl: mapImage4,
    },
    {
      id: 5,
      name: "Runner 5",
      imageUrl: mapImage5,
    },
    {
      id: 6,
      name: "Runner 6",
      imageUrl: mapImage6,
    },
    {
      id: 7,
      name: "Runner 7",
      imageUrl: mapImage2,
    },
    {
      id: 8,
      name: "Runner 8",
      imageUrl: mapImage3,
    },
    {
      id: 9,
      name: "Runner 9",
      imageUrl: mapImage9,
    },
    {
      id: 10,
      name: "Runner 10",
      imageUrl: mapImage10,
    },
    {
      id: 11,
      name: "Runner 11",
      imageUrl: mapImage11,
    },
    {
      id: 12,
      name: "Runner 12",
      imageUrl: mapImage12,
    }
    // Add more runners as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-center my-6">Sponsor our Runners!</h1>
      {/* Sponsor Rules Section */}
      <div className="text-center mb-6">
        <img src={sponsorRulesImage} alt="Sponsor Rules" className="mx-auto" />
      </div>

      {/* QR Code for Donations */}
      <div className="text-center mb-8">
        <img
          src={qrCodeImage}
          alt="Donate QR Code"
          className="mx-auto w-40 h-40"
        />
        <p className="text-lg mt-2">Scan to Donate</p>
      </div>

      {/* Runners Gallery */}
      <div className="flex flex-wrap -mx-2">
        {runners.map((runner, index) => (
          <div key={index} className="w-full sm:w-1/2 p-2">
            <div style={{ height: "350px" }} className="w-full overflow-hidden">
              <img
                src={runner.imageUrl}
                alt={`Runner ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Runners;
