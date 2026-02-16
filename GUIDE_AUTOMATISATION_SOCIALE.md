# Automatisation des Réseaux Sociaux (Facebook, Insta, TikTok)

## Le Concept
Au lieu de te connecter à chaque application, tu pilotes tout depuis VS Code grâce à des fichiers.
C'est le principe du **"GitOps"** appliqué aux réseaux sociaux : **Ton contenu est du code.**

## Structure
- `social/drafts/` : Tes brouillons de posts.
- `social/published/` : Archive des posts envoyés.
- `social/templates/` : Modèles pour aller plus vite.

## Comment publier ?

### 1. Créer un post
Copie le modèle `social/templates/modele-post.md` dans `social/drafts/mon-nouveau-post.md`.
Remplis les champs :
- **Titre** : Pour ton organisation.
- **Date** : Quand publier (optionnel).
- **Plateformes** : `['facebook', 'instagram', 'tiktok']`.
- **Contenu** : Le texte de ton post.
- **Image/Vidéo** : Le chemin vers le fichier média.

### 2. L'Automatisation (La partie magique)
Pour que VS Code "parle" à Facebook/Instagram/TikTok, il faut un intermédiaire car leurs APIs sont complexes.
La solution la plus simple et robuste est d'utiliser un outil "No-Code" comme **Make.com** (ex-Integromat) ou **Zapier**.

**Le Workflow :**
1. VS Code envoie le contenu à un **Webhook** (une URL secrète fournie par Make).
2. Make reçoit les données (Image + Texte).
3. Make publie automatiquement sur les 3 réseaux.

### 3. Mise en place technique
1. **Créer un compte Make (Gratuit)**.
2. Créer un nouveau scénario :
   - Trigger : **Webhooks** > "Custom Webhook".
   - Actions suivantes :
     - **Facebook Groups/Pages** > "Create a Post".
     - **Instagram for Business** > "Create a Photo/Video Post".
     - **TikTok** > "Upload a Video".
3. Copier l'URL du Webhook de Make.
4. Ajouter cette URL dans un fichier `.env` à la racine du projet :
   ```bash
   MAKE_WEBHOOK_URL="https://hook.eu1.make.com/..."
   ```

### 4. Lancer la publication
Une fois ton fichier prêt dans `social/drafts/`, lance la commande :
```bash
npm run social:publish
```
Le script va lire le fichier, l'envoyer au Webhook, et déplacer le fichier dans `social/published/`.

---

## Astuce de Dev
Tu peux utiliser l'IA (moi !) pour générer le contenu du fichier Markdown à partir de tes articles de blog ou de tes nouvelles photos.
Demande-moi : *"Génère un post social pour la nouvelle photo du photobooth"* et je créerai le fichier dans `drafts/`.
