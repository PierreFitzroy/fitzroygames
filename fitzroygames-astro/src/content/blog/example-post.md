---
# ═══════════════════════════════════════════════════════════
# GABARIT D'ARTICLE — copie ce fichier, renomme-le
# (le nom de fichier devient l'URL, ex: mon-article.md → /blog/mon-article/)
# et remplis les champs ci-dessous. Champs disponibles :
#   title       (obligatoire) — titre affiché
#   description (obligatoire) — résumé pour le SEO et la carte de liste
#   date        (obligatoire) — format AAAA-MM-JJ
#   category    (optionnel)   — ex: "Coulisses", "Actualité", "Cyclisme"
#   image       (optionnel)   — nom de fichier dans src/assets/blog/
#   draft       (optionnel)   — true = pas encore publié, n'apparaît pas sur le site
# ═══════════════════════════════════════════════════════════
title: "Bienvenue sur le blog Fitzroy Games"
description: "On lance le blog de Fitzroy Games : coulisses de développement, actualités et récits de cyclisme avant la sortie de Team Spirit."
date: 2026-08-14
category: "Actualité"
draft: false
---

Bienvenue sur le blog de Fitzroy Games ! On y partagera les coulisses du développement de **Team Spirit**, notre premier jeu, ainsi que des actualités et des récits liés au cyclisme.

## Comment ça marche

Chaque article de ce blog est un simple fichier Markdown dans `src/content/blog/`. Pas besoin de toucher au HTML ou au CSS : le style vient automatiquement du site.

Pour publier un nouvel article :

1. Duplique ce fichier (`example-post.md`) et renomme-le — le nom de fichier devient l'adresse de l'article
2. Remplace le titre, la description, la date et la catégorie dans l'en-tête
3. Écris le contenu en dessous, en Markdown
4. Commit et push — l'article apparaît automatiquement dans la liste du blog, trié par date

> Pas de carte à ajouter à la main, pas de nav à dupliquer : tout est généré à partir de ce fichier.

## Et les images ?

Place tes images dans `src/assets/blog/`, puis référence-les dans le contenu avec la syntaxe Markdown habituelle : `![description](../../assets/blog/mon-image.jpg)`. Elles seront automatiquement optimisées au moment du build.

À bientôt pour les prochaines actualités !
