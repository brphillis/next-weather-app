import Image from "next/image";
import React from "react";
import WeatherAnimation from "@/components/WeatherAnimation";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-wrap flex-row justify-center gap-[30px] max-h-[500px] m-auto p-4 mt-5 text-gray-200 z-10">
      {/* top */}
      <div className="relative flex flex-wrap justify-center align-middle pt-12 bg-black/40 p-8 rounded-md shadow-2xl">
        <div className="flex flex-col items-center">
          <WeatherAnimation data={data} />
          <p className="text-2xl">{data.weather[0].main}</p>
          <p className="pt-1">{data.weather[0].description}</p>
        </div>
        <p className="text-5xl mt-[7%] mx-10">
          {data.main.temp.toFixed(0)}&#8451;
        </p>
      </div>
      {/* bottom */}
      <div className="bg-black/40 relative p-8 rounded-md shadow-2xl">
        <p className="font-semibold tracking-wider text-4xl text-center pb-6">
          {data.name}
        </p>
        <div className="flex-col flex-wrap justify-between text-center">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="m-2 bg-black/20 p-4 rounded-md min-h-[80px] min-w-[80px] shadow-md">
              <p className="font-medium text-xl">Humidity</p>
              <p className="font-semibold tracking-wider text-2xl mt-2">
                {data.main.humidity.toFixed(0)}%
              </p>
            </div>
            <div className="m-2 bg-black/20 p-4 rounded-md min-h-[80px] min-w-[80px] shadow-md">
              <p className="font-medium text-xl">Feels</p>
              <p className="font-semibold tracking-wider text-2xl mt-2">
                {data.main.feels_like}&#8451;
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="m-2 bg-black/20 p-4 rounded-md min-h-[80px] min-w-[80px] shadow-md">
              <p className="font-medium text-xl">Max</p>
              <p className="font-semibold tracking-wider text-2xl mt-2">
                {data.main.temp_max}&#8451;
              </p>
            </div>
            <div className="m-2 bg-black/20 p-4 rounded-md min-h-[80px] min-w-[80px] shadow-md">
              <p className="font-medium text-xl">Min</p>
              <p className="font-semibold tracking-wider text-2xl mt-2">
                {data.main.temp_min}&#8451;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
