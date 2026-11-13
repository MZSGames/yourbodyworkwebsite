// Berechnet aus der Auswahl in src/_data/design.json (Pages CMS → Design)
// die Farben, Schriften und Gestaltungs-Optionen der Website.
// Ungültige oder fehlende Angaben fallen automatisch auf den Standard zurück.
import { readFileSync } from "node:fs";
import { palettes, fontPairs, options, headingFiles, bodyFiles } from "../../lib/design.js";

const hexOk = (v) => typeof v === "string" && /^#[0-9a-fA-F]{6}$/.test(v.trim());
const toRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
};
const toHex = (rgb) => "#" + rgb.map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");
// mix(a, b, t): t = Anteil von b (0–1)
const mix = (a, b, t) => toHex(toRgb(a).map((x, i) => x + (toRgb(b)[i] - x) * t));
const darken = (hex, amount = 0.16) => mix(hex, "#000000", amount);
const rgba = (hex, a) => `rgba(${toRgb(hex).join(", ")}, ${a})`;
const pick = (table, key, fallback) => (key in table ? table[key] : table[fallback]);

export default function () {
  let design = {};
  try {
    design = JSON.parse(readFileSync(new URL("./design.json", import.meta.url), "utf8"));
  } catch {}

  const p = palettes[design.palette] || palettes.erdtoene;
  const f = fontPairs[design.fonts] || fontPairs.elegant;
  const own = design.custom_colors || {};

  // Farben: Palette, optional einzeln überschrieben
  let cream = p.cream, cream2 = p.cream2, sand = p.sand, ink = p.ink, inkSoft = p.inkSoft;
  let night = p.night, night2 = p.night2, cta = p.cta;
  if (hexOk(own.text)) { ink = own.text.trim(); }
  if (hexOk(own.background)) { cream = own.background.trim(); }
  if (hexOk(own.background) || hexOk(own.text)) {
    inkSoft = mix(ink, cream, 0.28);
    sand = mix(cream, ink, 0.12);
  }
  if (hexOk(own.background_alt)) cream2 = own.background_alt.trim();
  else if (hexOk(own.background)) cream2 = mix(cream, ink, 0.05);
  if (hexOk(own.dark)) {
    night = own.dark.trim();
    night2 = mix(night, "#ffffff", 0.08);
    cta = mix(night, "#ffffff", 0.16);
  }
  const accent = hexOk(design.accent) ? design.accent.trim() : p.accent;

  const vars = {
    "--cream": cream,
    "--cream-2": cream2,
    "--sand": sand,
    "--ink": ink,
    "--ink-soft": inkSoft,
    "--clay": accent,
    "--clay-dark": darken(accent),
    "--night": night,
    "--night-2": night2,
    "--cta": cta,
    "--line": rgba(accent, 0.28),
    "--serif": `"${f.heading[1]}", Georgia, serif`,
    "--sans": `"${f.body[1]}", "Helvetica Neue", Arial, sans-serif`,
    "--fs": pick(options.text_size, design.text_size, "normal"),
    "--btn-radius": pick(options.buttons, design.buttons, "rund"),
    "--radius": pick(options.corners, design.corners, "rund"),
    "--space": pick(options.spacing, design.spacing, "normal"),
  };

  // Pfad-Präfix (z. B. /website/), da <style> nicht automatisch angepasst wird
  const prefix = (process.env.PATH_PREFIX || "/").replace(/\/?$/, "/").replace(/^\/?/, "/");
  const face = (family, file) => {
    const [, weight, style] = file.match(/-(\d{3})-(normal|italic)\.woff2$/);
    return `@font-face { font-family: "${family}"; src: url("${prefix}fonts/${file}") format("woff2"); font-weight: ${weight}; font-style: ${style}; font-display: swap; }`;
  };
  const faces = new Map();
  headingFiles(f.heading[0]).forEach((file) => faces.set(file, face(f.heading[1], file)));
  bodyFiles(f.body[0]).forEach((file) => faces.set(file, face(f.body[1], file)));

  const css = [
    ...faces.values(),
    ":root { " + Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join(" ") + " }",
  ].join("\n");

  return {
    css,
    preload: `/fonts/${headingFiles(f.heading[0])[0]}`,
    bodyClass: design.image_fade === "ohne" ? "fade-off" : "",
  };
}
