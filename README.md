# Plateforme Web U-Report Cocody

Bienvenue sur le dépôt officiel de la plateforme web de **U-Report Cocody**. Cette application est conçue pour être la voix de la jeunesse Ivoirienne, permettant aux jeunes de s'engager, de s'informer et de participer activement au développement de leur commune.

## 🏗 Architecture du Projet

Le projet a été pensé autour d'une architecture moderne de type "monorepo" séparant clairement l'interface utilisateur (Frontend) du serveur applicatif (Backend).

```text
U-REPORT/
├── frontend/      # Application Web (React, Vite, TypeScript, TailwindCSS v4)
└── backend/       # Serveur API (Node.js, Express, TypeScript)
```

## 🚀 Démarrage Rapide

Pour lancer le projet complet en environnement de développement, vous devez démarrer le Backend et le Frontend en parallèle.

### Prérequis
- Node.js (v18 ou supérieur recommandé)
- npm ou yarn

### 1. Lancer le Serveur Backend
```bash
cd backend
npm install
npm run dev
```
Le backend tourne par défaut sur `http://localhost:5000`.

### 2. Lancer l'Application Frontend
Ouvrez un nouveau terminal :
```bash
cd frontend
npm install
npm run dev
```
Le frontend tourne par défaut sur `http://localhost:5173`.

## 📚 Documentation détaillée

Chaque sous-projet possède sa propre documentation détaillée avec les instructions d'architecture et de scripts :

- 📖 [Documentation du Frontend](./frontend/README.md)
- 📖 [Documentation du Backend](./backend/README.md)

## 🤝 Contribution
Toutes les contributions sont les bienvenues. Assurez-vous de respecter les conventions de nommage (PascalCase pour les composants React et les types/interfaces, camelCase pour les fonctions) et de passer les linters avant de proposer une Pull Request.
