# Climb Plan

Installable PWA (Android, GitHub Pages) for an 8-week mountain bike climbing plan and training log. Vanilla HTML/CSS/JS with no build step, no framework and no dependencies. Separate from the Trail at Home app; don't add integration with it unless asked.

## Files

- `index.html`: static layout. Dynamic content renders into `#days`, `#weeks`, `#ridgeSvg`, `#bench`, `#ladder`, `#routes`, `#printAll`.
- `app.js`: everything else, in this order: route data (`ROUTES`), plan data (`W`, one entry per week, keyed by `mon`…`sun`), benchmark pairs (`BENCH`), state, render functions, saving, backup, events, init.
- `styles.css`: color tokens on `:root` with dark-mode overrides (`prefers-color-scheme` and `[data-theme]`), mobile breakpoint at 520px, `@media print` layout.
- `sw.js`: service worker. Network-first for app files, cache-first for Google Fonts.
- `manifest.webmanifest`, `icons/`: install metadata.

## Rules

- **Bump `VERSION` in `sw.js` on every change to any app file**, or installed copies won't update.
- **Never break saved data.** State lives in `localStorage` under key `climbPlan` as `{start, ladder[6], log, updated, lastBackup, persisted}`. `log` keys are `"<week>-<day>"` (e.g. `"1-thu"`) mapping to `{done, climb, total, rpe, note}`. Add fields freely; don't rename or remove existing ones without a migration in the init block. Backup files wrap state as `{app:"climb-plan", version:1, exported, state}`; keep Restore compatible with older backups.
- Keep paths relative (`./`, no leading `/`): the app is served from a GitHub Pages subpath.
- Save on every change via `scheduleSave()`; never add a save button.
- Text inputs must not trigger a full re-render (it drops focus on mobile). Update only what changed.
- Keep it light: no npm packages or build tooling unless asked.
- Times are typed as `m:ss` or `h:mm:ss`; use `parseT` / `fmtT`.

## Testing

No test suite. Serve locally with `python3 -m http.server` and check at a 390px-wide viewport:
1. Tick a session and type a climb time, reload, and confirm both persist.
2. Benchmarks table updates when both climb times in a `BENCH` pair are filled.
3. Download backup, clear data, Restore backup.
4. Dark mode and print preview still look right.
