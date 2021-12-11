<template>
  <div class="columns box mb-5">
    <div class="column level" >
      <div class="rightContainer level-item">
        <i :class="icon" class="is-size-1 m-1"/>
        <div class="m-1">
          <b>{{this.temp}} C°</b>
          <p>Humidade: {{humidity}}% </p>
        </div>
      </div>
    </div>
    <div class="column level">
      <div class="level-item middleContainer">
        <b>{{this.name}}</b>
        <p>{{this.weather}}</p>
      </div>
    </div>
    <div class="column level">
      <div class="level-item" >
      <button id="buttonRemove" @click="onHandleRemove">
        Remover x
      </button>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../services";

export default {
  name:'CardCity',
  props:{
    city:{
      type:String
    },
  },
  data(){
    return{
      weather:'',
      name:'',
      temp:'',
      icon:'',
      description:'',
      humidity:'',
    }
  },
  created(){
    this.getCityWeather();
  },
  methods:{
    getCityWeather(){
      Service.getCity(this.city).then((response) =>{
        const {data} = response;
        const description = data.weather[0].description;
        this.weather = description[0].toUpperCase() + description.slice(1);
        this.name = data.name;
        this.temp = data.main.temp;
        this.humidity = data.main.humidity;
        const icon = data.weather[0].icon;
        this.icon = this.chooseIcon(icon);
      });
    },
    chooseIcon(icon){
        if(icon == '01d' || icon == '01n'){
          return 'far fa-sun';
        }else if(icon == '02d' || icon == '02n'){
          return 'fas fa-cloud-sun';
        }else if(icon == '03d' || icon == '03n'){
          return 'fas fa-cloud';
        }else if(icon == '04d' || icon == '04n'){
          return 'fas fa-cloud';
        }else if(icon == '09d' || icon == '09n'){
          return 'fas fa-cloud-rain';
        }else if(icon == '10d' || icon == '10n'){
          return 'fas fa-cloud-showers-heavy';
        }else if(icon == '11d' || icon == '11n'){
          return 'fas fa-bolt';
        }else if(icon == '13d' || icon == '13n'){
          return 'fas fa-snowflake';
        }else if(icon == '50d' || icon == '50n'){
          return 'fas fa-stream';
        }
    },
    onHandleRemove(){
      this.$store.state.cityToRemove = this.city;
    }
  }
}
</script>

<style scoped>
.rightContainer{
  display: flex;
  align-items: center;
}
.middleContainer{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#buttonRemove{
  font-size: 15px;
  background-color: white;
  border: none;
  cursor: pointer;
  color: #4a4a4a;
}
#buttonRemove:hover{
  background-color: #4a4a4a;
  color: white;
  border-radius: 5px;
}
</style>