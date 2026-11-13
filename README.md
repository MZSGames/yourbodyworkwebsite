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
  _data/home.json            ← Inhalte der Startseite
  _data/settings.json        ← allgemeine Einstellungen
  rechtliches/               ← Impressum & Datenschutz (Markdown)
  index.njk                  ← Aufbau der Startseite
  _includes/                 ← Grundgerüst, Icons, Unterseiten-Layout
  _data/design.json          ← gewählte Palette/Schrift (Editor)
  _data/theme.js             ← erzeugt Farben & Schriften aus design.json
  css/style.css              ← Layout & Gestaltung
  js/main.js                 ← Mobilmenü, Erfahrungs-Slider
  images/uploads/            ← Bilder (Platzhalter aus dem Entwurf)
```

- Die Pfade passen sich automatisch an: `…github.io/repo-name/` und eigene Domain funktionieren beide.
- **Design im Editor:** Farbpalette, Schriftpaar und Akzentfarbe werden in `src/_data/design.json` gewählt (Pages CMS → Design). Paletten und Schriften sind in `lib/design.js` definiert; `src/_data/theme.js` erzeugt daraus CSS-Variablen und `@font-face`. Alle Schriften werden lokal ausgeliefert (Fontsource), ohne Google Fonts. Vorschaubilder: `docs/vorschau/`.
- Anonymes Feedback: Seite `/feedback/`, Versand über Web3Forms (kostenlos, ohne Konto). Der Schlüssel wird im Editor unter Einstellungen eingetragen. Das Feedback geht per E-Mail an die Seitenbetreiberin und wird nicht automatisch veröffentlicht.
- Kontakt läuft per `mailto:`-Button. Alternativ kann in den Einstellungen ein Buchungslink für alle Anfrage-Buttons eingetragen werden.

**Hinweis:** Prüfen, ob „CORE®“ so verwendet werden darf. Das ist ein Markenzeichen des Ausbildungsanbieters.
