import { ONYRIA } from "./module/config.js";
import { OnyriaItemSheet } from "./module/sheets/item-sheet.js";

Hooks.once("init", async function () {
  console.log("---------- Onyria | Initializing system.....");

  CONFIG.onyria = ONYRIA;

  //   Remove the default item sheet in selection
  Items.unregisterSheet("core", ItemSheet);
  //   Add the new item sheet for item creation
  Items.registerSheet("onyria", OnyriaItemSheet, { makeDefault: true });
});
