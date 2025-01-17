import { useEffect, useState } from "react";
import Content from "./Content";
import Logo from "./Logo";
import Search from "./Search";
import getCity from "./getCity";

function App() {
  const [loc, setLoc] = useState("Ulan bator");
  const [weather, setWeather] = useState(["windy","thunder"]);
  const [temp, setTemp] = useState([10.2,-1.1]);
  const [updatedData, setUpdatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [airQ, setAirQ] = useState([]);

  const weatherApiKey = "196aaa3c4fc44db792e81525251501"
  const getCountries = async () => {
    try{
      
    const response = await fetch("https://countriesnow.space/api/v0.1/countries");
    const result = await response.json();
    const data = result.data;
    const updatedData = getCity(data);
      setUpdatedData(updatedData);
    } catch(error){
      console.log(error);
    }
  }
  

  const getWeather = async (loc) => {
    try{
      setLoading(true);
      const respWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${loc}&aqi=yes`);
      const rWeather = await respWeather.json();
      setLoading(false);
      console.log(rWeather);
      const temp = [rWeather.forecast.forecastday[0].hour[12].temp_c,rWeather.forecast.forecastday[0].hour[23].temp_c];
      setTemp(temp);
      const weather = [rWeather.forecast.forecastday[0].hour[12].condition.text,rWeather.forecast.forecastday[0].hour[23].condition.text]
      const airQ = [rWeather.forecast.forecastday[0].hour[12].air_quality,rWeather.forecast.forecastday[0].hour[12].air_quality];
      setAirQ(airQ);
      setWeather(weather);
      
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
    getWeather(loc);
  },[]
  )
  if(loading){
    return(
      <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-sans">
        <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full border-[8px] border-x-white border-y-slate-950 animate-spin"></div>
        </div>
        <Search updatedData = {updatedData} loc = {loc} setLoc = {setLoc} getWeather = {getWeather}/>
        <Logo />
        <div className="w-1/2 h-full bg-slate-900 flex justify-center items-center text-white rounded-bl-3xl">
          <div className="w-[50px] h-[50px] rounded-full border-[8px] border-x-slate-950 border-y-gray-100 animate-spin"></div>
        </div>
      </div>
    )
  }
  else{
  return(
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-sans">
      <Content loc = {loc} temp = {temp[0]} theme = "day" weatherText = {weather[0]} airQ = {airQ[0]}/>
      <Search updatedData = {updatedData} loc = {loc} setLoc = {setLoc} getWeather = {getWeather}/>
      <Logo />
      <Content loc = {loc} temp = {temp[1]} theme = "night" weatherText = {weather[1]} airQ = {airQ[1]}/>
    </div>
  )}
  
}

export default App;