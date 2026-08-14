# Comment intégrer ce projet dans ton repo GitHub

Ce dossier remplace **tout le contenu** de `PierreFitzroy/fitzroygames` (l'ancien `index.html` en une page devient un projet Astro). Voici la marche à suivre depuis ton clone local du repo :

```bash
# 1. Dans ton clone local du repo, supprime tout sauf le dossier .git
cd chemin/vers/fitzroygames
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 2. Copie tout le contenu de ce dossier (fitzroygames-astro/) à la racine du repo
# (remplace CHEMIN_VERS_CE_DOSSIER par l'emplacement où tu as téléchargé ce dossier)
cp -r CHEMIN_VERS_CE_DOSSIER/. .

# 3. Installe les dépendances et vérifie que le build fonctionne
npm install
npm run build

# 4. Commit et push
git add -A
git commit -m "Migration du site vers Astro + ajout du blog"
git push
```

## Réglage à faire une seule fois sur GitHub

Va dans le repo sur github.com → **Settings** → **Pages** → section "Build and deployment" → change **Source** de "Deploy from a branch" vers **"GitHub Actions"**.

Sans ce réglage, le site ne se déploiera pas automatiquement — la GitHub Action (`.github/workflows/deploy.yml`) est déjà prête et se déclenchera à chaque push sur `main`, mais GitHub doit savoir qu'il faut l'utiliser comme source de Pages.

## Après ça

Le déploiement est entièrement automatique : `git push` déclenche le build et la mise en ligne, en général en 1 à 2 minutes. Voir `README.md` pour la structure du projet et comment ajouter un article de blog.
