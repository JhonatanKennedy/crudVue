<template>
  <div>
    <nav class="navbar" :class="{navbarOpen: isOpen}">
      <sidebar-logo :isOpen="isOpen"/>
      <div class="navBody" :class="{navbarBodyOpen: isOpen}">
        <sidebar-item icon="fas fa-home" :isOpen="isOpen" name="Home" to="/"/>
        <sidebar-item icon="fas fa-history" :isOpen="isOpen" name="History" to="/history"/>
        <sidebar-item icon="fas fa-user" :isOpen="isOpen" name="About" to="/about"/>  
      </div>
      <div class="navFooter" :class="{navFooterOpen: isOpen}">
        <i class="fas fa-angle-double-right" @click="handleOpenNavbar()"/>
      </div>
    </nav>
    <div class="backSidebar" :class="{backSidebarOpen:isOpen}">
    </div>
  </div>
</template>

<script>
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./SidebarItem.vue";

export default {
  name:"Sidebar",
  components:{
    SidebarLogo,
    SidebarItem
  },
  data(){
    return{
      isOpen:false
    }
  },
  methods:{
    handleOpenNavbar(){
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.backSidebar{
  width: 70px;
  height: 100%;
  z-index: -1000;
  transition: width 0.3s;
}
.backSidebarOpen{
  width: 250px;
  height: 100%;
  z-index: -1000;
}
.navbar{
  position: fixed;
  z-index: 100;
  height: 100vh;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #365ecd;
  transition: width 0.3s;
}
.navBody{
  width: 100%;
  height: 100%;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navFooter{
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s;
}
.navbarOpen{
  width: 250px;
  transition: 0.3s;
}
.navbarBodyOpen{
  width: 100%;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.navFooter i{
  cursor: pointer;
  color: #9AB3E7;
  font-size: 1.5rem;
}
.navFooterOpen{
  transform: rotate(-180deg);
  transition: 0.3s;
} 
</style>