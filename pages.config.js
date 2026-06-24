import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cookieBanner, footer, mobileMenu } from "./pages-data/shared.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, "pages-data");

const dataFiles = fs
  .readdirSync(dataDir)
  .filter((f) => f.endsWith(".js") && f !== "globalContext.js");

const pagesConfig = {};

for (const file of dataFiles) {
  const mod = await import(`./pages-data/${file}`);
  const data = mod.default;

  for (const key of Object.keys(data)) {
    if (pagesConfig[key]) {
      console.warn(
        `[pages.config] Дубликат ключа "${key}" в ${file}, перезапишет предыдущее значение`,
      );
    }
  }

  Object.assign(pagesConfig, data);
}

for (const pageData of Object.values(pagesConfig)) {
  if (
    pageData &&
    typeof pageData === "object" &&
    !Object.hasOwn(pageData, "cookieBanner")
  ) {
    pageData.cookieBanner = cookieBanner;
  }
}

// Автоматически собираем список всех страниц для /pages.html
const allHtmlFiles = fs
  .readdirSync(path.resolve(__dirname, "pages"))
  .filter((f) => f.endsWith(".html") && f !== "pages.html")
  .sort((a, b) => a.localeCompare(b, "ru"));

const pagesList = allHtmlFiles.map((file) => {
  const key = `/${file}`;
  const title = pagesConfig[key]?.title || file.replace(".html", "");
  return { url: key, title };
});

pagesConfig["/pages.html"] = {
  title: "Все страницы",
  headerCompact: true,
  mobileMenu,
  footer,
  cookieBanner,
  pagesCount: pagesList.length,
  pagesList,
};

export default pagesConfig;
