<template>
  <div class="navbarItem" :class="{navbarItemOpened: isOpen}" @click="onHandleClick()"> 
    <div :class="{iconContainerOpen: isOpen}">
      <i :class="icon"/>
    </div>
    <div class="navbarText">
      <b>{{this.name}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavbarItem',
  props:{
    isOpen:{
      type:Boolean
    },
    icon:{
      type:String
    },
    name:{
      type:String
    },
    to:{
      type:String
    }
  },
  methods:{
    onHandleClick() {
      if (this.$router.currentRoute.path != this.to) {
        this.$router.push({ path: this.to });
      }
    }
  },
}
</script>

<style scoped>
.navbarItem{
  position: relative;
  visibility: hidden;
  width: 0;
  height: 0;
  transition: width 0.5s;
}
.navbarItemOpened{
  visibility: visible;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 9px 8px 16px -8px rgba(0,0,0,0.48);
  background-color: white;
}
.iconContainerOpen{
  font-size: 20px;
  color: #9AB3E7;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbarText{
  position: absolute;
  right: 55px;
}
</style>