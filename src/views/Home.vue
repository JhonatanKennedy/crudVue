<template>
  <div class="hero" style="flex:1">
    <div class="hero-body">
      <div class="level"> 
        <div class="level-left">
          <h1 class="is-size-3">Home</h1>
        </div>
        <div class="level-item">
          <input type="text" size="40" @keyup.enter="onHandleSearch" v-model="search" placeholder="ex: brasilia">
          <div class="errorContainer">
            <span class="errorHidden" :class="{errorVisible: error}">
              Cidade digitada inválida
            </span>
          </div>
          <button @click="onHandleSearch"  id="buttonAdd">
            <i class="fas fa-plus"/>
          </button>
        </div>
      </div>
      <div class="box" :key="cities">
        <div v-for="(city) in cities" :key="city">
          <card-city :city="city"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCity from "../components/CardCity/CardCity.vue";
import Service from "../services";

export default {
  name: 'home',
  components:{
    CardCity,
  },
  data(){
    return{
      search:'',
      cities:[
        'brasilia',
        'new york',
        'london',
        'tokyo',
        'paris'
      ],
      error:false
    }
  },
  created(){
    this.$store.state.historyCities = this.cities;
  },
  methods:{
    onHandleSearch(){
      Service.getCity(this.search).then(() => {
        let cities = this.cities;
        const isIncities = cities.findIndex((el) => el == this.search);

        if(isIncities == -1){
          cities.push(this.search);
          this.cities = cities
        }
          this.error = false;
      }).catch(() => {
        this.error = true;
      });
    }
  },
  computed:{  
    getCityRemove(){
      return this.$store.state.cityToRemove;
    }
  },
  watch:{
    getCityRemove(newValue){
      const isIncities = this.cities.findIndex((el) => el == newValue);
      if(isIncities != -1){
        this.cities.splice(isIncities,1);
      } 
    },
  }
}
</script>
<style scoped>

input{
  border: none;
  border-bottom: 2px solid grey;
  font-size: 20px;
  background-color: #f8f9fc;
}
input[type="text"]{
  color: rgb(92, 91, 91);
}
input:focus{
  outline: none;
}

#buttonAdd{
  font-size: 20px;
  border: none;
  background-color: #f8f9fc;
  cursor: pointer;
  color: grey;
  left: 300px;
}

@keyframes bigger{
  33%{
    font-size: 20px;
  }
  66%{
    font-size: 30px;
  }
  100%{
    font-size: 20px;
  }
}
#buttonAdd:hover{
  animation-name: bigger;
  animation-duration: 0.5s;
}
.errorContainer{
  position: relative;
  width: 0;
}
.errorHidden{
  visibility: hidden;
}
.errorVisible{
  visibility: visible;
  position: absolute;
  color: red;
  width: 200px;
  top: 15px;
  right: 120px;
}
</style>