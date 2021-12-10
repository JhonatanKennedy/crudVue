<template>
  <div class="logoSidebarContainer" :class="{logoSidebarContainerOpened: isOpen}">
    <img src="../../assets/logo.png" alt="logo"/>
  </div>
</template>

<script>
export default {
  props:{
    isOpen:{
      type:Boolean
    }
  }
}
</script>

<style scoped>
.logoSidebarContainer{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.logoSidebarContainer img{
  width: 50px;

}
.logoSidebarContainerOpened{
  width: 100%;
  display: flex;
  justify-content: center;
}
.logoSidebarContainerOpened img{
  width: 70px;
}
</style>