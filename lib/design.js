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
