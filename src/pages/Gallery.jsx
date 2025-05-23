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
import mapImage26 from "../assetsPhotos/26-min.jpg";
import mapImage27 from "../assetsPhotos/27-min.jpg";
import mapImage28 from "../assetsPhotos/28-min.jpg";
import mapImage29 from "../assetsPhotos/29-min.jpg";
import mapImage30 from "../assetsPhotos/30-min.jpg";
import mapImage31 from "../assetsPhotos/31-min.jpg";
import mapImage32 from "../assetsPhotos/32-min.jpg";
import mapImage33 from "../assetsPhotos/33-min.jpg";
import mapImage34 from "../assetsPhotos/34-min.jpg";
import mapImage35 from "../assetsPhotos/35-min.jpg";
import mapImage36 from "../assetsPhotos/36-min.jpg";
import mapImage37 from "../assetsPhotos/37-min.jpg";
import mapImage38 from "../assetsPhotos/38-min.jpg";

const imageUrls = [
  mapImage36,
  mapImage35,
  mapImage34,
  mapImage33,
  mapImage32,
  mapImage38,
  mapImage37,
  mapImage31,
  mapImage30,
  mapImage29,
  mapImage28,
  mapImage27,
  mapImage26,
  mapImage1,
  mapImage2,
  mapImage3,
  mapImage4,
  mapImage5,
  mapImage6,
  mapImage7,
  mapImage8,
  mapImage9,
  mapImage10,
  mapImage11,
  mapImage12,
  mapImage13,
  mapImage14,
  mapImage15,
  mapImage16,
  mapImage17,
  mapImage18,
  mapImage19,
  mapImage20,
  mapImage21,
  mapImage22,
  mapImage23,
  mapImage24,
  mapImage25,
];

const GalleryPage = () => {
  return (
    <div className="container mx-auto p-4 font-body text-gray-800">
      {/* Optional heading */}
      {/* <h1 className="font-heading text-3xl text-center mb-6">Gallery</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, idx) => (
          <div key={idx} className="w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={url}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
