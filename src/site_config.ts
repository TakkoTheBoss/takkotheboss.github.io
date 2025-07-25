// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Hachi Programming Language"
export const SITE_DESCRIPTION = "Learn About the Hachi Programming Language"
export const SITE_URL = "https://takkotheboss.github.io/"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction",
    "/docs/get-started/installation",
    "/docs/get-started/issues",
  ],
  "How-To": [
    "/docs/howto/use",
    "/docs/howto/import",
    "/docs/howto/shell",
  ],
  "Tutorials": [
    "/docs/tutorials/basics",
    "/docs/tutorials/imports",
    "/docs/tutorials/inlinecpp"
  ],
  "Language": [
    "/docs/hlang/syntax",
    "/docs/hlang/controls",
    "/docs/hlang/functions",
  ],
  "Core Library": [
    "/docs/modules/calc",
    "/docs/modules/data",
    //"/docs/modules/dt",
    "/docs/modules/fmt",
    //"/docs/modules/fs",
    "/docs/modules/net",
    //"/docs/modules/os",
    //"/docs/modules/re",
    "/docs/modules/so",
    "/docs/modules/sys"
  ],
  //"Guides": [
  //  "/docs/guides/migrate-from-z",
  //]
}
