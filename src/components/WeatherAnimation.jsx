import React, { useState, useEffect } from "react";
import windy from "../animations/windy.json";
import foggy from "../animations/foggy.json";
import snow from "../animations/snow.json";
import cloudy from "../animations/cloudy.json";
import clearSkiesDay from "../animations/clearSkiesDay.json";
import showerRainDay from "../animations/showerRainDay.json";
import thunderStorm from "../animations/thunderStorm.json";
import Lottie from "lottie-react";

const WeatherAnimation = ({ data }) => {
  const [animation, setAnimation] = useState();

  useEffect(() => {
    if (data.weather[0].main === "Clouds") {
      setAnimation(cloudy);
    }
    if (data.weather[0].main === "Clear") {
      setAnimation(clearSkiesDay);
    }
    if (data.weather[0].main === ("Rain" || "Drizzle")) {
      setAnimation(showerRainDay);
    }
    if (data.weather[0].main === "ThunderStorm") {
      setAnimation(thunderStorm);
    }
    if (data.weather[0].main === "Snow") {
      setAnimation(snow);
    }
    if (
      data.weather[0].main === ("Fog" || "Haze" || "Smoke" || "Dust" || "Mist")
    ) {
      setAnimation(foggy);
    }
    if (data.weather[0].main === ("Tornado" || "Squall")) {
      setAnimation(windy);
    }
  }, [data]);

  return (
    <div>
      <Lottie
        className="w-[200px] m-auto block z-10 relative"
        animationData={animation}
        loop={true}
      />
    </div>
  );
};

export default WeatherAnimation;
