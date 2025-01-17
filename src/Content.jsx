import { format } from "date-fns";
import { useState } from "react";

const Content = (props) => {
  const { loc, temp, theme, weatherText, airQ } = props;

  const homeSrc = "./" + theme + "/32/Home.svg";
  const pinSrc = "./" + theme + "/32/Pin.svg";
  const heartSrc = "./" + theme + "/32/Heart.svg";
  const userSrc = "./" + theme + "/32/User.svg";

  const getMoodImage = (mood) => {
    if (mood === "Sunny" || mood === "Clear ") {
      return "./" + theme + "/sunny.png";
    } else if (
      mood === "Cloudy" ||
      mood === "Partly cloudy" ||
      mood === "Overcast "
    ) {
      return "./" + theme + "/cloudy.png";
    } else if (
      mood === "Patchy rain possible" ||
      mood === "Patchy light drizzle" ||
      mood === "Light drizzle" ||
      mood === "Patchy light rain" ||
      mood === "Light rain" ||
      mood === "Light rain shower" ||
      mood === "Moderate rain" ||
      mood === "Heavy rain" ||
      mood === "Patchy rain nearby"
    ) {
      return "./" + theme + "/rain.png";
    } else if (
      mood === "Patchy snow possible" ||
      mood === "Patchy sleet possible" ||
      mood === "Patchy light snow" ||
      mood === "Light snow" ||
      mood === "Patchy moderate snow" ||
      mood === "Patchy heavy snow" ||
      mood === "Heavy snow" ||
      mood === "Moderate snow" ||
      mood === "Blowing snow" ||
      mood === "Blizzard"
    ) {
      return "./" + theme + "/snow.png";
    } else if (mood === "Thundery outbreak possible") {
      return "./" + theme + "/thunder.png";
    } else {
      return "./" + theme + "/windy.png";
    }
  };

  const icon = getMoodImage(weatherText);
  const bgColor = theme === "day" ? "bg-gray-100" : "bg-slate-900";
  console.log(airQ);
  
  // console.log(airQ["gb-defra-index"]);
  return (
    <div
      className={
        theme === "day"
          ? "w-1/2 h-full bg-gray-100 flex justify-center items-center"
          : "w-1/2 h-full bg-slate-900 flex justify-center items-center text-white rounded-bl-3xl"
      }
    >
      <div className="w-[414px] h-[828px] rounded-3xl flex items-center z-30 shadow-lg backdrop-blur-md flex-col">
        <div className="w-5/6 h-32 flex">
          <div className="w-4/5 h-full flex flex-col">
            <div className="mt-12 text-gray-400">
              {format(new Date(), "MMMM dd, yyyy")}
            </div>
            <div className="font-bold text-5xl">{loc}</div>
          </div>
          <img
            src="./localization_icon.svg"
            alt="loc"
            className="w-12 h-12 mt-16"
          />
        </div>
        <div className="flex w-[350px] h-[350px] mt-[50px] group">
          <img
            src={icon}
            alt={theme}
            className="w-[350px] transition duration-300 group-hover:opacity-0"
          />
          <div className="flex items-center w-[350px] h-[350px] absolute bg-{bgColor} opacity-0 transition duration-500 flex-col group-hover:opacity-100">
            <p className="text-[35px] mt-[40px]">Hazardous air index</p>
            <p className={airQ && airQ['gb-defra-index'] <=5 ? "text-green-300 text-[100px] font-bold" : "text-red-500 text-[100px] font-bold"}>{airQ && airQ['gb-defra-index']}</p>
            <div className="w-[350px] h-[100px] flex text-[12px]">
              <div className="w-1/4 h-[100px] flex flex-col items-center gap-[10px] border-r border-black justify-center">
                <p>CO(μg/m<sup>3</sup>)</p>
                <p>{airQ?.co}</p>
              </div>
              <div className="w-1/4 h-[100px] flex flex-col items-center gap-[10px] border-r border-black justify-center">
                <p>SO<sub>2</sub>(μg/m<sup>3</sup>)</p>
                <p>{airQ?.so2}</p>
              </div>
              <div className="w-1/4 h-[100px] flex flex-col items-center gap-[10px] border-r border-black justify-center">
                <p>PM2.5(μg/m<sup>3</sup>)</p>
                <p>{airQ?.pm2_5}</p>
              </div>
              <div className="w-1/4 h-[100px] flex flex-col items-center gap-[10px] justify-center">
                <p>PM10(μg/m<sup>3</sup>)</p>
                <p>{airQ?.pm10}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            theme === "day"
              ? "text-[100px] font-bold bg-gradient-to-b from-black to-gray-100 text-transparent bg-clip-text"
              : "text-[100px] font-bold bg-gradient-to-b from-white to-gray-900 text-transparent bg-clip-text"
          }
        >
          {temp}°
        </div>
        <div
          className={
            theme === "day"
              ? "font-bold capitalize text-[20px] text-blue-700"
              : "font-bold capitalize text-[20px] text-orange-500"
          }
        >
          {weatherText}
        </div>
        <div className="flex gap-[40px] mt-[50px]">
          <img src={homeSrc} alt="home" />
          <img src={pinSrc} alt="pin" />
          <img src={heartSrc} alt="heart" />
          <img src={userSrc} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Content;
