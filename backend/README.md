# U-Report Cocody - Backend

Ce dossier représente l'API Serveur de U-Report Cocody. Il sera responsable de la gestion des données, de la sécurité, de l'authentification et de toute la logique métier de la plateforme.

## 🛠 Stack Technique

- **Environnement** : [Node.js](https://nodejs.org/)
- **Framework Web** : [Express.js](https://expressjs.com/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Utilitaires Dev** : `ts-node-dev` pour le rechargement à chaud (Hot Reloading)

## 📂 Structure actuelle et visée

```text
backend/
├── src/
│   ├── routes/             # Définition des l'URL de l'API (endpoints)
│   ├── controllers/        # Logique des requêtes (à venir)
│   ├── models/             # Modèles de base de données (à venir)
│   ├── middlewares/        # Fonctions de vérification/sécurité (à venir)
│   └── server.ts           # Point d'entrée principal du serveur
├── .env                    # Variables d'environnement (Port, URLs Base de données)
└── tsconfig.json           # Configuration TypeScript du serveur
```

## 📜 Scripts Disponibles

Dans ce répertoire, vous pouvez lancer :

- `npm run dev`: Lance le serveur avec rechargement automatique à chaque modification de fichier (`ts-node-dev`).
- `npm run build`: Compile le code TypeScript en JavaScript pur dans un dossier `dist/`.
- `npm start`: Lance le serveur de production (après avoir effectué un build) en exécutant `node dist/server.js`.

## 🌐 Endpoints (Développement)
- **`GET /`** : Statut du serveur API.
- **`GET /health`** : Vérification de la santé de l'API.
- **`GET /api/articles`** : (Route d'exemple pour s'assurer que le routage fonctionne).

## 💡 Prochaines Étapes
- Mettre en place la base de données (MongoDB, PostgreSQL, etc.).
- Gérer l'authentification avec JWT (JSON Web Tokens) pour sécuriser le tableau de bord administrateur (Frontend).
- Reflêter et migrer le mock entier de `mockData.ts` vers de vrais modèles base de données.
