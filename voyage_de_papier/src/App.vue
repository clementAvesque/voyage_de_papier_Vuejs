<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue'; 
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container">
    <Header />
    <HelloWorld />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


footer {
  margin-top: auto;
}
</style>
