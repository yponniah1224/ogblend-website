# OG Blend - Organic Ceylon Cinnamon Website

## Setup Instructions

### 1. Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it: `ogblend-website` (or any name you prefer)
3. Make it public
4. Don't initialize with README (we'll upload files)

### 2. Upload Files
```bash
git init
git add .
git commit -m "Initial website files"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/ogblend-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings tab
3. Scroll to Pages section
4. Source: Deploy from a branch
5. Branch: main
6. Folder: / (root)
7. Click Save

### 4. Connect GoDaddy Domain
1. In your repository Settings > Pages
2. Custom domain: ogblend.store
3. Save

#### GoDaddy DNS Settings:
1. Login to GoDaddy
2. Go to DNS Management for ogblend.store
3. Add these records:

**A Records:**
- Name: @ | Value: 185.199.108.153
- Name: @ | Value: 185.199.109.153
- Name: @ | Value: 185.199.110.153
- Name: @ | Value: 185.199.111.153

**CNAME Record:**
- Name: www | Value: YOUR_USERNAME.github.io

Replace YOUR_USERNAME with your actual GitHub username.

### 5. Wait for DNS Propagation
- Can take 24-48 hours
- Check status at: https://YOUR_USERNAME.github.io/ogblend-website

## Features
- Responsive design
- Product showcase
- Contact integration
- SEO optimized
- Fast loading