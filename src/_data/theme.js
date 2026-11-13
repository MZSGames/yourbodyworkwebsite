// Berechnet aus der Auswahl in src/_data/design.json (Pages CMS → Design)
// die Farben und Schriften der Website.
import { readFileSync } from "node:fs";
import { palettes, fontPairs, headingFiles, bodyFiles } from "../../lib/design.js";

const hexOk = (v) => typeof v === "string" && /^#[0-9a-fA-F]{6}$/.test(v.trim());

const darken = (hex, amount = 0.16) => {
  const n = parseInt(hex.slice(1), 16);
  const c = [n >> 16, (n >> 8) & 255, n & 255].map((x) => Math.round(x * (1 - amount)));
  return "#" + c.map((x) => x.toString(16).padStart(2, "0")).join("");
};
const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

export default function () {
  let design = {};
  try {
    design = JSON.parse(readFileSync(new URL("./design.json", import.meta.url), "utf8"));
  } catch {}

  const p = palettes[design.palette] || palettes.erdtoene;
  const f = fontPairs[design.fonts] || fontPairs.elegant;
  const accent = hexOk(design.accent) ? design.accent.trim() : p.accent;

  const vars = {
    "--cream": p.cream,
    "--cream-2": p.cream2,
    "--sand": p.sand,
    "--ink": p.ink,
    "--ink-soft": p.inkSoft,
    "--clay": accent,
    "--clay-dark": darken(accent),
    "--night": p.night,
    "--night-2": p.night2,
    "--cta": p.cta,
    "--line": rgba(accent, 0.28),
    "--serif": `"${f.heading[1]}", Georgia, serif`,
    "--sans": `"${f.body[1]}", "Helvetica Neue", Arial, sans-serif`,
  };

  // Pfad-Präfix (z. B. /website/), da <style> nicht automatisch angepasst wird
  const prefix = (process.env.PATH_PREFIX || "/").replace(/\/?$/, "/").replace(/^\/?/, "/");

  const face = (family, file) => {
    const [, weight, style] = file.match(/-(\d{3})-(normal|italic)\.woff2$/);
    return `@font-face { font-family: "${family}"; src: url("${prefix}fonts/${file}") format("woff2"); font-weight: ${weight}; font-style: ${style}; font-display: swap; }`;
  };

  const css = [
    ...headingFiles(f.heading[0]).map((file) => face(f.heading[1], file)),
    ...bodyFiles(f.body[0]).map((file) => face(f.body[1], file)),
    ":root { " + Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join(" ") + " }",
  ].join("\n");

  return {
    css,
    preload: `/fonts/${headingFiles(f.heading[0])[0]}`,
  };
}
