#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const glob = require("glob");
const ts = require("typescript");
const { Agent, setGlobalDispatcher } = require("undici");

setGlobalDispatcher(
  new Agent({
    headersTimeout: 0,
    bodyTimeout: 0,
  })
);

const argv = process.argv.slice(2);
const hasFlag = (flag) => argv.includes(flag);
const parseBoolean = (value, defaultValue = false) => {
  if (value === undefined) return defaultValue;
  if (typeof value === "boolean") return value;
  const normalized = String(value).toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return defaultValue;
};

const CATALOG = process.env.TRANSLATIONS_CATALOG || "horeqa-site";
const API_URL = process.env.TRANSLATIONS_API_URL || "https://api.qleber.com";
const API_TOKEN = process.env.TRANSLATIONS_API_TOKEN || "0c2736db15554c911163ff9a62dbea40";
const AUTOTRANSLATE = hasFlag("--no-autotranslate")
  ? false
  : hasFlag("--autotranslate")
    ? true
    : parseBoolean(process.env.AUTOTRANSLATE, true);
const REWRITE = hasFlag("--rewrite") ? true : parseBoolean(process.env.REWRITE, false);
const PREVIEW = hasFlag("--preview");

if ((!API_URL || !API_TOKEN) && !PREVIEW) {
  console.error("TRANSLATIONS_API_URL y TRANSLATIONS_API_TOKEN requeridos");
  process.exit(1);
}

function getScriptKind(file) {
  if (file.endsWith(".tsx")) return ts.ScriptKind.TSX;
  if (file.endsWith(".ts")) return ts.ScriptKind.TS;
  if (file.endsWith(".jsx")) return ts.ScriptKind.JSX;
  return ts.ScriptKind.JS;
}

function getStringLiteral(node) {
  if (!node) {
    return null;
  }
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return null;
}

function extractInstructions(args) {
  if (args.length < 3) {
    return "";
  }
  const candidate = args[args.length - 1];
  const text = getStringLiteral(candidate);
  if (!text) {
    return "";
  }
  return text.trim();
}

function findTrnCalls() {
  const files = glob.sync("{app,components,lib,contexts}/**/*.{ts,tsx,js,jsx}");
  const keys = new Map();

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const source = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, getScriptKind(file));

    function visit(node) {
      if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === "TRN") {
        const keyNode = node.arguments[0];
        const defaultNode = node.arguments[1];
        const key = getStringLiteral(keyNode);
        const def = getStringLiteral(defaultNode);
        if (!key || !def) {
          return;
        }
        const instructions = extractInstructions(node.arguments);
        const existing = keys.get(key);
        if (!existing) {
          keys.set(key, {
            name: key,
            default: def,
            instructions,
          });
        } else if (!existing.instructions && instructions) {
          existing.instructions = instructions;
        }
      }
      ts.forEachChild(node, visit);
    }

    ts.forEachChild(source, visit);
  });

  return Array.from(keys.values());
}

async function sendKeys(keys) {
  if (PREVIEW) {
    console.log(JSON.stringify(keys, null, 2));
    return;
  }

  const url = `${API_URL}/translate/translationsCatalogs/${CATALOG}/translationKeys?autotranslate=${AUTOTRANSLATE ? 1 : 0}&rewrite=${REWRITE ? 1 : 0}&purge=0`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Token": API_TOKEN,
    },
    body: JSON.stringify(keys),
  });

  if (!res.ok) {
    console.error("Error enviando claves", res.status, await res.text());
    process.exit(1);
  }

  console.log(`Enviadas ${keys.length} claves al catalogo ${CATALOG}`);
}

async function main() {
  const keys = findTrnCalls();
  if (keys.length === 0) {
    console.log("No se encontraron claves");
    return;
  }
  await sendKeys(keys);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
