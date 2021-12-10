<template>
  <div class="container">
    <div class="card mt-3 mb-3 p-6 level" >
      <div id="teste" class="level-item">
        <div id="teste">
          <i class="fas fa-cloud-sun"/>
          teste
        </div>
      </div>
      <div class="level-item">
        teste
      </div>
      <div class="level-item">
        teste
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
  methods:{
    getCityWeather(){
      Service.getCity(this.city,this.cou).then((res) =>{
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
i{
  font-size: 5rem;
}
#teste{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>