# Fitzroy Games — site + blog (Astro)

Site du studio Fitzroy Games, migré vers [Astro](https://astro.build). Génère du HTML statique, déployé sur GitHub Pages via une GitHub Action à chaque push sur `main`.

## Structure

```
src/
  layouts/Layout.astro       nav + footer partagés, head (SEO, polices, RSS)
  styles/global.css          variables de couleur, typographie, boutons
  pages/
    index.astro               page d'accueil
    blog/index.astro          liste des articles (générée depuis la collection)
    blog/[slug].astro         page d'un article
    rss.xml.js                flux RSS du blog
  content/blog/*.md            un fichier = un article
  content.config.ts            schéma des articles (titre, date, catégorie...)
  assets/                      images (optimisées automatiquement au build)
public/
  CNAME                        domaine fitzroy.games (ne pas supprimer)
  favicon.png
.github/workflows/deploy.yml   build + déploiement automatique
```

## Développer en local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/ (pour vérifier avant de pousser, optionnel)
```

## Publier un nouvel article

1. Dans `src/content/blog/`, duplique `example-post.md` et renomme-le (le nom de fichier devient l'URL : `mon-article.md` → `/blog/mon-article/`)
2. Remplace `title`, `description`, `date`, `category` dans l'en-tête, puis écris le contenu en Markdown en dessous
3. `git add`, `git commit`, `git push`

L'article apparaît automatiquement dans `/blog/`, trié par date — rien d'autre à modifier. Mets `draft: true` dans l'en-tête pour écrire un article sans le publier tout de suite.

Pour ajouter une image : place le fichier dans `src/assets/blog/`, puis dans le Markdown : `![description](../../assets/blog/mon-image.jpg)`.

## Déploiement

Le déploiement est **automatique** : chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui build le site et le publie sur GitHub Pages. Rien à faire manuellement.

**Réglage à faire une seule fois** dans le repo GitHub : Settings → Pages → Build and deployment → Source → choisir **"GitHub Actions"** (au lieu de "Deploy from a branch"). Sans ce réglage, le déploiement automatique ne fonctionnera pas.

## Ce qui a changé par rapport à l'ancien site

- Une seule page HTML de 1,4 Mo (images encodées en base64) → pages générées à partir de composants, images optimisées automatiquement (ex. la boîte du jeu : 2,5 Mo → 44 Ko en WebP)
- Blog en Markdown avec page de liste et flux RSS générés automatiquement, au lieu de dupliquer du HTML à chaque article
- Sitemap généré automatiquement pour le SEO
