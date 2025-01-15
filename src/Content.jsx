import { format } from "date-fns";
import { useState } from "react";

const Content = (props) => {
    const {loc, setLoc, weather, setWeather, temp, theme, weatherText} = props;
    switch(weather){
      case "Sunny": setWeather("sunny"); break;
      case "Clear": setWeather("sunny"); break;
      case "Cloudy": setWeather("cloudy"); break;
      case "Partly cloudy": setWeather("cloudy"); break;
      case "Overcast": setWeather("cloudy"); break;
      case "Patchy rain possible": setWeather("rain"); break;
      case "Patchy light drizzle": setWeather("rain"); break;
      case "Light drizzle": setWeather("rain"); break;
      case "Patchy light rain": setWeather("rain"); break;
      case "Light rain": setWeather("rain"); break;
      case "Light rain shower": setWeather("rain"); break;
      case "Moderate rain": setWeather("rain"); break;
      case "Heavy rain": setWeather("rain"); break;
      case "Patchy snow possible": setWeather("snow"); break;
      case "Patchy sleet possible": setWeather("snow"); break;
      case "Patchy light snow": setWeather("snow"); break;
      case "Light snow": setWeather("snow"); break;
      case "Patchy moderate snow": setWeather("snow"); break;
      case "Patchy heavy snow": setWeather("snow"); break;
      case "Heavy snow": setWeather("snow"); break;
      case "Moderate snow": setWeather("snow"); break;
      case "Blowing snow": setWeather("snow"); break;
      case "Blizzard": setWeather("snow"); break;
      case "Thundery outbreak possible": setWeather("thunder"); break;
    }
    const imgSrc = "./" + theme + "/" + weather + ".png";
    const homeSrc = "./" + theme + "/32/Home.svg";
    const pinSrc = "./" + theme + "/32/Pin.svg";
    const heartSrc = "./" + theme + "/32/Heart.svg";
    const userSrc = "./" + theme + "/32/User.svg";

    return(
        <div className={theme === "day" ? "w-1/2 h-full bg-gray-100 flex justify-center items-center" : "w-1/2 h-full bg-slate-900 flex justify-center items-center text-white"}>
            <div className="w-[414px] h-[828px] rounded-3xl flex items-center z-30 shadow-lg backdrop-blur-md flex-col">
              <div className="w-5/6 h-32 flex">
                <div className="w-4/5 h-full flex flex-col">
                  <div className="mt-12 text-gray-400">{format(new Date(), "MMMM dd, yyyy")}</div>
                  <div className="font-bold text-5xl">{loc}</div>
                </div>
                <img src="./localization_icon.svg" alt="loc" className="w-12 h-12 mt-16"/>
                </div>
              <div>
                <img src={imgSrc} alt={theme} className="w-[350px] mt-[50px]"/>
              </div>
                <div className={theme === "day" ? "text-[100px] font-bold bg-gradient-to-b from-black to-gray-100 text-transparent bg-clip-text" : "text-[100px] font-bold bg-gradient-to-b from-white to-gray-900 text-transparent bg-clip-text"}>
                    {temp}°
                </div>
                <div className={theme === "day" ? "font-bold capitalize text-[20px] text-blue-700" : "font-bold capitalize text-[20px] text-orange-500"}>{weatherText}</div>
                <div className="flex gap-[40px] mt-[50px]">
                    <img src={homeSrc} alt="home"/>
                    <img src={pinSrc} alt="pin"/>
                    <img src={heartSrc} alt="heart"/>
                    <img src={userSrc} alt="user"/>
                </div>
            </div>
        </div>
    )
}

export default Content;