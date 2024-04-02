import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCloudRain, FaCloudShowersHeavy } from 'react-icons/fa';
import Headingweather from "../components/HeadingWeather";



const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const apiKey = 'b6d0c0fbc79ad7d0f5bc2e8a3525ccfb';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  useEffect(() => {
    fetchWeatherData(); // Fetch weather data on mount
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const position = await getCurrentPosition();
      const params = position
        ? { lat: position.latitude, lon: position.longitude }
        : { q: 'goa' }; // Default to 'goa' if geolocation fails

      const response = await axios.get(apiUrl, { params: { ...params, appid: apiKey, units: 'metric' } });

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => {
            console.error('Error getting user location:', error);
            reject(error);
          }
        );
      } else {
        console.error('Geolocation not supported');
        reject(new Error('Geolocation not supported'));
      }
    });
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      fetchWeatherDataByCity(searchQuery);
    }
  };

  const fetchWeatherDataByCity = async (city) => {
    try {
      const response = await axios.get(apiUrl, { params: { q: city, appid: apiKey, units: 'metric' } });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const groupByDay = () => {
    if (!weatherData || !weatherData.list) return {};
    const groupedData = {};
    weatherData.list.slice(8).forEach((data) => {
      const date = new Date(data.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      if (!groupedData[day]) {
        groupedData[day] = [];
      }
      groupedData[day].push(data);
    });
    return groupedData;
  };

  const getMaxMinTemp = (groupedData) => {
    const result = [];
    for (const day in groupedData) {
      const temperatures = groupedData[day].map((data) => data.main.temp);
      const maxTemp = Math.max(...temperatures);
      const minTemp = Math.min(...temperatures);
      result.push({ day, maxTemp, minTemp });
    }
    return result;
  };

  const groupedData = groupByDay();
  const maxMinTemps = getMaxMinTemp(groupedData);

  return (
    <div className="bg-blue-500 w-full h-screen">
      <div className="bg-blue-500 min-h-screen flex justify-center items-center">
        <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
          <Headingweather />
          <div className="border solid border-black">
            <h1 className="text-4xl font-bold mb-4 flex justify-center">
              {weatherData?.city.name || 'Loading...'}
            </h1>
            {/* Search Input */}
            <div className="flex items-center mb-4 ml-10">
              <input
                type="text"
                placeholder="Enter city"
                className="px-4 py-2 border border-gray-300 mr-2 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            {/* Weather Details */}
            {weatherData && (
              <div>
                <p className="text-2xl mb-4 ml-2">
                  Today's Temperature: {weatherData.list[0].main.temp}°C
                </p>
                <p className="text-xl mb-4 ml-2">
                  Weather Description: {weatherData.list[0].weather[0].description}
                </p>
              </div>
            )}
          </div>
          <div className="border solid border-black">
            <div className="flex flex-wrap">
              {weatherData &&
              weatherData.list.slice(0, 8).map((data) => (
              <div key={data.dt} className="w-1/2 md:w-1/4 lg:w-1/6 p-2 ml-6">
                <p>{formatDateTime(data.dt)}</p>
                <FaCloudRain className="mt-2 ml-1" />
                <p className="font font-semibold mr-3">{data.main.temp}°C</p>
                <p className="border solid border-black w-[10vh] ">
                {data.weather[0].description}
                </p>
              </div>
            ))}
            </div>
          </div>

          <div className="border solid border-black">
            <h2 className="text-2xl font-bold mt-6 mb-2">Temperature and Weather for the Next 5 Days:</h2>
            <div className="border solid border-black">
              <div className="flex flex-wrap">
                {maxMinTemps.map((data) => (
                  <div key={data.day} className="w-1/2 md:w-1/4 lg:w-1/6 p-2 ml-2">
                    <p>{data.day}</p>
                    <FaCloudShowersHeavy className="mt-2" />
                    <p className="font font-semibold">Max: {data.maxTemp}°C</p>
                    <p className="font font-semibold">Min: {data.minTemp}°C</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
