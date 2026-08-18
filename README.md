# Aurum Atelier Registry - Private Art Collection System

Aurum Atelier Registry is a static web micro-system for collectors and curators to register artworks, track curation status, and monitor the value of a private portfolio.

## Live Deployment

- GitHub Pages URL: [Live site will be published after CI pipeline validation]
- GitHub Pages URL: [Production URL reserved for M3 release]

## Features

- Register artworks with title, artist, medium, curation status, value, and acquisition date
- Filter collection register by medium (Painting, Sculpture, Photography, Textile)
- Archive individual entries from the register
- Auto-calculated dashboard:
  - Total pieces in collection
  - Portfolio valuation (USD)
  - Number of works currently on display
  - Annual acquisition target progress
- Custom annual acquisition target persisted to browser storage
- Fully responsive layout for desktop and mobile

## Technology Stack

- HTML5
- CSS3 (custom properties, responsive grid, animations)
- Vanilla JavaScript (ES2020+)
- Local Storage for persistence
- GitHub Pages for hosting

## Run Locally

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` directly in your browser.

## Project Structure

- `index.html` - application structure
- `styles.css` - visual design and responsive behavior
- `app.js` - state management, calculations, and rendering
- `submission.md` - coursework written assessment
- `evidence/` - merge conflict screenshot evidence

## Notes for Assessment

- Commit directly to `main` is not used.
- Use issue-linked branches and pull requests for every task.
- Use Conventional Commits across the full history.
