import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const apiKey = '79dd54e53b847faee89cbc053c0c5013';

export default{
  getCity(city){
    return axios.get(baseUrl + 'weather?q=' + city + '&units=metric&lang=pt_br&APPID=' + apiKey);
  }
}