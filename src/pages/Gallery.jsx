import React from "react";
import mapImage from "../assets/prospectPark.png";

import mapImage1 from "../assetsPhotos/BibleLens_2019_05_12_20_54_41_9010.jpg";
import mapImage2 from "../assetsPhotos/IMG_0446.jpg";
import mapImage3 from "../assetsPhotos/IMG_1554.jpg";
import mapImage4 from "../assetsPhotos/IMG_2454.jpg";
import mapImage5 from "../assetsPhotos/IMG_2472.jpg";

import mapImage6 from "../assetsPhotos/IMG_2490.jpg";
import mapImage7 from "../assetsPhotos/IMG_2502.jpg";
import mapImage8 from "../assetsPhotos/IMG_2513.jpg";
import mapImage9 from "../assetsPhotos/IMG_2521.jpg";
import mapImage10 from "../assetsPhotos/IMG_2522.jpg";

import mapImage11 from "../assetsPhotos/IMG_2527.jpg";
import mapImage12 from "../assetsPhotos/IMG_2529.jpg";
import mapImage13 from "../assetsPhotos/IMG_2530_Original.jpg";
import mapImage14 from "../assetsPhotos/IMG_2532.jpg";
import mapImage15 from "../assetsPhotos/IMG_5757.jpg";

import mapImage16 from "../assetsPhotos/IMG_5784.jpg";
import mapImage17 from "../assetsPhotos/IMG_5809.jpg";
import mapImage18 from "../assetsPhotos/IMG_5815.jpg";
import mapImage19 from "../assetsPhotos/IMG_6043.jpg";
import mapImage20 from "../assetsPhotos/IMG_6049.jpg";

import mapImage21 from "../assetsPhotos/IMG_6058.jpg";
import mapImage22 from "../assetsPhotos/IMG_9929.jpg";
import mapImage23 from "../assetsPhotos/IMG_9943.jpg";
import mapImage24 from "../assetsPhotos/IMG_9983.jpg";
import mapImage25 from "../assetsPhotos/IMG_9984.jpg";


// Assuming you have an array of image URLs
const imageUrls = [
  // Replace these with your actual image URLs
  mapImage1,mapImage2,mapImage3,mapImage4,mapImage5,
  mapImage6,mapImage7,mapImage8,mapImage9,mapImage10,
  mapImage11,mapImage12,mapImage13,mapImage14,mapImage15,
  mapImage16,mapImage17,mapImage18,mapImage19,mapImage20,
  mapImage21,mapImage22,mapImage23,mapImage24
  // ...add all your images
];

const GalleryPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1> */}
      <div className="flex flex-wrap -mx-2">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full sm:w-1/2 p-2">
            {/* Images with fixed height and object-fit to cover */}
            <div style={{ height: "300px" }} className="w-full overflow-hidden">
              <img
                src={url}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
