# Deployment Guide

## GitHub Pages Deployment

### Initial Setup

1. **Repository Settings**
   - Go to repository Settings → Pages
   - Source: Deploy from `main` branch
   - Folder: `/` (root)
   - Click "Save"

2. **Custom Domain (Optional)**
   ```bash
   # Create CNAME file in root
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **Configure DNS (If using custom domain)**
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: `www` → `username.github.io`

### Deployment Steps

```bash
# 1. Make your changes
git add .
git commit -m "Your commit message"

# 2. Push to GitHub
git push origin main

# 3. GitHub Actions will automatically deploy
# Check Actions tab for deployment status

# 4. Visit your site
# https://username.github.io
```

### Continuous Deployment

GitHub Pages automatically rebuilds and deploys when you push to `main`:
- Typical deployment time: 1-3 minutes
- Check deployment status in Actions tab
- Verify changes at your GitHub Pages URL

### Environment-Specific Configuration

#### Production (GitHub Pages)
- No build step required - served as static files
- Automatically uses HTTPS
- CDN-backed for global distribution

#### Development (Local)
```bash
python3 -m http.server 8000
```

### Troubleshooting Deployment

#### Site not updating
1. Clear GitHub Pages cache:
   - Settings → Pages → Unpublish site
   - Wait 10 minutes
   - Re-enable GitHub Pages

2. Check deployment status:
   - Go to Actions tab
   - View latest workflow run
   - Check for errors

3. Hard refresh browser:
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`

#### 404 Errors
- Verify `index.html` is in root directory
- Check GitHub Pages source branch and folder
- Ensure repository is public (or have GitHub Pro for private repos)

#### Custom domain not working
- Verify DNS settings (can take 24-48 hours to propagate)
- Check CNAME file exists in repository root
- Verify SSL certificate is active (Settings → Pages)

### Performance Optimization

#### Before Deployment Checklist
- [ ] Minify CSS and JavaScript
- [ ] Optimize images (compress, convert to WebP)
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit
- [ ] Verify all links work
- [ ] Check meta tags and SEO

#### Image Optimization
```bash
# Install imagemin-cli
npm install -g imagemin-cli

# Optimize all images
imagemin assets/images/* --out-dir=assets/images
```

#### CSS/JS Minification (Optional)
```bash
# Install tools
npm install -g cssnano-cli terser

# Minify CSS
cssnano assets/css/style.css assets/css/style.min.css

# Minify JavaScript
terser assets/js/script.js -o assets/js/script.min.js
```

### Security

- Enable HTTPS (automatic with GitHub Pages)
- Update Content Security Policy if needed
- Review exposed credentials or API keys
- Use environment variables for sensitive data

### Monitoring

#### Google Analytics
- Dashboard: https://analytics.google.com
- Track: Page views, user behavior, traffic sources
- Set up custom events for interactions

#### GitHub Insights
- Repository → Insights → Traffic
- View: Visitors, clones, referrers

### Rollback

If deployment breaks the site:
```bash
# Find last working commit
git log --oneline

# Revert to previous commit
git revert <commit-hash>
git push origin main

# Or reset to specific commit (use with caution)
git reset --hard <commit-hash>
git push -f origin main
```

### Additional Deployment Options

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### AWS S3 + CloudFront
```bash
# Sync to S3 bucket
aws s3 sync . s3://your-bucket-name --exclude ".git/*"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Support

For deployment issues:
- **GitHub Pages**: [Documentation](https://docs.github.com/en/pages)
- **Issues**: [Report here](https://github.com/Anisha-Salunkhe/anisha-salunkhe.github.io/issues)
