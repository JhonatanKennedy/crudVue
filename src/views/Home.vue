<template>
  <div class="hero" style="flex:1">
    <div class="hero-body">
      <div class="level"> 
        <div class="level-left">
          <h1 class="is-size-3">Home</h1>
        </div>
        <div class="level-item">
          <input type="text" size="40" v-model="search" placeholder="ex: brasilia,br">
          <button  @click="onHandleSearch()" id="buttonAdd">
            <i class="fas fa-plus"/>
          </button>
        </div>
      </div>
      <div class="box column">
        <div v-for="(item,index) in cities" :key="index">
          <card-city :city="item.city" :country="item.country"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCity from "../components/CardCity/CardCity.vue";


export default {
  name: 'home',
  components:{
    CardCity
  },
  data(){
    return{
      search:'',
      cities:[
        {city:'brasilia',country:'br'},
        {city:'new york',country:'usa'},
        {city:'london',country:'uk'},
        {city:'tokyo',country:'jp'},
        {city:'paris',country:'fr'},
      ],
    }
  },
  created(){
    this.$store.state.historyCities = this.cities;
  },
  methods:{
    onHandleSearch(){
      console.log(this.search)
    }
  },
  computed:{
    getCities(){
      console.log(this.$store.state.cities)
      this.cities = this.$store.state.cities;
    }
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
  color: rgb(66, 66, 66);
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
</style>