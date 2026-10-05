# Climb Plan

An 8-week mountain bike climbing plan and training log. It installs on your phone like an app and works offline.

## Put it on GitHub Pages

1. Create a new GitHub repository (for example `climb-plan`) and upload every file in this folder, keeping the `icons` folder.
2. In the repo, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
3. After a minute, your app is live at `https://<your-username>.github.io/climb-plan/`.

## Install on Android

Open the GitHub Pages link in Chrome, tap the **⋮** menu, then **Add to Home screen** (or **Install app**). It opens full screen and works without a connection.

## Your data

- Everything you enter is saved on your phone automatically, on every tap and keystroke.
- The app asks Android to keep its storage permanently. Installing it to your home screen makes that much more reliable.
- Data does **not** sync between devices. Use **Settings → Download backup** now and then, and **Restore backup** on a new phone.
- Clearing Chrome's site data for the app's address deletes your entries, so back up first.

## Updating the app

When you change any file, open `sw.js` and bump `VERSION` (for example `climb-plan-v2`). Phones pick up the new version the next time the app opens online. Your logged data isn't affected.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page layout |
| `styles.css` | Look and feel, including light and dark mode and print layout |
| `app.js` | Plan, routes, logging, saving and backups |
| `sw.js` | Offline support |
| `manifest.webmanifest` | App name, icon and colors for installing |
| `icons/` | App icons |
