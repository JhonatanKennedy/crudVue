<template>
  <div class="hero " >
    <div class="hero-body">
      <h1 class="is-size-3 title">Home</h1>
        <div class="box column">
          <card-city />
          <card-city />
          <card-city />
          <card-city />
          <card-city />
          <button @click="teste()">teste</button>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
  </div>
</template>

<script>
import CardCity from "../components/CardCity/CardCity.vue";
import Service from "../services.js";

export default {
  name: 'home',
  components:{
    CardCity
  },
  methods:{
    teste(){
      Service.getCity('Cumaru','Br').then((res) =>{
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>

</style>