<template>
  <div class="navBarContainer" :class="{navBarContainerOpen: isOpen}">
    <div class="buttonNavbar" @click="onHandleClick()">
      <i class="fas fa-times" v-if="isOpen"/>
      <i class="fas fa-bars" v-else/>
    </div>

    <navbar-item :isOpen="isOpen" icon="fas fa-user" name="About" to="/about"/>
    <navbar-item :isOpen="isOpen" icon="fas fa-home" name="Home" to="/"/>

  </div>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";

export default {
  name:'Navbar',
  components:{
    NavbarItem
  },
  data(){
    return{
      isOpen:false
    }
  },
  methods:{
    onHandleClick(){
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style>
.navBarContainer{
  position: fixed;
  bottom: 40px;
  right: 40px;
}

.buttonNavbar{
  font-size: 25px;
  color: #9AB3E7;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background-color: white;
  box-shadow: 9px 8px 16px -8px rgba(0,0,0,0.48);
}
.navBarContainerOpen{
  height: 150px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>