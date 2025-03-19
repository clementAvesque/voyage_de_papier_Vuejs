<template>
    <nav class="nav-footer">
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
    <p>VoyageDePapier.Com 2025 - Mentions légales - Conditions générales de vente - Politique de confidentialité</p>
        
    </nav>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
    .nav-footer{
        background-color: #421318;
        color: white;


    }
    .nav-footer p{
        text-align: center;
    }
  .footer {
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
  
  .footer a {
    text-decoration: none;
    transition: text-decoration 0.3s ease;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }

  body, html {
  margin: 0;
  padding: 0;
}

  </style>
  