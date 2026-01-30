import React from "react";

import Img1 from "../../assets/healthcare1.png";
import Img2 from "../../assets/healthcare2.png";
import Img3 from "../../assets/healthcare3.png";

const images = [Img1, Img2, Img3];

const HealthCareImageMarquee: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9F9] py-12">
   
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div className="relative w-full overflow-hidden">
        {/* Track */}
        <div
          className="flex w-max"
          style={{
            animation: "marquee 25s linear infinite",
          }}
        >
          {/* normal set */}
          <div className="flex gap-6">
            {images.map((img, i) => (
              <img
                key={`first-${i}`}
                src={img}
                alt=""
                className="h-160px w-280px rounded-xl object-cover"
              />
            ))}
          </div>

          {/*blurred set */}
          <div className="flex gap-6 ml-6 opacity-40 blur-[1px]">
            {images.map((img, i) => (
              <img
                key={`second-${i}`}
                src={img}
                alt=""
                className="h-160px w-280px rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareImageMarquee;
