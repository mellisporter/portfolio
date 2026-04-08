# Matt Porter Portfolio

## Quick Start

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Add your screenshots:**
   Take screenshots of each site and save them in `public/images/`:
   - `sca.png` — floridaseniorconsulting.com
   - `cobbemc.png` — cobbemc.com
   - `casscounty.png` — casscountyelectric.com
   - `rushmore.png` — rushmore.coop
   - `shine.png` — shine.coop/help-center
   - `backlog.png` — Back.log app (from GitHub repo)

   **Tip:** Use your browser at full width, screenshot just the visible area. Cards crop from the top, so the header/hero of each site will show.

3. **Run locally:**
   ```
   npm run dev
   ```

4. **Deploy to Vercel:**
   - Push this folder to a GitHub repo
   - Go to vercel.com, click "New Project"
   - Import the repo
   - Vercel auto-detects Vite — just click Deploy
   - Done. You'll get a URL like matt-porter-portfolio.vercel.app

## Customizing

- Edit `src/Portfolio.jsx` to add/remove projects
- Drop new screenshots in `public/images/`
- Project cards gracefully fallback if an image is missing
