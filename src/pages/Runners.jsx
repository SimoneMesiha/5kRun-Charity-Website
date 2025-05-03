import React from "react";
import sponsorRulesImage from "../assets/HowToSponsor.jpg";
import sponsorInstruction from "../assets/HowToGetSponsored.jpg";
import qrCodeImage from "../assets/venmo.jpg";

import Baggio from "../runners/Baggio.png";
import Gabi from "../runners/Gabi.jpg";
import Marize from "../runners/Marize.jpg";
import Agapi from "../runners/Agapy.jpg";

import mapImage5 from "../runners/5K Sponsors posts 2k24 - 14.jpg";
import mapImage6 from "../runners/5K Sponsors posts 2k24 - 15.jpg";
import mapImage7 from "../runners/5K Sponsors posts 2k24 - 10.jpg";
import mapImage4 from "../runners/5K Sponsors posts 2k24 - 13.jpg";
import mapImage8 from "../runners/5K Sponsors posts 2k24 - 17.jpg";
import mapImage3 from "../runners/5K Sponsors posts 2k24 - 12.jpg";
import mapImage9 from "../runners/5K Sponsors posts 2k24 - 18.jpg";
import mapImage10 from "../runners/IMG_7555.jpg";
import mapImage11 from "../runners/IMG_7556.jpg";
import mapImage12 from "../runners/IMG_7557.jpg";
import mapImage13 from "../runners/ak.jpg";
import mapImage14 from "../runners/am.jpg";
import mapImage15 from "../runners/ay.jpg";
import mapImage17 from "../runners/ty.jpg";

const runners = [
  { id: 1, name: "Baggio", imageUrl: Baggio },
  { id: 2, name: "Gabi", imageUrl: Gabi },
  { id: 3, name: "Marize", imageUrl: Marize },
  { id: 4, name: "Agapi", imageUrl: Agapi },
  { id: 5, name: "Runner 5", imageUrl: mapImage5 },
  { id: 6, name: "Runner 6", imageUrl: mapImage6 },
  { id: 7, name: "Runner 7", imageUrl: mapImage7 },
  { id: 8, name: "Runner 8", imageUrl: mapImage4 },
  { id: 9, name: "Runner 9", imageUrl: mapImage8 },
  { id: 10, name: "Runner 10", imageUrl: mapImage3 },
  { id: 11, name: "Runner 11", imageUrl: mapImage9 },
  { id: 12, name: "Runner 12", imageUrl: mapImage10 },
  { id: 13, name: "Runner 13", imageUrl: mapImage11 },
  { id: 14, name: "Runner 14", imageUrl: mapImage12 },
  { id: 15, name: "Runner 15", imageUrl: mapImage13 },
  { id: 16, name: "Runner 16", imageUrl: mapImage14 },
  { id: 17, name: "Runner 17", imageUrl: mapImage15 },
  { id: 18, name: "Runner 18", imageUrl: mapImage17 },
];

const Runners = () => {
  return (
    <div className="container mx-auto p-4 font-body text-gray-800">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-center my-6">
        Sponsor our Runners!
      </h1>

      {/* Sponsor Rules Section */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="relative w-72 aspect-square transform -rotate-3 -top-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src={sponsorRulesImage}
            alt="How to Sponsor"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative w-72 aspect-square transform rotate-3 top-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src={sponsorInstruction}
            alt="Get Sponsored"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* QR Code for Donations */}
      <div className="text-center mb-8">
        <img
          src={qrCodeImage}
          alt="Donate QR Code"
          className="mx-auto w-40 h-40"
        />
        <p className="font-body text-lg mt-2">Scan to Donate</p>
      </div>

      {/* Runners Gallery */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {runners.map((runner) => (
          <div
            key={runner.id}
            className="h-[375px] overflow-hidden rounded-lg shadow-sm"
          >
            <img
              src={runner.imageUrl}
              alt={runner.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Runners;
