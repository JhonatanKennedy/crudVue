<template>
  <div class="container">
    <div class="card mt-3 mb-3 p-6 level" >
      <div id="teste" class="level-item">
        <div class="level-item">
          Cidade:
          <br>
          <p>{{ this.name }}</p>
        </div>
      </div>
      <div class="level-item">
        Clima:
        <p>{{ this.weather.description }}</p>
      </div>
      <div class="level-item">
        teste
      </div>
      <div class="level-item">
        teste
      </div>
      <div class="level-item">
        Remover x
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
    country:{
      type:String
    }
  },
  data(){
    return{
      weather:{},
      city:''
    }
  },
  created(){
    this.getCityWeather();
  },
  methods:{
    getCityWeather(){
      Service.getCity(this.city,this.country).then((response) =>{
        this.weather = response.data.weather[0];
        this.city = response.data.name
        console.log(response.data)
      })
    }
  }
  //https://openweathermap.org/weather-conditions
}
</script>

<style scoped>

</style>