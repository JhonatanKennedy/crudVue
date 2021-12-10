<template>
  <div id="container">
    <sidebar id="desktop"/>
    <router-view/>
    <navbar id="mobile"/>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import Navbar from './components/Navbar/Navbar.vue';

export default {
  components:{
    Sidebar,
    Navbar
  }
}

</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,700&display=swap');



@media (max-width: 768px){
  #desktop{
    display: none;
  }
  #container{
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f8f9fc;
  }
}
@media (min-width: 769px){
  #mobile{
    display: none;
  }
  #container{
    width: 100vw;
    height: 100%;
    background-color: #f8f9fc;
    display: flex;
  }
}
</style>
