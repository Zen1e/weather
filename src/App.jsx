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
  const [weatherText, setWeatherText] = useState([]);
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
      const respWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${loc}`);
      const rWeather = await respWeather.json();
      console.log(rWeather);
      const temp = [rWeather.forecast.forecastday[0].hour[12].temp_c,rWeather.forecast.forecastday[0].hour[23].temp_c];
      setTemp(temp);
      const weather = [rWeather.forecast.forecastday[0].hour[12].condition.text,rWeather.forecast.forecastday[0].hour[23].condition.text]
      setWeather(weather);
      setWeatherText([weather[0],weather[1]]);
      
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
    getWeather(loc);
  },[]
  )

  return(
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-sans">
      <Content loc = {loc} setLoc = {setLoc} weather = {weather[0]} setWeather = {setWeather} temp = {temp[0]} theme = "day" weatherText = {weatherText[0]}/>
      <Search updatedData = {updatedData} loc = {loc} setLoc = {setLoc} getWeather = {getWeather}/>
      <Logo />
      <Content loc = {loc} setLoc = {setLoc} weather = {weather[1]} setWeather = {setWeather} temp = {temp[1]} theme = "night" weatherText = {weatherText[1]}/>
    </div>
  )
  
}

export default App;