### Project: Word Per Minute
A small React web app that measures typing speed (words per minute) and stores results using Firebase.

<table>
  <tr>
    <td align="center">
      Realtime measurements<br>
      <img src="https://github.com/user-attachments/assets/059e8fc9-b34c-43b0-9924-96b84af940b6" alt="Screenshot 2025-09-24 at 12 34 40" height="450">
    </td>
    <td align="center">
      Test Result<br>
      <img src="https://github.com/user-attachments/assets/9f941658-954d-4d98-b3ff-7859cb10527d" alt="Screenshot 2025-09-24 at 12 34 40" height="500">
    </td>
  </tr>
  <tr>
    <td align="center">
      Dark mode<br>
      <img src="https://github.com/user-attachments/assets/916153c0-21ef-483d-aca4-49b66bee278b" alt="Screenshot 2025-09-24 at 12 34 40" height="450">
    </td>
    <td align="center">
      Leaderboard<br>
      <img src="https://github.com/user-attachments/assets/bb284dcd-b124-4394-9b1d-ef9cebe8cd95" alt="Screenshot 2025-09-24 at 12 34 40" height="500">
    </td>
  </tr>
</table>

**Quick Start**
- **Install:** Run `npm install` in the project root.
- **Dev server:** Run `npm start` and open `http://localhost:3000`.
- **Build:** Run `npm run build` to produce production files in the `build/` folder.
- **Tests:** Run `npm test`.

**File structure (high level)**
- **`package.json`**: project metadata and scripts.
- **`public/`**: static HTML and assets served by the app. See [public/index.html](public/index.html).
- **`src/`**: application source code.
  - **`src/index.js`**: app entry point.
  - **`src/App.js`**: main React component and routing.
  - **`src/init-firebase.js`**: Firebase initialization (contains client API key and config).
  - **`src/components/`**: React components (e.g., `Header.js`, `Main.js`, `Scoreboard.js`). See [src/components](src/components).
  - **`src/pages/`**: top-level page components (e.g., `Home.js`).
  - **`src/resources/`**: static JSON data used by the app.
  - **`src/styles/`**: CSS/SCSS theme and layout files.
- **`build/`**: production output (should be ignored by git unless you intend to publish via GH Pages).

**Security & secrets**
- **Client config:** The Firebase config in [src/init-firebase.js](src/init-firebase.js) includes a public API key used by the frontend. This key is expected to be public for Firebase web apps, but you must never commit private service account keys or other credentials.
- **Service accounts / private keys:** If you have a service account JSON (used by server-side code in `functions/`), it must NOT be committed. Add such files to `.gitignore`. Use environment variables or Firebase environment configuration for secrets.

**Cleaning exposed secrets**
- If a secret was committed and pushed, rotate the credential first (Google Cloud Console → APIs & Services → Credentials), then remove it from the git history using `git-filter-repo` or BFG before forcing a push. See the repository issues or documentation for more details.
- Use this doc as guide: https://graphite.com/guides/git-remove-committed-files

**Deployment notes**
- The app can be hosted on Firebase Hosting (see `firebase.json` in the repo) or any static-hosting provider.
- If you publish via GitHub Pages and want `build/` committed, keep it; otherwise ensure `build/` is in `.gitignore`.

**Contributing**
- Open issues or PRs for bugs and enhancements. If you rewrite history to remove secrets, coordinate with collaborators.

**License**
- This project does not include a license file. Add one (for example, MIT) if you want to permit reuse.
