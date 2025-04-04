# BreizhSport Frontend

Une application e-commerce moderne développée avec Nuxt 3 pour la vente de matériel sportif en Bretagne.

## 🌟 Fonctionnalités

- Authentification utilisateur (inscription/connexion)
- Gestion du panier d'achat
- Catalogue de produits
- Interface d'administration
- Gestion des profils utilisateurs
- Système de recherche de produits
- Interface responsive

## 🛠 Technologies Utilisées

- **Framework**: Nuxt.js 3
- **UI Framework**: Vuetify 3
- **State Management**: Pinia
- **Icons**: Material Design Icons, Nuxt Icon
- **Styling**: SCSS
- **Type Checking**: TypeScript
- **Container**: Docker

### Principales Dépendances

```json
{
  "dependencies": {
    "@mdi/font": "^7.4.47",
    "@nuxtjs/google-fonts": "^3.2.0",
    "@pinia-plugin-persistedstate/nuxt": "^1.2.1",
    "@pinia/nuxt": "^0.10.1",
    "nuxt": "^3.16.0",
    "vuetify-nuxt-module": "^0.18.3"
  }
}
```

## 📋 Prérequis

- Node.js 20.x ou supérieur
- npm, yarn, ou pnpm

## 🚀 Installation

1. Cloner le repository:

```bash
git clone <repository-url>
cd breizhsport-frontend
```

2. Installer les dépendances:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configuration environnement:
   Créer un fichier `.env` à la racine du projet:

```env
NUXT_PUBLIC_API_BASE=http://localhost:8000
```

## 💻 Développement

Lancer le serveur de développement:

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:3000`

## 🏗 Production

1. Build de l'application:

```bash
npm run build
# ou
yarn build
```

2. Prévisualiser le build:

```bash
npm run preview
# ou
yarn preview
```

## 🐳 Docker

1. Build de l'image:

```bash
docker build -t breizhsport-frontend .
```

2. Lancer le conteneur:

```bash
docker run -p 3000:3000 breizhsport-frontend
```

Ou utiliser docker-compose:

```bash
docker-compose up -d
```

## 📁 Structure du Projet

```
breizhsport-frontend/
├── components/          # Composants réutilisables
├── interfaces/         # Types TypeScript
├── layouts/           # Layouts de l'application
├── middleware/        # Middleware Nuxt
├── pages/            # Routes de l'application
├── public/           # Fichiers statiques
├── stores/           # Stores Pinia
├── docker/           # Configuration Docker
└── ... configuration files
```

## 🔐 Authentification

L'application utilise un système d'authentification JWT avec:

- Login/Signup
- Protection des routes
- Gestion des tokens
- Middleware d'authentification

## 🛒 Gestion du Panier

- Ajout/Suppression de produits
- Calcul automatique du total
- Persistence des données
- Interface de panier latéral

## 👥 Contributeurs

- [@PabloMangion](https://github.com/PabloMangion)
- [@Rhayonne](https://github.com/RhayonneMartins)
- [@Bousoir](https://github.com/Bouisr)

## 📄 License

[GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html)

## 🤝 Support

Pour toute question ou problème, veuillez ouvrir une issue dans le repository.

<!--============================================================================================-->
<!--                                     LANGUAGE SEPARATOR                                      -->
<!--============================================================================================-->
<div align="center">
  <img src="https://img.shields.io/badge/🇫🇷_French_Above_/_English_Below_🇬🇧-546e7a?style=for-the-badge" alt="Language Separator">
</div>
<!--============================================================================================-->

# BreizhSport Frontend

A modern e-commerce application developed with Nuxt 3 for selling sports equipment in Brittany.

## 🌟 Features

- User authentication (signup/login)
- Shopping cart management
- Product catalog
- Admin interface
- User profile management
- Product search system
- Responsive interface

## 🛠 Technologies Used

- **Framework**: Nuxt.js 3
- **UI Framework**: Vuetify 3
- **State Management**: Pinia
- **Icons**: Material Design Icons, Nuxt Icon
- **Styling**: SCSS
- **Type Checking**: TypeScript
- **Container**: Docker

### Main Dependencies

```json
{
  "dependencies": {
    "@mdi/font": "^7.4.47",
    "@nuxtjs/google-fonts": "^3.2.0",
    "@pinia-plugin-persistedstate/nuxt": "^1.2.1",
    "@pinia/nuxt": "^0.10.1",
    "nuxt": "^3.16.0",
    "vuetify-nuxt-module": "^0.18.3"
  }
}
```

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd breizhsport-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Environment configuration:
   Create a `.env` file in the project root:

```env
NUXT_PUBLIC_API_BASE=http://localhost:8000
```

## 💻 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be accessible at `http://localhost:3000`

## 🏗 Production

1. Build the application:

```bash
npm run build
# or
yarn build
```

2. Preview the build:

```bash
npm run preview
# or
yarn preview
```

## 🐳 Docker

1. Build the image:

```bash
docker build -t breizhsport-frontend .
```

2. Run the container:

```bash
docker run -p 3000:3000 breizhsport-frontend
```

Or use docker-compose:

```bash
docker-compose up -d
```

## 📁 Project Structure

```
breizhsport-frontend/
├── components/          # Reusable components
├── interfaces/         # TypeScript types
├── layouts/           # Application layouts
├── middleware/        # Nuxt middleware
├── pages/            # Application routes
├── public/           # Static files
├── stores/           # Pinia stores
├── docker/           # Docker configuration
└── ... configuration files
```

## 🔐 Authentication

The application uses a JWT authentication system with:

- Login/Signup
- Route protection
- Token management
- Authentication middleware

## 🛒 Shopping Cart Management

- Add/Remove products
- Automatic total calculation
- Data persistence
- Side cart interface

## 👥 Contributors

- [@PabloMangion](https://github.com/PabloMangion)
- [@Rhayonne](https://github.com/RhayonneMartins)
- [@Bousoir](https://github.com/Bouisr)

## 📄 License

[GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html)

## 🤝 Support

For any questions or issues, please open an issue in the repository.
