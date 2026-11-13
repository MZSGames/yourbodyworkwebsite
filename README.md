# Website-Vorlage: CORE® Emotional Bodywork

Statische Website (Eleventy), gehostet auf **GitHub Pages**, bearbeitbar über **Pages CMS**.
Dieses Repository ist eine **Vorlage**: Jede Nutzerin erstellt mit „Use this template“ ihre eigene Kopie und verwaltet sie selbst. Laufende Kosten gibt es keine.

👉 **Anleitung für die Nutzerin:** [ANLEITUNG-RONJA.md](ANLEITUNG-RONJA.md)

---

## Vorlage bereitstellen (für dich als Anbieter)

1. Den Inhalt dieses Ordners in ein **öffentliches** Repository hochladen, inklusive der versteckten Dateien `.github/` und `.pages.yml`.
2. **Settings → General → „Template repository“** aktivieren.
3. Optional als Demo: **Settings → Pages → Source: GitHub Actions**, dann unter **Actions → „Website veröffentlichen“ → Run workflow**.
4. Den Link zum Repository zusammen mit der Anleitung weitergeben.

Verbesserungen an der Vorlage wirken sich **nicht** automatisch auf bestehende Kopien aus. Jede Kopie ist eigenständig.

---

## Technik

```bash
npm install
npm start     # Vorschau unter http://localhost:8080
```

```
.pages.yml                   ← Felder im Editor (Pages CMS)
.github/workflows/deploy.yml ← Build & Veröffentlichung auf GitHub Pages
lib/design.js                ← Farbpaletten & Schriftpaare
docs/vorschau/               ← Vorschaubilder fürs Handbuch
src/
  _data/start.json, core.json, about.json,
        sessions.json, contact.json ← Inhalte der einzelnen Seiten
  _data/testimonials.json, cta.json ← Bereiche, die auf mehreren Seiten erscheinen
  _data/settings.json        ← allgemeine Einstellungen
  rechtliches/               ← Impressum & Datenschutz (Markdown)
  index.njk, core-bodywork.njk, ueber-mich.njk,
        sessions.njk, kontakt.njk ← Seiten (setzen sich aus Bausteinen zusammen)
  _includes/sections/        ← Bausteine (Hero, Einleitung, Bild+Text, Sessions, …)
  _includes/                 ← Grundgerüst, Icons, Unterseiten-Layout
  _data/design.json          ← gewählte Palette/Schrift (Editor)
  _data/theme.js             ← erzeugt Farben & Schriften aus design.json
  css/style.css              ← Layout & Gestaltung
  js/main.js                 ← Mobilmenü, Erfahrungs-Slider
  images/uploads/            ← Bilder (Platzhalter aus dem Entwurf)
```

- Die Pfade passen sich automatisch an: `…github.io/repo-name/` und eigene Domain funktionieren beide.
- **Design im Editor:** 12 Farbpaletten, 8 Schriftpaare, Feinschliff (Textgröße, Button-Form, Ecken, Abstände, Bildverlauf) und optionale eigene Farben werden in `src/_data/design.json` gewählt (Pages CMS → Design). Ungültige Werte fallen auf den Standard zurück. Paletten und Schriften sind in `lib/design.js` definiert; `src/_data/theme.js` erzeugt daraus CSS-Variablen und `@font-face`. Alle Schriften werden lokal ausgeliefert (Fontsource), ohne Google Fonts. Vorschaubilder: `docs/vorschau/`.
- Anonymes Feedback: Seite `/feedback/`, Versand über Web3Forms (kostenlos, ohne Konto). Der Schlüssel wird im Editor unter Einstellungen eingetragen. Das Feedback geht per E-Mail an die Seitenbetreiberin und wird nicht automatisch veröffentlicht.
- **Bildausschnitt:** Feld `*_focus` je Bild, Auswahl aus 9 Positionen (oben-links … unten-rechts) → CSS `object-position`. Optionale Hilfsseite `/bildausschnitt/` (noindex, nicht verlinkt) zeigt per Klick, welche Position im Editor zu wählen ist.
- **Zusatzfunktionen (per Häkchen im Editor):** Preise, FAQ, Online-Kalender-Button, „Erfahrungen zuerst“ (Sessions); zweites Bild und Bildergalerie mit Lightbox (Über mich, Workshops); Seite Workshops (`src/workshops.11tydata.js` baut sie nur bei `show: true`); Video-Erfahrungen (YouTube erst nach Klick über youtube-nocookie). Schriften für Überschrift und Text getrennt wählbar.
- **Seite Erfahrungen** (`/erfahrungen/`): alle Zitate, Videos, Einladung zum Feedback; Zitate per Häkchen zusätzlich auf Start/Sessions (`show_on_start`, `show_on_sessions`).
- Kontakt läuft per `mailto:`-Button. Alternativ kann in den Einstellungen ein Buchungslink für alle Anfrage-Buttons eingetragen werden.

**Hinweis:** Prüfen, ob „CORE®“ so verwendet werden darf. Das ist ein Markenzeichen des Ausbildungsanbieters.
