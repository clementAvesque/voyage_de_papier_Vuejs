<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <Header />
  <router-view></router-view> 
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
