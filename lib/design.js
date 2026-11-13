// Farbpaletten und Schriftpaare, die im Editor (Pages CMS → Design) ausgewählt werden können.
// Neue Palette oder Schrift ergänzen: hier eintragen UND in .pages.yml bei "design" als Auswahl hinzufügen.

export const palettes = {
  erdtoene: {
    label: "Erdtöne",
    cream: "#f3ece5", cream2: "#ede3da", sand: "#e4d6ca",
    ink: "#2e211b", inkSoft: "#5a463c",
    accent: "#7d4a35",
    night: "#2a1d17", night2: "#3a2a22", cta: "#4b3428",
  },
  salbei: {
    label: "Salbei",
    cream: "#f1f0ea", cream2: "#e7e8de", sand: "#d6d9cb",
    ink: "#232a22", inkSoft: "#4d574b",
    accent: "#5f7458",
    night: "#1f2620", night2: "#2b332b", cta: "#3a4537",
  },
  rose: {
    label: "Rosé",
    cream: "#f6eeec", cream2: "#f0e3e0", sand: "#e6d3cf",
    ink: "#33232a", inkSoft: "#5e4750",
    accent: "#a0606f",
    night: "#2b1d22", night2: "#3a282f", cta: "#4e333c",
  },
  meer: {
    label: "Sand & Meer",
    cream: "#f3f0ea", cream2: "#e9e6df", sand: "#d9d6cd",
    ink: "#1f2a30", inkSoft: "#4a5960",
    accent: "#4f6f7d",
    night: "#1a2328", night2: "#263239", cta: "#33444c",
  },
  lavendel: {
    label: "Lavendel",
    cream: "#f3f1f5", cream2: "#e9e5ee", sand: "#dcd5e3",
    ink: "#2a2433", inkSoft: "#554c60",
    accent: "#7a6a94",
    night: "#221d2a", night2: "#2f2838", cta: "#423852",
  },
  olive: {
    label: "Olive",
    cream: "#f2f1e8", cream2: "#e8e6d8", sand: "#d9d6c3",
    ink: "#2a2a1f", inkSoft: "#545440",
    accent: "#76763f",
    night: "#23241a", night2: "#303123", cta: "#45462f",
  },
  pfirsich: {
    label: "Pfirsich",
    cream: "#faf1ea", cream2: "#f5e6dc", sand: "#edd6c7",
    ink: "#3a2620", inkSoft: "#694d43",
    accent: "#c46d4f",
    night: "#33211b", night2: "#422c24", cta: "#5e3b2f",
  },
  wald: {
    label: "Waldgrün",
    cream: "#eef1ec", cream2: "#e2e8e0", sand: "#cfd8cc",
    ink: "#1c2a22", inkSoft: "#455a4c",
    accent: "#2f5d46",
    night: "#14201a", night2: "#1d2b23", cta: "#29402f",
  },
  stein: {
    label: "Stein (schlicht)",
    cream: "#f4f3f1", cream2: "#ebe9e6", sand: "#dcd9d4",
    ink: "#262626", inkSoft: "#555352",
    accent: "#6b6763",
    night: "#1f1f1f", night2: "#2c2b2a", cta: "#3d3b39",
  },
  gold: {
    label: "Creme & Gold",
    cream: "#f8f4ec", cream2: "#f1eadc", sand: "#e6dcc6",
    ink: "#2d2618", inkSoft: "#5c5240",
    accent: "#a07e3e",
    night: "#26201a", night2: "#342c22", cta: "#4a3d2b",
  },
  nachtblau: {
    label: "Nachtblau",
    cream: "#f2f2f4", cream2: "#e7e8ee", sand: "#d4d7e2",
    ink: "#1c2033", inkSoft: "#474d66",
    accent: "#3d4f8a",
    night: "#141829", night2: "#1e2337", cta: "#2a3150",
  },
  terrakotta: {
    label: "Terrakotta",
    cream: "#f5ede6", cream2: "#f0e2d6", sand: "#e8d2c2",
    ink: "#2f1f17", inkSoft: "#5e4334",
    accent: "#b0603c",
    night: "#2b1a12", night2: "#3b261b", cta: "#5a3322",
  },
};

// Jede Schrift: Paket-Name (@fontsource/…), Schriftname im Browser
export const fontPairs = {
  elegant:   { label: "Elegant",   heading: ["cormorant-garamond", "Cormorant Garamond"], body: ["jost", "Jost"] },
  klassisch: { label: "Klassisch", heading: ["lora", "Lora"],                             body: ["source-sans-3", "Source Sans 3"] },
  modern:    { label: "Modern",    heading: ["playfair-display", "Playfair Display"],     body: ["montserrat", "Montserrat"] },
  weich:     { label: "Weich",     heading: ["fraunces", "Fraunces"],                     body: ["nunito", "Nunito"] },
  zeitlos:   { label: "Zeitlos",   heading: ["eb-garamond", "EB Garamond"],               body: ["karla", "Karla"] },
  schlicht:  { label: "Schlicht",  heading: ["dm-sans", "DM Sans"],                       body: ["dm-sans", "DM Sans"] },
  edel:      { label: "Edel",      heading: ["bodoni-moda", "Bodoni Moda"],               body: ["raleway", "Raleway"] },
  ruhig:     { label: "Ruhig",     heading: ["spectral", "Spectral"],                     body: ["work-sans", "Work Sans"] },
};

// Feinschliff-Optionen (Werte für CSS-Variablen)
export const options = {
  text_size: { klein: 0.92, normal: 1, gross: 1.1 },
  buttons:   { rund: "999px", weich: "10px", eckig: "0px" },
  corners:   { rund: "18px", weich: "8px", eckig: "0px" },
  spacing:   { kompakt: 0.72, normal: 1, luftig: 1.3 },
};

// Benötigte Schnitte: Überschriften 400/500 normal+kursiv, Text 300/400/500 normal
export const headingFiles = (pkg) =>
  ["400-normal", "400-italic", "500-normal", "500-italic"].map((v) => `${pkg}-latin-${v}.woff2`);
export const bodyFiles = (pkg) =>
  ["300-normal", "400-normal", "500-normal"].map((v) => `${pkg}-latin-${v}.woff2`);

// Alle Schriftdateien, die mit der Website ausgeliefert werden
export const allFontFiles = () => {
  const out = new Set();
  for (const p of Object.values(fontPairs)) {
    headingFiles(p.heading[0]).forEach((f) => out.add(`${p.heading[0]}/files/${f}`));
    bodyFiles(p.body[0]).forEach((f) => out.add(`${p.body[0]}/files/${f}`));
  }
  return [...out];
};
