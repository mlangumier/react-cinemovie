# CineMovie

CineMovie est un projet qui utilise l'API `https://www.themoviedb.org/` pour récupérer une liste de films, permet à l'utilisateur de sélectionner des favoris (hooks & state), de voir ces favoris sur une autre page (routing), et de sauvegarder cette liste (BDD FireBase).

## Features

- Movie list
- Movie details
- Routing
- Favorite list

## ETAPE 1 - Mise en place des composants

On créé nos composants et on met en place les imports. On utilise `Bootstrap 5.1` en CDN afin de gérer rapidement le style du site (je verrais pour utiliser la dépendance `React Bootstrap` plus tard).

## ETAPE 2 - Données dynamiques et évènements

On a créé une liste de films qu'on appelle dynamiquement vers nos composants enfants. Gestion des `state` et `props` pour transférer les données. Ecouteur d'évènement pour afficher dans le volet de droite un film de la liste au survol.

## ETAPE 3 - Rendu conditionnel & listes

On a refactorisé notre app pour séparer les composants, ajouter `SCSS`, créé un fichier pour la data. On a itérer sur les composant pour afficher notre liste, créé une icone `loading`, et modifié un peu le style.

## ETAPES 4 - Formulaire de recherche & API

On a refactorisé l'appli afin d'utiliser une API sur laquelle on va chercher nos films avec la librairie `Axios` (requêtes GET). On a créé un formulaire de recherche avec `Formik` qui nous permet de cherche des films par titre et de définir la langue de l'affichage des résultats.

## ETAPE 5 - Hooks, Routing & Firebase

On a commencé par refactoriser l'appli pour utiliser les hooks de la version React 16.8 et préparer le terrain pour l'utilisation des routes. On a mis en place les routes avec `React Router` ainsi que la feature d'ajout et enregistrement des favoris sur `Firebase`.
