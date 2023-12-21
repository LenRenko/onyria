/**
 * A simple and flexible system for world-building using an arbitrary collection of character and item attributes
 * Author: Atropos
 * Software License: GNU GPLv3
 */

// Import Modules
import {System, ONYRIA} from "./config.js";
import { registerSystemSettings } from "./settings.js";
import { preloadHandlebarsTemplates } from "./templates.js";
import { OnyriaTokenDocument } from "./token.js";

import {OnyriaActor} from "./actors/actor.js";
import {OnyriaItem} from "./items/item.js";

import {OnyriaItemSheet} from "./items/item-sheet.js";
import {OnyriaCharacterSheet} from "./actors/character-sheet.js";
import {OnyriaLootSheet} from "./actors/loot-sheet.js";

import {OnyriaPlayerHand} from "./cards/player-hand.js";
import {OnyriaCards} from "./cards/cards.js";

import { registerHandlebarsHelpers } from "./helpers.js";

import {Macros} from "./system/macros.js";

import * as OnyriaChat from "./chat.js";


Hooks.once("init", async function () {

    console.info("----------   Onyria : System Initializing...");

    // Register System Settings
    registerSystemSettings();    

    /**
     * Set an initiative formula for the system
     * @type {String}
     */

    CONFIG.Combat.initiative = {
        formula: "@attributes.init.value/100",
        decimals: 2
    };

    CONFIG.ONYRIA = ONYRIA;
    // Define custom Entity classes
    CONFIG.Actor.documentClass = OnyriaActor;
    CONFIG.Item.documentClass = OnyriaItem;
    CONFIG.Token.documentClass = OnyriaTokenDocument;

    CONFIG.Combat.initiative.formula = "@attributes.initiative+1d6 ";

    CONFIG.Cards.documentClass = OnyriaCards;

    // Create a namespace within the game global
    game.onyria = {
        skin : "base",
        macros : Macros,
        config: ONYRIA
    };

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);

    console.info("Onyria : Standard sheets unregistered");

    // Register item sheets
    Items.registerSheet("onyria", OnyriaItemSheet, {
        types: ["item", "competence", "profession", "origine", "spell", "trait", "savoir"],
        makeDefault: true,
        label: "ONYRIA.SheetClassItem"
    });

        // Register actor sheets
    Actors.registerSheet("onyria", OnyriaCharacterSheet, {
        types: ["character","npc"], 
        makeDefault: true,
        label: "ONYRIA.SheetClassCharacter"
    });

      // Register actor sheets
      Actors.registerSheet("onyria", OnyriaLootSheet, {
        types: ["loot"], 
        makeDefault: true,
        label: "ONYRIA.SheetClassLoot"
    });

    DocumentSheetConfig.registerSheet(Cards, "core", OnyriaPlayerHand, { label: "Onyria Player Hand", types: ["hand"], makeDefault: true });
    
    console.info("Onyria : New sheets registered");
    

    // Preload Handlebars Templates
    preloadHandlebarsTemplates();

    // Register Handlebars helpers
    registerHandlebarsHelpers();

    CONFIG.TinyMCE.content_css.push("/systems/onyria/css/onyria_TinyMCE.css");

    console.info("Onyria : Init Done");

});

