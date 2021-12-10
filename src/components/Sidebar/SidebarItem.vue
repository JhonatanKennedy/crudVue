<template>
  <div class="sidebarItemContainer" :class="{activeItem: isActive }" @click="onHandleClick()">
    <div class="iconContainer" >
      <i :class="icon"/>
    </div>
    <div class="textItem" :class="{textItemOpened: isOpen}">
      <b>{{this.name}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props:{
    name:{
      type:String
    },
    icon:{
      type:String
    },
    to:{
      type:String
    },
    isOpen:{
      type:Boolean
    }
  },
  data(){
    return{
      isActive:false
    }
  },
  created(){
    if (this.$router.currentRoute.path === this.to) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
  methods:{
    onHandleClick() {
      if (this.$router.currentRoute.path != this.to) {
        this.$router.push({ path: this.to });
        this.$store.state.sideItemActive = this.name;
      }
    }
  },
  watch: {
    $route({ path }, from) {
      if (path === this.to) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  }
}
</script>

<style scoped>
.sidebarItemContainer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0 10px 10px;
  cursor: pointer;
  margin-left: 10px;
}
.iconContainer{
  height: 100%;
  font-size: 2rem;
  color: #9AB3E7;
  display: flex;
}
.sidebarItemContainer:hover .iconContainer{
  transform: translate(10px);
  transition: 0.3s;
}
.sidebarItemContainer:hover .textItem{
  transform: translate(10px);
  transition: 0.3s;
}
.textItem{
  visibility: hidden;
  height: 0;
  width: 0;
}
.textItemOpened{
  color: #9AB3E7;
  visibility: visible;
  height: 100%;
  padding: 0px 5px;
  margin-left: 5px;
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.activeItem {
  max-width: 97%;
  background-color: #f8f9fc;
  border-radius: 15px 0 0 15px;
}
.activeItem .iconContainer,.activeItem .textItem{
    color: #365ecd;
}



</style>