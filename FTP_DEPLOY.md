# How to Deploy Studio Riad to FTP

This guide explains how to upload your static website to your FTP server.

## Prerequisites

1.  **FTP Credentials**: You need the following from your hosting provider:
    *   **Host/Server Address** (e.g., `ftp.yourdomain.com`)
    *   **Username**
    *   **Password**
    *   **Port** (usually 21)

2.  **FTP Client**: Download and install an FTP client like [FileZilla](https://filezilla-project.org/) or [Cyberduck](https://cyberduck.io/).

## Steps

### 1. Build the Project
We have already run the build command for you. This generated a folder named `out` in your project directory. This folder contains all the static HTML, CSS, and JavaScript files for your website.

If you make changes later, run this command in your terminal before deploying:
```bash
npm run build
```

### 2. Connect to FTP
1.  Open your FTP client (e.g., FileZilla).
2.  Enter your **Host**, **Username**, **Password**, and **Port**.
3.  Click **Quickconnect** (or Connect).

### 3. Locate the Deployment Folder
1.  On the **Remote Site** (server side, typically the right panel), look for a folder named `public_html`, `www`, or `htdocs`. This is where your website files should go.
2.  Double-click to open it.
3.  **Important**: If there are default files (like `index.html` or `default.php`) you may want to delete them or rename them to `backup_index.html` to avoid conflicts.

### 4. Upload Files
1.  On the **Local Site** (your computer side, typically the left panel), navigate to:
    `/Users/imac/Downloads/studioriad/out`
2.  Select **all files and folders** inside the `out` folder (e.g., `_next`, `index.html`, `404.html`, etc.).
3.  **Drag and drop** them into the `public_html` (or `www`) folder on the right.

### 5. Verify
Once the transfer is complete, go to `studioriad.com` (or your domain) in your browser. You should see your new site!

## Troubleshooting

-   **Redirect Loops**: If you see "Too many redirects", try deleting the old `photobooth.html` file on the server if you have a `photobooth` folder now.
-   **404 Errors**: Ensure you copied the `.html` files (or folders for pages) correctly.
-   **Missing Styles/Images**: Ensure the `_next` folder was uploaded completely. It contains all your assets.

## Alternative: Browser Deployment (Drag & Drop)

If you prefer not to use FTP, you can deploy directly from your browser:

1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop your `out` folder onto the page.
3.  Your site will be live instantly! You can then connect your custom domain if desired.
