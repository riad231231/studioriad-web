# Automatisation du déploiement via GitHub

C'est une excellente idée ! Automatiser le déploiement va vous faire gagner beaucoup de temps. Comme je ne peux pas me connecter directement à votre FTP pour des raisons de sécurité, la meilleure méthode est d'utiliser **GitHub Actions**.

Chaque fois que vous enverrez vos modifications sur GitHub ("push"), GitHub va automatiquement :
1. Construire votre site (fabriquer le dossier `out`)
2. Envoyer les fichiers modifiés sur votre FTP

## Étape 1 : Préparation sur GitHub

1. Allez sur votre dépôt GitHub.
2. Cliquez sur l'onglet **Settings** (Paramètres) en haut.
3. Dans la colonne de gauche, cliquez sur **Secrets and variables** > **Actions**.
4. Cliquez sur le bouton vert **New repository secret**.

Vous devez ajouter les 3 "secrets" suivants (copiez exactement ces noms en majuscules) :

| Nom du Secret | Valeur à entrer |
|---------------|-----------------|
| `FTP_SERVER` | L'adresse de votre serveur FTP (ex: `ftp.monsite.com` ou une IP) |
| `FTP_USERNAME` | Votre identifiant FTP |
| `FTP_PASSWORD` | Votre mot de passe FTP |

*(Ces informations sont cryptées et sécurisées par GitHub)*

## Étape 2 : Vérification du dossier de destination

Dans le fichier que j'ai créé (`.github/workflows/ftp-deploy.yml`), j'ai configuré le dossier de destination sur le serveur à :
`server-dir: ./public_html/`

Si votre hébergeur utilise un autre nom de dossier (comme `www/` ou `htdocs/`), vous devrez modifier cette ligne dans le fichier.

## Étape 3 : Envoyer les modifications

Une fois les secrets configurés sur le site GitHub :

1. Faites vos modifications sur votre ordinateur.
2. Envoyez-les sur GitHub :
   ```bash
   git add .
   git commit -m "Mise à jour du site"
   git push origin main
   ```
3. Allez dans l'onglet **Actions** sur GitHub : vous verrez le déploiement se lancer tout seul 🚀.
