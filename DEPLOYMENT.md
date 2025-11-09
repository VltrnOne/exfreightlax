# SiteGround Deployment Guide

This repository is configured to automatically deploy to SiteGround when you push to the `main` branch.

## Setup Instructions

### Option 1: SFTP Deployment (Recommended)

1. **Add GitHub Secrets:**
   - Go to your repository: https://github.com/VltrnOne/exfreightlax
   - Navigate to: Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `SITEGROUND_HOST` - Your SiteGround FTP hostname (e.g., `ftp.yourdomain.com` or `your-ip-address`)
     - `SITEGROUND_USERNAME` - Your SiteGround FTP username
     - `SITEGROUND_PASSWORD` - Your SiteGround FTP password
     - `SITEGROUND_DEPLOY_PATH` - Path where built files should go (e.g., `/public_html/` or `/public_html/dist/`)
     - `SITEGROUND_PUBLIC_PATH` - Path for public content files (e.g., `/public_html/content/`)

2. **The workflow will automatically:**
   - Build your React/Vite application
   - Deploy the `dist/` folder to your SiteGround server
   - Deploy the `public/` folder (content files) to your SiteGround server

### Option 2: SSH Deployment

If you prefer SSH deployment:

1. **Generate SSH Key:**
   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-actions" -f ~/.ssh/siteground_deploy
   ```

2. **Add Public Key to SiteGround:**
   - Copy the public key: `cat ~/.ssh/siteground_deploy.pub`
   - Add it to your SiteGround SSH keys in cPanel

3. **Add GitHub Secrets:**
   - `SITEGROUND_SSH_KEY` - Your private SSH key (content of `~/.ssh/siteground_deploy`)
   - `SITEGROUND_SSH_USER` - Your SSH username
   - `SITEGROUND_HOST` - Your SiteGround hostname
   - `SITEGROUND_DEPLOY_PATH` - Deployment path
   - `SITEGROUND_PUBLIC_PATH` - Public content path

4. **Rename workflow file:**
   - Delete or disable `.github/workflows/deploy.yml`
   - Rename `.github/workflows/deploy-ssh.yml` to `deploy.yml`

## Finding Your SiteGround Paths

1. **Login to SiteGround cPanel**
2. **File Manager:**
   - Your main website files are typically in `/public_html/`
   - Built files should go to `/public_html/` or a subdirectory
   - Content files can go to `/public_html/content/` or wherever you prefer

3. **FTP/SSH Credentials:**
   - Find these in cPanel → FTP Accounts or SSH Access

## Testing Deployment

1. Make a small change to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Check the Actions tab in GitHub to see the deployment progress
4. Visit your SiteGround website to verify the changes

## Manual Deployment

You can also trigger deployments manually:
1. Go to Actions tab in GitHub
2. Select "Deploy to SiteGround"
3. Click "Run workflow"

## Troubleshooting

- **Connection issues:** Verify your FTP/SSH credentials in GitHub Secrets
- **Path errors:** Ensure deployment paths are correct and directories exist
- **Build failures:** Check the Actions logs for specific error messages
- **File permissions:** You may need to set proper file permissions on SiteGround (usually 755 for directories, 644 for files)

