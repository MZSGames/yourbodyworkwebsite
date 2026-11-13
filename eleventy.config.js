// Eleventy-Konfiguration: baut aus den Inhalten in src/ die fertige Website in _site/
import fs from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { allFontFiles } from "./lib/design.js";

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export default function (eleventyConfig) {
  // Dateien 1:1 übernehmen
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  // Schriften lokal ausliefern (kein Google-Fonts-Aufruf → DSGVO-freundlich)
  for (const f of allFontFiles()) {
    eleventyConfig.addPassthroughCopy({
      [`node_modules/@fontsource/${f}`]: `fonts/${f.split("/").pop()}`,
    });
  }

  // Zeilenumbrüche in Impressum/Datenschutz beibehalten
  eleventyConfig.amendLibrary("md", (md) => md.set({ breaks: true }));

  // Design-Auswahl neu einlesen, wenn sie sich ändert
  eleventyConfig.addWatchTarget("./lib/");

  // Bildausschnitt → CSS object-position.
  // Werte aus dem Editor: oben-links, oben, oben-rechts, links, mitte, rechts, unten-links, unten, unten-rechts.
  // "oben"/"mitte"/"unten" behalten die waagrechte Standard-Position der jeweiligen Stelle.
  // Leer oder ungültig = Standard-Position.
  eleventyConfig.addFilter("focus", (value, fallback = "50% 50%") => {
    const v = String(value ?? "").trim().toLowerCase();
    const fx = String(fallback).split(" ")[0];
    const Y = { oben: "15%", mitte: "50%", unten: "85%" };
    const X = { links: "15%", rechts: "85%" };
    if (Y[v]) return `object-position: ${fx} ${Y[v]}`;
    if (X[v]) return `object-position: ${X[v]} 50%`;
    const [y, x] = v.split("-");
    if (Y[y] && X[x]) return `object-position: ${X[x]} ${Y[y]}`;
    const m = v.match(/^(\d{1,3})\s+(\d{1,3})$/);
    if (m) {
      const c = (n) => Math.min(100, Math.max(0, Number(n)));
      return `object-position: ${c(m[1])}% ${c(m[2])}%`;
    }
    return `object-position: ${fallback}`;
  });

  // Liste aller hochgeladenen Bilder (für die Hilfsseite /bildausschnitt/)
  eleventyConfig.addGlobalData("uploads", () => {
    try {
      return fs.readdirSync("src/images/uploads")
        .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
        .sort()
        .map((f) => `/images/uploads/${f}`);
    } catch { return []; }
  });

  // Text mit Leerzeilen → mehrere Absätze
  eleventyConfig.addFilter("paras", (text) =>
    String(text ?? "")
      .trim()
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((p) => `<p>${escapeHtml(p.trim()).replace(/\n/g, "<br>")}</p>`)
      .join("\n")
  );
  // Einfacher Zeilenumbruch → <br> (z. B. für mehrzeilige Überschriften)
  eleventyConfig.addFilter("lines", (text) =>
    escapeHtml(String(text ?? "").trim()).replace(/\n/g, "<br>")
  );

  // Passt alle Links/Bildpfade an, falls die Seite in einem Unterordner läuft
  // (z. B. benutzername.github.io/ronja-website/ – mit eigener Domain egal)
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
