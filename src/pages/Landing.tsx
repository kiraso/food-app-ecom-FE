import React from 'react';
import LandingImg1 from '../images/coupongreen.png';
import LandingImg2 from '../images/couponpink.png';
function Landing() {
  return (
    <div className="flex flex-col w-full justify-center items-center rounded-md mt-3">
      <div className="flex flex-row bg-green-400 h-[350px] text-white text-center text-[100px] w-full">
        <div>
          <img
            alt=""
            src={LandingImg1}
            className="bg-green-500/40 h-full w-full object-fill"
          />
        </div>
        <div>
          <img
            alt=""
            src={LandingImg2}
            className="bg-green-500/40 h-full object-fill "
          />
        </div>
        <div>
          <img
            alt=""
            src={LandingImg1}
            className="bg-green-500/40 h-full w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
