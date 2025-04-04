<template>
  <div class="home-container">
    <!-- 🔹 Grande bannière avec le drapeau de la Bretagne -->
    <div class="banner">
      <div class="banner-overlay">
        <h1>Bienvenue sur Breizh Sport</h1>
        <p>
          Votre boutique en ligne dédiée aux passionnés de sport en Bretagne !
        </p>
      </div>
    </div>

    <!-- 🔹 Section de présentation -->
    <div class="presentation">
      <h2>À propos de Breizh Sport</h2>
      <p>
        Breizh Sport est une boutique en ligne qui vous propose un large choix
        de matériel sportif, adapté à tous les niveaux et disciplines. Que vous
        soyez un athlète confirmé ou un amateur, trouvez tout ce dont vous avez
        besoin pour pratiquer votre sport favori.
      </p>
      <p>
        Nous mettons un point d'honneur à vous offrir des produits de qualité et
        un service irréprochable.
      </p>
    </div>

    <!-- 🔹 Bouton vers les produits -->
    <div class="products-link">
      <NuxtLink to="/products">
        <button class="explore-button">Découvrir les Produits</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* 🔹 Styles généraux */
.home-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

/* 🔹 Bannière qui dépasse les marges de `.content` */
.banner {
  position: relative;
  width: calc(100vw + 9vh); /* 🔹 Compense la marge ajoutée par `.content` */
  height: 400px;
  overflow: hidden;
  margin-left: -9vh; /* 🔹 Déplace la bannière vers la gauche pour couvrir tout l'écran */
  padding: 0;
  background-image: url("/bretagne-flag.jpg");
  background-size: cover;
}

.banner-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(95, 79, 223, 0.921);
  padding: 20px;
  border-radius: 10px;
}

.banner-overlay h1 {
  font-size: 2.5rem;
}

.banner-overlay p {
  font-size: 1.2rem;
}

/* 🔹 Section de présentation */
.presentation {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: justify;
  line-height: 1.6;
}

/* 🔹 Bouton vers les produits */
.products-link {
  margin-top: 30px;
}

.explore-button {
  background-color: #1e293b;
  color: white;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.explore-button:hover {
  background-color: #0056b3;
}
</style>
