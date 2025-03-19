<template>
  <nav class="footer">
    <div class="assistances">
      <h1><a href="#" class="hover:underline">Assistance</a></h1>
      <a href="#" class="hover:underline">Service-Client</a>
    </div>
    <div class="reseaux">
      <h1><a href="#" class="hover:underline">Nous Suivre</a></h1>
      <a href="#" class="hover:underline">Instagram</a>
      <a href="#" class="hover:underline">Facebook</a>
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="Logo" class="logo w-10 h-10" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.police {
  font-family: "ltc-nicholas-cochin-pro", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.footer {
  background-color: #421318;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  gap: 2.5rem;
  color: white;
  font-size: 1.125rem;
  padding: 1rem 0;
  margin: 0;

}

.header-nav a {
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

.header-nav a:hover {
  text-decoration: underline;
}

.panier {
  width: 2.5rem;
  height: 2.5rem;
}

body,
html {
  margin: 0;
  padding: 0;
}
</style>