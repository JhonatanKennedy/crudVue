import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const apiKey = '79dd54e53b847faee89cbc053c0c5013';

export default{
  getCity(city,country){
    const cityCountry = city + ',' + country
    return axios.get(baseUrl + 'weather?q=' + cityCountry + '&units=metric&APPID=' + apiKey);
  }
}