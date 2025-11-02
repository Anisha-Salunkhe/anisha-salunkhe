# GitHub Pages Deployment Guide

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - Example: If your username is `anisha-salunkhe`, name it `anisha-salunkhe.github.io`
4. Make it **Public**
5. Do NOT initialize with README (we already have files)
6. Click "Create repository"

### 2. Initialize Git and Push to GitHub

Open Terminal in the portfolio folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/ (root)"
6. Click "Save"

### 4. Access Your Site
Your portfolio will be live at: `https://yourusername.github.io`

It may take 2-5 minutes for the site to go live after the first deployment.

## Alternative: Custom Repository Name

If you want a different repository name (e.g., `portfolio`):
1. Name your repo anything (e.g., `portfolio`)
2. Your site will be at: `https://yourusername.github.io/portfolio`
3. Follow the same steps above

## Updating Your Portfolio

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Changes will appear on your live site within 1-2 minutes.

## Troubleshooting

- **Site not loading?** Wait 5 minutes and clear browser cache
- **Images not showing?** Check that image paths are relative (e.g., `images/logo.png`)
- **CSS not loading?** Ensure `style.css` is in the same directory as `index.html`

## Custom Domain (Optional)

To use a custom domain like `anishasalunkhe.com`:
1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings at your domain registrar
4. Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
