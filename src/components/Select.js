import React from 'react';
import {useWeather} from '../context/WeatherContext';
import CityJSON from "../data/CityDatas.json"

function Select() {
    const {locations, setLocations, day, todayDate} = useWeather();

    const changeLocation = (e) => {
        for (let i = 0; i < 3; i++) {
            if (e.target.value === CityJSON[i].city_name) {
              setLocations(CityJSON[i]);
        }
    }
}

  return (
    <div className="select col-8">
        <select name="citys" value={locations.city_name} onChange={changeLocation} className="selection">
        {CityJSON.map((item, key) => (
            <option key={key} value={item.city_name}>
              {item.city_name}
            </option>
          ))}
        </select>
        <div className='dateContainer'>
          <h3 className="date">
            <span>Today: {todayDate} {day}</span>
            <br />
          </h3>
        </div>
    </div>
  )
}

export default Select