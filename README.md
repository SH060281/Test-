# Kontoeröffnung – Lernpfad für Bankkaufleute (BBZ Schleswig)

Interaktive Lernwebsite für Auszubildende zur Bankkauffrau / zum Bankkaufmann (Fach Bankwirtschaft).
Reines HTML, CSS und JavaScript – ohne Server, ohne Anmeldung, ohne personenbezogene Daten.
Der Lernfortschritt wird nur im Browser des jeweiligen Geräts gespeichert (localStorage) und kann auf der Startseite zurückgesetzt werden.

**Adresse nach Veröffentlichung:** https://sh060281.github.io/Test-/

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite (für GitHub Pages) |
| `css/style.css` | Gestaltung (BBZ-Grau/Rot, mobil zuerst) |
| `js/inhalte.js` | **Alle Texte, Merkkästen, Quizfragen und das Fallspiel** – hier lassen sich Inhalte ohne Programmierkenntnisse ändern |
| `js/app.js` | Seitenlogik (Quiz, Fortschritt, Abschlusstest, Fallspiel) |
| `qr-code.png` | QR-Code auf https://sh060281.github.io/Test-/ |
| `bbz-logo.png` | **Noch hochladen** (Dateiname genau so). Bis dahin erscheint ein Text-Ersatz „BBZ Schleswig“. |

## GitHub Pages aktivieren

1. Repository auf github.com öffnen → **Settings** → links **Pages**.
2. Unter „Build and deployment“ → **Source: Deploy from a branch**.
3. **Branch:** `main`, Ordner **`/ (root)`** → **Save**.
4. Nach 1–2 Minuten ist die Seite unter https://sh060281.github.io/Test-/ erreichbar (Adresse steht oben auf der Pages-Seite).

Wichtig: Die Dateien liegen zurzeit auf dem Branch `claude/bbz-kontooeffnung-lernseite-fzlvt2`. Entweder diesen Branch zuerst per Pull Request in `main` übernehmen, oder in Schritt 3 diesen Branch auswählen.
Bei kostenlosen GitHub-Konten funktioniert Pages nur, wenn das Repository **öffentlich** (public) ist.
Wird das Repository umbenannt, ändert sich die Adresse – dann muss der QR-Code neu erzeugt werden.

## Logo einfügen

Auf github.com im Repository: **Add file → Upload files** → `bbz-logo.png` hochladen → **Commit changes**.
