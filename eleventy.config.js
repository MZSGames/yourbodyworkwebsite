// Eleventy-Konfiguration: baut aus den Inhalten in src/ die fertige Website in _site/
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
