import React from "react";
import loadingBarAnimation from "../animations/loadingBars.json";
import Lottie from "lottie-react";

const LoadingBar = () => {
  return (
    <div>
      <Lottie
        className="w-[150px] m-auto block z-10 relative mt-[10%] opacity-70"
        animationData={loadingBarAnimation}
        loop={true}
      />
    </div>
  );
};

export default LoadingBar;
