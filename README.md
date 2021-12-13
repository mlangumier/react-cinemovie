# Cineflix

Cineflix is an app that will use an API to get information on movies.

## Features

- Movie list
- Movie details
- Routing
- Favorite list

## ETAPE 1 - Mise en place des composants

On créé nos composants et on met en place les imports.
On utilise `Bootstrap 5.1` en CDN afin de gérer rapidement le style du site (je verrais pour utiliser la dépendance `React Bootstrap` plus tard).

## ETAPE 2 - Données dynamiques et évènements

On a créé une liste de films qu'on appelle dynamiquement vers nos composants enfants.
Gestion des `state` et `props` pour transférer les données.
Ecouteur d'évènement pour afficher dans le volet de droite un film de la liste au survol.

## ETAPE 3 - Rendu conditionnel & listes

On a refactorisé notre app pour séparer les composants, ajouter `SCSS`, créé un fichier pour la data. On a itérer sur les composant pour afficher notre liste, créé une icone `loading`, et modifié un peu le style.
