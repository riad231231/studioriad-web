# Deployment Guide: GitHub & Netlify

This guide will help you push your project to GitHub and deploy it live on Netlify.

## Prerequisites
-   A [GitHub](https://github.com/) account.
-   A [Netlify](https://www.netlify.com/) account.

---

## Part 1: Push to GitHub

1.  **Create a New Repository**
    -   Go to [GitHub.com](https://github.com/new).
    -   Name your repository (e.g., `studioriad-website`).
    -   Make it **Private** or **Public** (your choice).
    -   **Do not** initialize with README, .gitignore, or license (we already have them).
    -   Click **Create repository**.

2.  **Push Your Code**
    -   Copy the commands under the section **"…or push an existing repository from the command line"**.
    -   It will look like this (replace `YOUR-USERNAME` with your actual username):
        ```bash
        git remote add origin https://github.com/YOUR-USERNAME/studioriad-website.git
        git branch -M main
        git push -u origin main
        ```
    -   Run these commands one by one in your terminal.

---

## Part 2: Deploy to Netlify

1.  **Connect to Netlify**
    -   Log in to [Netlify](https://app.netlify.com/).
    -   Click **"Add new site"** > **"Import from an existing project"**.
    -   Select **GitHub**.
    -   Authorize Netlify to access your GitHub account if asked.
    -   Search for and select your `studioriad-website` repository.

2.  **Configure Build Settings**
    -   Netlify automatically detects Next.js. You should see:
        -   **Build command:** `next build` (or `npm run build`)
        -   **Publish directory:** `.next`
    -   **Important:** I have already configured `next.config.ts` for optimal Netlify deployment (removed static export constraints).
    -   Click **Deploy Site**.

3.  **Finalize**
    -   Netlify will start building your site. This may take 1-2 minutes.
    -   Once finished, you will get a URL (like `random-name.netlify.app`).
    -   You can change this in **Site Settings > Domain Management** to connect your custom domain (`studioriad.com`).

---

## Future Updates

Whenever you want to update your site:
1.  Make changes locally.
2.  Commit your changes:
    ```bash
    git add .
    git commit -m "Description of changes"
    ```
3.  Push to GitHub:
    ```bash
    git push
    ```
4.  Netlify will **automatically** detect the push and redeploy your site!
