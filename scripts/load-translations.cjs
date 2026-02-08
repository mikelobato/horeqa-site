#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const langs = require("../config/supported-langs.json");
const langsSet = new Set(langs);

const CATALOG = process.env.TRANSLATIONS_CATALOG || "horeqa-site";
const API_URL = process.env.TRANSLATIONS_API_URL || "https://api.qleber.com";
const API_TOKEN = process.env.TRANSLATIONS_API_TOKEN || "0c2736db15554c911163ff9a62dbea40";

if (!API_URL || !API_TOKEN) {
  console.error("TRANSLATIONS_API_URL y TRANSLATIONS_API_TOKEN requeridos");
  process.exit(1);
}

async function fetchCatalog() {
  const url = `${API_URL}/translate/translationsCatalogs/${CATALOG}/translations`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Token": API_TOKEN,
    },
  });
  if (!res.ok) {
    console.error("Error obteniendo traducciones", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  return data.translations || data.locales || data;
}

function normalizeLocales(payload) {
  const locales = {};
  Object.entries(payload).forEach(([fullKey, value]) => {
    const idx = fullKey.lastIndexOf(".");
    if (idx === -1) {
      return;
    }
    const lang = fullKey.slice(idx + 1);
    if (!langsSet.has(lang)) {
      return;
    }
    const key = fullKey.slice(0, idx);
    if (!locales[lang]) {
      locales[lang] = {};
    }
    locales[lang][key] = value;
  });
  return locales;
}

async function main() {
  const payload = await fetchCatalog();
  const locales = normalizeLocales(payload);

  if (!fs.existsSync("translations")) {
    fs.mkdirSync("translations", { recursive: true });
  }

  Object.entries(locales).forEach(([lang, map]) => {
    const sorted = Object.keys(map)
      .sort()
      .reduce((acc, key) => {
        acc[key] = map[key];
        return acc;
      }, {});
    fs.writeFileSync(
      path.join("translations", `${lang}.json`),
      JSON.stringify(sorted, null, 2)
    );
    console.log(`Escrito translations/${lang}.json`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