Hooks.once("setup", function() {

  console.info("Onyria : Setup...");

    const toLocalize = [
        "itemProperties", "itemSubCategories", "languages"
      ];

  // Exclude some from sorting where the default order matters
  const noSort = [
    "itemProperties", "itemSubCategories", "languages"
  ];

  // Localize and sort CONFIG objects
  for ( let o of toLocalize ) {
    const localized = Object.entries(CONFIG.ONYRIA[o]).map(e => {
      return [e[0], game.i18n.localize(e[1])];
    });
    if ( !noSort.includes(o) ) localized.sort((a, b) => a[1].localeCompare(b[1]));
    CONFIG.ONYRIA[o] = localized.reduce((obj, e) => {
      obj[e[0]] = e[1];
      return obj;
    }, {});
  }

  console.info("Onyria : Setup done");

  });


  /* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function() {

  console.info("Onyria : Ready...");

    if( (game.settings.get("onyria", "onyriaVersion") == "onyria")
    || (game.settings.get("onyria", "onyriaVersion") == "stars")
    || (game.settings.get("onyria", "onyriaVersion") == "contemporain") )
    {
      console.info("Onyria Skin : "+game.settings.get("onyria", "onyriaVersion"));
    }
    else{
      game.settings.set("onyria", "onyriaVersion", "onyria");
      console.info("Onyria Skin Reset : "+game.settings.get("onyria", "onyriaVersion"));
    }

    CONFIG.TinyMCE.style_formats.push({
      title: "Onyria",
      items: [
        { title: "Info", block: "section", classes: "onyria-info", wrapper: true },
        { title: "Texte", block: "section", classes: "onyria-block onyria-texte", wrapper: true },
        { title: "Règle", block: "section", classes: "onyria-block onyria-regle", wrapper: true },
        { title: "Point clé", block: "section", classes: "onyria-block onyria-point-cle", wrapper: true },
        { title: "Secret", block: "section", classes: "secret onyria-block onyria-secret", wrapper: true },
        { title: "Quête principale", block: "section", classes: "onyria-block onyria-quete-principale", wrapper: true },
        { title: "Quête parallèle", block: "section", classes: "onyria-block onyria-quete-parallele", wrapper: true },
        { title: "Quête personnelle", block: "section", classes: "onyria-block onyria-quete-personnelle", wrapper: true },
        { title: "Quête principale fin", block: "section", classes: "onyria-block onyria-quete-principale-fin", wrapper: true },
        { title: "Quête parallèle fin", block: "section", classes: "onyria-block onyria-quete-parallele-fin", wrapper: true },
        { title: "Quête personnelle fin", block: "section", classes: "onyria-block onyria-quete-personnelle-fin", wrapper: true },
        { title: "Quête résolue", block: "section", classes: "onyria-block onyria-quete-resolue", wrapper: true },
        { title: "Quête Personnage Exception", block: "section", classes: "onyria-block onyria-quete-exception", wrapper: true },
        { title: "Quête Alchimiste", block: "section", classes: "onyria-block onyria-quete-alchimiste", wrapper: true },
        { title: "Quête Magicien", block: "section", classes: "onyria-block onyria-quete-magicien", wrapper: true },
        { title: "Quête Noble", block: "section", classes: "onyria-block onyria-quete-noble", wrapper: true },
        { title: "Quête Combattant", block: "section", classes: "onyria-block onyria-quete-combattant", wrapper: true },
        { title: "Quête Dieu Ennemi", block: "section", classes: "onyria-block onyria-quete-ennemi", wrapper: true },
      ],
    });

});

Hooks.on("renderChatMessage", (app, html, data) => {OnyriaChat.sortCustomAgeChatCards(app, html, data)});

Hooks.on('updateActor', (actor, change, options, userId) => {
  //updating playerList with users character up-to-date data
  ui.players.render(true);

  if (actor.type === "character") {

    let items = actor.items;
    let caps = items.filter(item => item.type === "competence").sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    let caps_spe = caps.filter(item => item.system.special === true);
    let caps_magie = caps.filter(item => item.name === "Modélisation");
    if(caps_magie.length > 0)
    {
        let hand = actor.getDefaultHand()
        //If the update includes permissions, sync them to the hand
        if (hand && change.ownership && game.userId === userId) {
            //DO NOT PUT ANYTHING ELSE IN THIS UPDATE! diff:false, recursive:false can easily nuke stuff
            hand.update({ ownership: actor.getCardOwnership() }, { diff: false, recursive: false })
        }

        let deck = actor.getDefaultDeck()
        //If the update includes permissions, sync them to the deck
        if (deck && change.ownership && game.userId === userId) {
            //DO NOT PUT ANYTHING ELSE IN THIS UPDATE! diff:false, recursive:false can easily nuke stuff
            deck.update({ ownership: actor.getCardOwnership() }, { diff: false, recursive: false })
        }

        let discard = actor.getDefaultDiscard()
        //If the update includes permissions, sync them to the hand
        if (discard && change.ownership && game.userId === userId) {
            //DO NOT PUT ANYTHING ELSE IN THIS UPDATE! diff:false, recursive:false can easily nuke stuff
            discard.update({ ownership: actor.getCardOwnership() }, { diff: false, recursive: false })
        }
    }
  }
});
