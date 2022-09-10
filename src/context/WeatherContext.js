import {createContext, useState, useEffect, useContext} from 'react';
import CityDatas from "../data/CityDatas.json";
import axios from "axios";


const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const keyApi = "87424dc183444562af510be72e2a3aa0";
    const [weather, setWeather] = useState();
    const [locations, setLocations] = useState(CityDatas[0]);

    const getWeather = async () => {
        await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${locations.lat}&lon=${locations.lon}&days=7&key=${keyApi}`)
          .then((data)=>{
            setWeather(data.data);})};

    console.log(weather);
    
    useEffect(()=> {getWeather(); },[locations]);




  const gunler = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date();
  let todayDate = date.toLocaleDateString();
  let getDay = date.getDay();
  let day;

  switch (getDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "";
  }
    
    const values = {
        locations,
        setLocations,
        weather,
        setWeather,
        getWeather,
        day,
        gunler,
        getDay,
        todayDate,
    }
  

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

const useWeather = () => useContext(WeatherContext);

export { useWeather };

export default WeatherContext