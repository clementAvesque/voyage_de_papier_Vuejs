<template>
    <nav class="header-nav">
      <img src="/img/logo.svg" alt="Logo" class="logo w-10 h-10" />
      <a href="#" class="hover:underline">Accueil</a>
      <a href="#" class="hover:underline">Votre journal</a>
      <a href="#" class="hover:underline">Notre équipe</a>
      <a href="#" class="hover:underline">FAQ</a>
      <img src="/img/panier.svg" alt="Panier" class="panier w-6 h-6" />
    </nav>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>

  .header-nav {
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
  body, html {
  margin: 0;
  padding: 0;
}

  </style>
  