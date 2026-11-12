# Portfolio — Dylan Peltier

Portfolio personnel de développeur web, réalisé avec **React**, **TypeScript** et **Bootstrap**, et propulsé par **Vite**.

Il présente mon parcours, mes compétences et mes projets, et permet de télécharger mon CV.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

## Sections

- **Accueil** : présentation rapide, liens vers GitHub et LinkedIn
- **À propos** : reconversion, formation et téléchargement du CV
- **Compétences** : technologies maîtrisées (back-end, front-end, outils) et en cours d'apprentissage
- **Projets** : sélection de projets réalisés ou en cours

Les sections **Parcours** et **Contact** sont en cours de réalisation.

## Stack technique

| Catégorie  | Outils                                  |
| ---------- | --------------------------------------- |
| Framework  | React 19, React Router                  |
| Langage    | TypeScript                              |
| Style      | Bootstrap 5, CSS                        |
| Icônes     | Font Awesome                            |
| Build      | Vite                                    |
| Lint       | Oxlint                                  |

## Installation

Prérequis : [Node.js](https://nodejs.org/) (version 20 ou plus) et npm.

```bash
git clone https://github.com/Dylanpel/Portfolio.git
cd Portfolio
npm install
```

## Scripts

| Commande          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement                  |
| `npm run build`   | Vérifie les types puis génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production en local       |
| `npm run lint`    | Analyse le code avec Oxlint                        |

## Structure du projet

```
portfolio/
├── public/              # Fichiers statiques (favicon, CV)
├── src/
│   ├── assets/          # Polices et images
│   ├── components/      # Composants (Navbar, Hero, About, Skills, Projects…)
│   ├── pages/           # Pages (Home)
│   ├── App.tsx          # Routage
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── index.html
└── vite.config.ts
```

## Contact

- GitHub : [@Dylanpel](https://github.com/Dylanpel)
- LinkedIn : [Dylan Peltier](https://www.linkedin.com/in/dylan-peltier-51597a33a/)
