Drive Portfolio Generator

This script scans a Google Drive folder and generates a static portfolio JSON at `public/portfolio.json` used by the frontend.

.env.local example (place at repository root):

GOOGLE_DRIVE_API_KEY=YOUR_API_KEY
GOOGLE_DRIVE_ROOT_FOLDER_ID=YOUR_FOLDER_ID
# Optional debug and test flags
DRIVE_PORTFOLIO_DEBUG=1
DRIVE_PORTFOLIO_TEST=1

Run locally (PowerShell):

```powershell
$env:GOOGLE_DRIVE_API_KEY = 'your_api_key'
$env:GOOGLE_DRIVE_ROOT_FOLDER_ID = 'your_root_folder_id'
$env:DRIVE_PORTFOLIO_DEBUG = '1'  # optional
$env:DRIVE_PORTFOLIO_TEST = '1'   # optional
node .\scripts\generate-drive-portfolio.js
```

POSIX (bash):

```bash
export GOOGLE_DRIVE_API_KEY=your_api_key
export GOOGLE_DRIVE_ROOT_FOLDER_ID=your_root_folder_id
export DRIVE_PORTFOLIO_DEBUG=1
export DRIVE_PORTFOLIO_TEST=1
node scripts/generate-drive-portfolio.js
```

Notes:
- The script reads `.env.local` at the repository root if present.
- It will exit with an error if either `GOOGLE_DRIVE_API_KEY` or `GOOGLE_DRIVE_ROOT_FOLDER_ID` are missing.
- If a root folder is a Drive shortcut it will be resolved automatically and you will be informed in the logs.
- Only `video/*` mime types are included by default.
- Use `DRIVE_PORTFOLIO_DEBUG=1` for verbose traversal logs.
- Use `DRIVE_PORTFOLIO_TEST=1` to print the first 5 parsed items and stop.
