# Handbuch für deine Website

Liebe Ronja, mit diesem Handbuch kannst du alles rund um deine Website selbst erledigen: einrichten, Texte und Bilder ändern, eine eigene Domain verbinden, das Design anpassen und größere Umbauten machen.

**Keine Angst vor Fehlern:** Jede Änderung wird gespeichert. Du kannst alles wieder rückgängig machen (siehe [Kapitel 9](#9-etwas-rückgängig-machen)).

---

## Inhalt

1. [So funktioniert deine Website](#1-so-funktioniert-deine-website)
2. [Einmalige Einrichtung](#2-einmalige-einrichtung)
3. [Texte und Bilder bearbeiten](#3-texte-und-bilder-bearbeiten)
4. [Feedback von Kundinnen](#4-feedback-von-kundinnen)
5. [Schönere Web-Adresse und eigene Domain](#5-schönere-web-adresse-und-eigene-domain)
6. [Farben und Design selbst ändern](#6-farben-und-design-selbst-ändern)
7. [Größere Änderungen mit KI (Claude)](#7-größere-änderungen-mit-ki-claude)
8. [Wenn etwas nicht funktioniert](#8-wenn-etwas-nicht-funktioniert)
9. [Etwas rückgängig machen](#9-etwas-rückgängig-machen)
10. [Sicherungskopie herunterladen](#10-sicherungskopie-herunterladen)
11. [Überblick: Konten und Kosten](#11-überblick-konten-und-kosten)
12. [Repository privat stellen (optional)](#12-repository-privat-stellen-optional)

---

## 1. So funktioniert deine Website

Deine Website besteht aus drei Teilen. Du musst nur den ersten regelmäßig benutzen:

| Was | Wofür | Wo |
|---|---|---|
| **Pages CMS** | Der **Editor**: Hier änderst du Texte und Bilder. | app.pagescms.org |
| **GitHub** | Der **Speicher**: Hier liegen alle Dateien. GitHub veröffentlicht deine Website automatisch und kostenlos. | github.com |
| **Web3Forms** | Leitet **Feedback** von Kundinnen an deine E-Mail-Adresse weiter. | web3forms.com |

**Der Ablauf ist immer gleich:** Du änderst etwas in Pages CMS und klickst auf **Speichern**. GitHub baut die Website neu, und nach 1–2 Minuten ist die Änderung online.

---

## 2. Einmalige Einrichtung

Dauer: ca. 15 Minuten. Du machst das nur ein einziges Mal.

### Schritt 1 – GitHub-Konto anlegen
1. Öffne **https://github.com/signup**
2. Gib deine E-Mail-Adresse, ein Passwort und einen **Benutzernamen** ein, z. B. `ronja-sereinig`.
   💡 Der Benutzername steht in deiner kostenlosen Web-Adresse (`benutzername.github.io`). Wähle also etwas, das zu dir passt.
3. Bestätige deine E-Mail-Adresse mit dem Code, den GitHub dir schickt.

### Schritt 2 – Deine eigene Kopie der Website erstellen
1. Öffne den Link zur Vorlage, den du bekommen hast.
2. Klicke oben rechts auf den grünen Button **„Use this template“** → **„Create a new repository“**.
3. Bei **Repository name** trägst du `website` ein. Wenn du gleich die schönere Adresse willst, siehe [Kapitel 5](#5-schönere-web-adresse-und-eigene-domain).
4. **Public** ausgewählt lassen. Das ist nötig, damit das Veröffentlichen kostenlos ist.
   ⚠️ **Stell das Repository später nicht auf „Private“.** Mit dem kostenlosen GitHub-Konto geht deine Website dann sofort offline. „Public“ heißt nur, dass man die Dateien deiner Website sehen kann, also Texte, Bilder und Design, die ohnehin online stehen. **Ändern kannst nur du.** Lege dort einfach nichts Privates ab, z. B. Kundinnendaten. Feedback kommt nur per E-Mail zu dir und landet nicht im Repository. Wenn du es trotzdem privat möchtest, siehe [Kapitel 12](#12-repository-privat-stellen-optional).
5. Klicke auf **„Create repository“**.

### Schritt 3 – Veröffentlichen einschalten
1. Klicke in deinem neuen Repository oben auf **„Settings“** (Zahnrad).
2. Klicke links auf **„Pages“**.
3. Wähle bei **„Source“** den Eintrag **„GitHub Actions“**.
4. Klicke oben auf **„Actions“**, dann links auf **„Website veröffentlichen“**, rechts auf **„Run workflow“** und dann auf den grünen Button **„Run workflow“**.
5. Nach 1–2 Minuten erscheint ein grüner Haken ✅.
   Ein roter Fehler ❌ von *vor* Schritt 3 ist normal und kann ignoriert werden.

Deine Website ist jetzt online unter **`https://DEIN-BENUTZERNAME.github.io/website/`**

### Schritt 4 – Den Editor verbinden
1. Öffne **https://app.pagescms.org**
2. Klicke auf **„Sign in with GitHub“** und erlaube den Zugriff.
3. Wenn du gefragt wirst, installiere die **GitHub App**. Wähle dabei dein Konto und dein Repository `website` aus.
4. Wähle dein Repository `website` aus.

🎉 Geschafft! Lege dir **app.pagescms.org** als Lesezeichen an. Das ist ab jetzt dein Arbeitsplatz.

### Erste Aufgaben (Checkliste)
- [ ] Eigene Fotos statt der Platzhalter hochladen
- [ ] E-Mail-Adresse unter **Einstellungen** eintragen
- [ ] Bei **1:1 Sessions** den Standort „[deiner Region]“ ersetzen
- [ ] **Impressum** und **Datenschutzerklärung** vollständig ausfüllen
- [ ] Feedback-Schlüssel eintragen ([Kapitel 4](#4-feedback-von-kundinnen))
- [ ] Klären, ob du „CORE®“ so auf deiner Website verwenden darfst (Markenzeichen deines Ausbildungsanbieters)

---

## 3. Texte und Bilder bearbeiten

So öffnest du den Editor: **app.pagescms.org** → mit GitHub anmelden → Repository `website` auswählen.

Links siehst du:

| Menüpunkt | Was du dort änderst |
|---|---|
| **Startseite** | alle 8 Bereiche der Startseite, von oben nach unten |
| **Feedback-Seite** | Texte der Seite, auf der Kundinnen Feedback schreiben |
| **Impressum** / **Datenschutzerklärung** | die rechtlichen Seiten |
| **Einstellungen** | Name, E-Mail, Telefon, Instagram, Google-Text, Feedback-Schlüssel |

### Texte ändern
1. Klicke in ein Feld und schreibe.
   - **Enter** = neue Zeile
   - **Leerzeile** (zweimal Enter) = neuer Absatz
2. Klicke auf **Speichern**.
3. Nach 1–2 Minuten deine Website neu laden. Die Änderung ist sichtbar.

💡 **Texte dürfen so lang sein, wie du möchtest.** Die Seite passt sich automatisch an, auch auf dem Handy.

💡 **Einen Button ausblenden:** Den Button-Text leer lassen. Das geht bei „Was ist CORE®“ und „Über mich“.

💡 **Einen Bereich ausblenden:**
- Erfahrungsberichte: alle Einträge löschen.
- Kontakt: Häkchen bei **„Bereich anzeigen“** entfernen.

### Bilder austauschen
1. Klicke beim gewünschten Bild auf das Bild-Feld.
2. Lade ein neues Foto hoch oder wähle eines, das du schon hochgeladen hast.
3. Fülle die **Bildbeschreibung** aus, z. B. „Ronja sitzt am See“. Das hilft blinden Menschen und Google.
4. **Speichern**.

**So werden deine Fotos schön:**

| Tipp | Warum |
|---|---|
| **Querformat**, mind. **1800 px** breit | Die Bilder sind auf großen Bildschirmen sehr breit. |
| Vorher verkleinern, unter **1 MB**, z. B. mit **squoosh.app** (kostenlos, im Browser) | Die Seite lädt schneller, besonders am Handy. |
| Warmes, natürliches Licht | Das passt zu den Farben der Seite. |
| **Großes Bild ganz oben:** Person eher **rechts** im Bild | Links liegt der Text darüber. |
| **„Was ist CORE®“:** Motiv eher **links** | Das Bild läuft nach rechts weich aus. |
| **„Über mich“:** Motiv eher **rechts** | Das Bild läuft nach links weich aus. |

### Mehr Einträge hinzufügen
Bei **„5 · 1:1 Sessions“** (Merkmale) und **„6 · Erfahrungen anderer Frauen“** kannst du beliebig viele Einträge **hinzufügen**, **löschen** und **verschieben**. Für jedes Session-Merkmal wählst du ein passendes Symbol aus.

### Was der Editor *nicht* kann
Diese Dinge gehen im Editor nicht:
- einen ganz **neuen Bereich** anlegen, z. B. „Preise“ oder eine Bildergalerie
- **zusätzliche Bilder** an neuen Stellen einfügen
- eine **neue Unterseite** anlegen, z. B. „Workshops“
- die **Reihenfolge der Bereiche** ändern

Das geht ganz einfach mit KI, siehe [Kapitel 7](#7-größere-änderungen-mit-ki-claude).

### Für Google
Unter **Einstellungen** kannst du festlegen:
- **Seitentitel:** Er steht im Browser-Tab und bei Google.
- **Beschreibung für Google:** ca. 150 Zeichen. Sie erscheint in den Suchergebnissen.
- **Vorschaubild beim Teilen:** Es erscheint, wenn jemand deinen Link per WhatsApp oder Facebook teilt.

---

## 4. Feedback von Kundinnen

Auf deiner Website gibt es die Seite **`/feedback/`**. Dort können Kundinnen **anonym und ohne Anmeldung** schreiben, wie sie die Session erlebt haben.

### Einmalig aktivieren (2 Minuten)
1. Öffne **https://web3forms.com** und klicke auf **„Create your Access Key“**.
2. Gib die E-Mail-Adresse ein, an die das Feedback geschickt werden soll.
3. Du bekommst per E-Mail einen **Schlüssel**, eine lange Buchstaben-Zahlen-Kombination. Kopiere ihn.
4. Füge ihn in Pages CMS unter **Einstellungen → Feedback-Schlüssel** ein und klicke auf **Speichern**.

Solange kein Schlüssel eingetragen ist, zeigt die Seite einen freundlichen Hinweis statt des Formulars.

### So läuft es danach
- Schick Kundinnen nach der Session den Link: `https://DEINE-ADRESSE/feedback/`
- Jedes Feedback kommt **per E-Mail** bei dir an. Es erscheint **nicht automatisch** auf der Website. Du entscheidest, was online geht.
- In der E-Mail steht, ob die Kundin zustimmt: **„Veröffentlichung erlaubt: Ja“**.
- Wenn ja und du es zeigen möchtest: In Pages CMS unter **Startseite → 6 · Erfahrungen anderer Frauen** einen neuen Eintrag hinzufügen, den Text hineinkopieren und speichern.

💡 Kostenlos sind 250 Feedbacks pro Monat. Das reicht in der Regel völlig.

### Video-Feedback zeigen (optionale Erweiterung)
Deine Website kann im Moment **noch keine Videos** anzeigen. Wenn du Video-Feedbacks von Kundinnen zeigen möchtest, kann Claude das für dich einbauen ([Kapitel 7](#7-größere-änderungen-mit-ki-claude)).

**⚠️ Vorher wichtig: Einwilligung einholen**
Bei einem Video ist die Kundin erkennbar, das Feedback ist also **nicht mehr anonym**. Lass dir **schriftlich** bestätigen, dass du das Video auf deiner Website und auf YouTube zeigen darfst. Eine kurze E-Mail von ihr reicht, z. B.: „Ich bin einverstanden, dass Ronja mein Video auf ihrer Website und auf YouTube veröffentlicht.“ Bewahre diese E-Mail auf.

**Der empfohlene Weg: über YouTube**
1. Lade das Video auf **YouTube** hoch.
2. Stell die Sichtbarkeit auf **„Nicht gelistet“**. Dann findet man es nicht über die YouTube-Suche, nur über deine Website.
3. Lass Claude einmalig die Video-Funktion einbauen, mit diesem Text:

> Mein GitHub-Repository **DEIN-BENUTZERNAME/website** ist eine Eleventy-Website mit Pages CMS (`.pages.yml`). Bitte ergänze bei den Erfahrungsberichten (`testimonials` in `src/_data/home.json`) ein **optionales Feld „YouTube-Link“**, das im Editor bearbeitbar ist. Wenn ein Link eingetragen ist, soll das Video im Bereich „Erfahrungen“ erscheinen, passend zum bestehenden Design. **Datenschutzfreundlich:** Zuerst nur ein Vorschaubild mit Play-Button und dem Hinweis, dass beim Abspielen YouTube geladen wird. Erst beim Klick soll das Video über **youtube-nocookie.com** geladen werden. Bitte ergänze auch die Datenschutzerklärung (`src/rechtliches/datenschutz.md`) um einen Abschnitt zu YouTube und teste den Build.

4. Danach fügst du in Pages CMS bei **„6 · Erfahrungen anderer Frauen“** einen neuen Eintrag hinzu und trägst den **YouTube-Link** ein. Den Link findest du bei YouTube unter **„Teilen“**.

**Die Alternative: Video direkt auf der Website**
Kurze Clips können auch ohne YouTube direkt auf deiner Website liegen. Dann gehen keine Daten an Google. Dafür gilt:
- Videodateien sind groß. GitHub nimmt einzelne Dateien **über 100 MB nicht an**.
- Die Website lädt langsamer.

Das eignet sich nur für wenige, sehr kurze Videos, die vorher stark verkleinert wurden, z. B. mit **handbrake.fr**. Für regelmäßige Video-Feedbacks ist YouTube besser. Wenn du diesen Weg willst, schreib Claude: „Bitte baue die Möglichkeit ein, kurze MP4-Videos bei den Erfahrungsberichten hochzuladen und anzuzeigen.“

---

## 5. Schönere Web-Adresse und eigene Domain

### Möglichkeit A: Kostenlos und kürzer
Statt `https://ronja-sereinig.github.io/website/` kann deine Adresse auch `https://ronja-sereinig.github.io` lauten.

1. Auf GitHub in deinem Repository: **Settings → General**
2. Ganz oben bei **Repository name** genau eintragen: **`DEIN-BENUTZERNAME.github.io`**
   (Beispiel: Benutzername `ronja-sereinig` → `ronja-sereinig.github.io`)
3. **Rename** klicken.
4. **Neu veröffentlichen:** **Actions → „Website veröffentlichen“ → „Run workflow“ → „Run workflow“**
5. Nach 1–2 Minuten ist deine Website unter der neuen Adresse erreichbar.

💡 Den Benutzernamen kannst du unter **github.com → dein Profilbild → Settings → Account → Change username** ändern. Danach musst du auch den Repository-Namen anpassen.

### Möglichkeit B: Eigene Domain, z. B. `ronja-sereinig.at`
Kosten: ca. 10–20 € pro Jahr. Das wirkt am professionellsten, z. B. auf Visitenkarten oder Instagram.

**Schritt 1 – Domain kaufen**
Bei einem Domain-Anbieter, z. B. **World4You**, **easyname**, **IONOS** oder **INWX**. Es reicht die Domain allein, du brauchst **kein Webhosting-Paket**.
💡 Viele Anbieter bieten auch eine passende E-Mail-Adresse an, z. B. `hallo@ronja-sereinig.at`. Das ist praktisch und wirkt professionell.

**Schritt 2 – Beim Domain-Anbieter die DNS-Einträge setzen**
Suche in deinem Kundenbereich nach **„DNS“**, **„DNS-Einstellungen“** oder **„Nameserver-Einträge“**. Lege diese Einträge an. Falls dort schon andere **A-Einträge** für „@“ stehen, lösche diese vorher.

| Typ | Name / Host | Wert / Ziel |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `DEIN-BENUTZERNAME.github.io` |

💡 Wenn du unsicher bist: Schick dem Support deines Domain-Anbieters diese Tabelle und schreib dazu: „Bitte die Domain auf GitHub Pages zeigen lassen.“ Die machen das täglich.

**Schritt 3 – Auf GitHub eintragen**
1. Im Repository: **Settings → Pages**
2. Bei **Custom domain** deine Domain eintragen, z. B. `ronja-sereinig.at`, und **Save** klicken.
3. Warten, bis GitHub die Domain prüft. Das dauert von ein paar Minuten bis zu 24 Stunden.
4. Wenn möglich, Häkchen bei **„Enforce HTTPS“** setzen. Dann hat deine Seite das Schloss-Symbol 🔒.

**Schritt 4 – ⚠️ Neu veröffentlichen (wichtig!)**
**Actions → „Website veröffentlichen“ → „Run workflow“ → „Run workflow“**
Ohne diesen Schritt fehlen auf der neuen Domain Bilder und Design.

**Danach:** Den Link überall aktualisieren, z. B. auf Instagram, Google-Profil und Visitenkarten. Den Feedback-Link schickst du ab dann als `https://ronja-sereinig.at/feedback/`.

---

## 6. Farben und Design selbst ändern

Alle Farben stehen gesammelt in **einer Datei**. Jede Farbe ist dort auf Deutsch beschriftet.

### Eine Farbe ändern
1. Auf **github.com** dein Repository öffnen.
2. Nacheinander klicken: **src** → **css** → **style.css**
3. Rechts oben auf das **Stift-Symbol ✏️** („Edit this file“) klicken.
4. Ganz oben findest du den Abschnitt **FARBEN**, zum Beispiel:
   ```
   --clay: #7d4a35;       /* Akzentfarbe: Buttons, kleine Überzeilen, Symbole */
   ```
5. Ersetze **nur den Farbcode**, z. B. `#7d4a35` durch `#5e6b4f`. Lass `--clay:` und den `;` am Ende stehen.
6. Oben rechts auf **„Commit changes…“** und dann noch einmal auf **„Commit changes“** klicken.
7. Nach 1–2 Minuten ist die neue Farbe online.

💡 Farbcodes zum Aussuchen findest du auf **https://htmlcolorcodes.com**. Klick eine Farbe an und kopiere den Code mit `#`.
💡 Ändere am besten **eine Farbe nach der anderen** und schau dir das Ergebnis jeweils an.

### Welche Farbe macht was?

| Name | Wo sie vorkommt |
|---|---|
| `--cream` | heller Haupt-Hintergrund |
| `--cream-2` | etwas dunklerer Hintergrund (Einleitung, Über mich, Erfahrungen) |
| `--ink` | Überschriften und Haupttext |
| `--ink-soft` | Fließtext |
| `--clay` | **Akzentfarbe**: Buttons, Überzeilen, Symbole |
| `--clay-dark` | Buttons beim Darüberfahren mit der Maus |
| `--night` | dunkler Bereich ganz oben |
| `--cta` | dunkler Abschluss-Bereich |
| `--night-2` | Fußbereich ganz unten |

Für alles, was über Farben hinausgeht, z. B. andere Schriften, andere Abstände oder ein anderes Layout, nutze am besten [Kapitel 7](#7-größere-änderungen-mit-ki-claude).

---

## 7. Größere Änderungen mit KI (Claude)

Für alles, was der Editor nicht kann, hilft dir eine KI wie **Claude**. Programmieren musst du dafür nicht. Du beschreibst in normalen Worten, was du möchtest. Claude ändert die Dateien direkt in deinem GitHub-Repository.

### So startest du
1. Öffne **https://claude.ai** und melde dich an. Ein kostenloses Konto reicht oft schon. Für größere Arbeiten an Dateien kann ein bezahltes Abo nötig sein.
2. Verbinde dein **GitHub-Konto** mit Claude. Claude fragt dich danach, wenn du ein Repository nennst.
3. Schreib zum Beispiel:

> Mein GitHub-Repository ist **DEIN-BENUTZERNAME/website**. Es ist eine Eleventy-Website mit Pages CMS als Editor (Konfiguration in `.pages.yml`) und wird über GitHub Actions auf GitHub Pages veröffentlicht. Bitte [deine Änderung]. Neue Inhalte sollen im Editor bearbeitbar sein, ergänze dafür auch `.pages.yml`. Halte dich an das bestehende Design.

### Beispiele, die du nur noch anpassen musst
- „Füge unter ‚1:1 Sessions‘ einen neuen Bereich **Preise** mit drei Angeboten hinzu (Titel, Preis, kurze Beschreibung).“
- „Füge eine **Bildergalerie** mit beliebig vielen Fotos nach ‚Über mich‘ hinzu.“
- „Lege eine neue Unterseite **Workshops** an und verlinke sie im Menü.“
- „Füge bei ‚Über mich‘ ein **zweites Bild** hinzu.“
- „Tausche die **Reihenfolge**: Erfahrungen sollen vor den Sessions kommen.“
- „Ändere die **Schrift** der Überschriften in eine andere elegante Serifenschrift.“
- „Füge einen Bereich **Häufige Fragen** mit aufklappbaren Fragen hinzu.“
- „Ermögliche **Video-Feedbacks** von YouTube bei den Erfahrungsberichten“ (ausführlicher Text in [Kapitel 4](#4-feedback-von-kundinnen)).
- „Binde meinen **Online-Kalender** (Link: …) als Button bei den Sessions ein.“

### Tipps für gute Ergebnisse
- **Eine Änderung nach der anderen.** Kleine Schritte gehen fast immer gut.
- Bitte Claude, **vor dem Speichern zu prüfen**, ob alles funktioniert („Bitte teste den Build, bevor du speicherst“).
- Wenn dir etwas nicht gefällt, sag einfach: **„Mach die letzte Änderung rückgängig.“**
- Beschreibe genau, **wo** etwas hin soll, z. B. „unter dem Bereich Über mich“ oder „im Menü nach Kontakt“.
- Hast du einen Screenshot einer Website, die dir gefällt? Schick ihn mit: „So ähnlich soll es aussehen.“

---

## 8. Wenn etwas nicht funktioniert

| Problem | Lösung |
|---|---|
| **Meine Änderung ist nicht online.** | 1–2 Minuten warten. Dann die Seite mit **Strg + F5** neu laden (am Mac **Cmd + Shift + R**). |
| **Sie ist nach 5 Minuten immer noch nicht da.** | Auf GitHub im Repository auf **Actions** klicken. Hat der oberste Eintrag ein rotes ❌? Dann siehe nächste Zeile. |
| **Bei „Actions“ steht ein rotes ❌.** | Den Eintrag anklicken und rechts oben **„Re-run all jobs“** klicken. Klappt es wieder nicht, hat die letzte Änderung einen Fehler. Mach sie rückgängig ([Kapitel 9](#9-etwas-rückgängig-machen)) oder lass Claude den Fehler beheben: „Der Build in meinem Repository schlägt fehl, bitte prüfen und beheben.“ |
| **Bilder oder Design fehlen nach einem Domain-Wechsel.** | **Actions → „Website veröffentlichen“ → „Run workflow“** |
| **Das Feedback-Formular wird nicht angezeigt.** | Unter **Einstellungen** den Feedback-Schlüssel prüfen. Er muss ganz und ohne Leerzeichen eingefügt sein. |
| **Es kommt kein Feedback per E-Mail an.** | Im Spam-Ordner nachsehen. Die E-Mails kommen von Web3Forms. |
| **Ich kann mich bei Pages CMS nicht anmelden.** | Auf **github.com** einloggen, dann erneut auf app.pagescms.org „Sign in with GitHub“. Passwort vergessen? Auf github.com **„Forgot password?“** nutzen. |
| **Ein Feld fehlt im Editor.** | Das Feld ist nicht in `.pages.yml` eingetragen. Bitte Claude, es zu ergänzen. |
| **Ein Bild sieht unscharf aus.** | Ein größeres Foto hochladen (mind. 1800 px breit). |
| **Ein Bild ist falsch zugeschnitten.** | Ein Foto wählen, bei dem das Motiv auf der richtigen Seite ist (siehe Tabelle in [Kapitel 3](#3-texte-und-bilder-bearbeiten)). |

---

## 9. Etwas rückgängig machen

GitHub speichert **jede einzelne Version** jeder Datei.

### Einfachster Weg: Claude fragen
> „Bitte mach in meinem Repository **DEIN-BENUTZERNAME/website** die letzte Änderung rückgängig.“

### Selbst machen (für Texte)
1. Auf **github.com** dein Repository öffnen.
2. Die betroffene Datei öffnen. Die Startseiten-Texte liegen in **src → _data → home.json**.
3. Rechts oben auf **„History“** klicken. Dort siehst du alle bisherigen Versionen mit Datum.
4. Eine ältere Version anklicken. So siehst du, was sich geändert hat, und kannst den alten Text herauskopieren.
5. Den alten Text in Pages CMS wieder einfügen und speichern.

---

## 10. Sicherungskopie herunterladen

Ab und zu, z. B. einmal im Jahr, eine Kopie auf dem eigenen Computer speichern:

1. Auf **github.com** dein Repository öffnen.
2. Grüner Button **„Code“** → **„Download ZIP“**.

Darin ist deine komplette Website mit allen Texten und Bildern.

---

## 11. Überblick: Konten und Kosten

| Dienst | Wofür | Kosten | Konto |
|---|---|---|---|
| GitHub | Speicher und Veröffentlichung | kostenlos | ja, dein eigenes |
| Pages CMS | Editor | kostenlos | Anmeldung mit GitHub |
| Web3Forms | Feedback-Formular | kostenlos bis 250 Feedbacks pro Monat | nein, nur der Schlüssel per E-Mail |
| Eigene Domain | schöne Adresse | ca. 10–20 € pro Jahr | beim Domain-Anbieter |
| GitHub Pro (optional) | privates Repository mit Website | ein paar $ pro Monat | dein GitHub-Konto |
| Cloudflare (optional) | kostenlose Alternative bei privatem Repository | kostenlos | ja |
| Claude | größere Änderungen | kostenloses Konto möglich, für größere Arbeiten evtl. Abo | ja |

**Wichtige Adressen (zum Abspeichern):**
- Editor: **https://app.pagescms.org**
- Dateien und Einstellungen: **https://github.com/DEIN-BENUTZERNAME/website**
- Deine Website: **https://DEIN-BENUTZERNAME.github.io/website/** oder deine eigene Domain
- Feedback-Seite: **…/feedback/**

---

## 12. Repository privat stellen (optional)

**Musst du das?** Nein. Dein Repository ist öffentlich, damit die Veröffentlichung kostenlos bleibt. Man kann dort nur das sehen, was ohnehin auf deiner Website steht: Texte, Bilder und Design. **Ändern kannst nur du.** Für die meisten Websites ist „öffentlich“ völlig in Ordnung.

Wenn du es trotzdem privat haben möchtest, ist das wichtig zu wissen:

> ⚠️ **Mit dem kostenlosen GitHub-Konto geht deine Website offline, sobald du das Repository auf „Private“ stellst.** GitHub veröffentlicht Websites aus privaten Repositories nur mit einem bezahlten Konto.

Es gibt zwei Möglichkeiten:

### Möglichkeit A: GitHub Pro (kostenpflichtig, am einfachsten)
Mit **GitHub Pro** bleibt deine Website online, auch wenn das Repository privat ist. Die Website selbst bleibt dabei für alle sichtbar, nur die Dateien sind versteckt. Pro kostet ein paar Dollar im Monat. Den aktuellen Preis siehst du auf github.com/pricing.

1. Auf **github.com** oben rechts auf dein **Profilbild → Settings**.
2. Links auf **Billing and licensing** bzw. **„Plans and usage“** → **GitHub Pro** auswählen und bezahlen.
3. **Erst danach** dein Repository öffnen → **Settings** → **General** → ganz nach unten zu **„Danger Zone“** → **„Change visibility“** → **„Make private“** → bestätigen.
4. Deine Website kurz aufrufen und prüfen, ob sie noch erreichbar ist. Falls nicht: **Actions → „Website veröffentlichen“ → „Run workflow“**.

⚠️ **Wichtig:**
- Die Reihenfolge einhalten: **zuerst Pro buchen, dann auf privat stellen.**
- Wenn du Pro später **kündigst**, geht deine Website offline. Stell das Repository dann vorher wieder auf **„Public“** (gleicher Weg wie oben, nur „Make public“).

### Möglichkeit B: Kostenlos über Cloudflare (aufwändiger)
Das Repository bleibt **privat** auf GitHub, veröffentlicht wird die Website aber kostenlos über **Cloudflare Pages** statt über GitHub. Der Editor (Pages CMS) funktioniert genauso wie bisher.

Dafür müssen ein paar technische Einstellungen geändert werden. Am einfachsten lässt du dir dabei von Claude helfen ([Kapitel 7](#7-größere-änderungen-mit-ki-claude)):

> Mein GitHub-Repository **DEIN-BENUTZERNAME/website** ist eine Eleventy-Website mit Pages CMS, die bisher über GitHub Actions auf GitHub Pages veröffentlicht wird. Ich möchte das Repository auf privat stellen und die Website stattdessen kostenlos über **Cloudflare Pages** veröffentlichen. Bitte passe das Repository an und erkläre mir Schritt für Schritt, was ich bei Cloudflare einstellen muss (Build-Befehl, Ausgabeordner, eigene Domain).

Grob läuft es so ab:
1. Kostenloses Konto auf **cloudflare.com** anlegen.
2. Bei Cloudflare unter **Workers & Pages** ein neues Projekt anlegen und dein GitHub-Repository verbinden.
3. Als Build-Befehl `npm run build` und als Ausgabeordner `_site` eintragen.
4. Deine Website ist dann unter `….pages.dev` erreichbar. Eine eigene Domain kannst du bei Cloudflare direkt verbinden.
5. **Erst wenn die Website über Cloudflare läuft**, das Repository auf GitHub auf **privat** stellen (siehe Schritt 3 bei Möglichkeit A). Danach unter **Settings → Pages** GitHub Pages abschalten.

💡 **Wenn du eine eigene Domain hast**, musst du deren DNS-Einträge von GitHub auf Cloudflare umstellen. Cloudflare zeigt dir dabei genau an, was einzutragen ist.

---

Viel Freude mit deiner Website! 🌿
