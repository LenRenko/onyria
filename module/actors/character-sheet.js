/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
import {OnyriaActorSheet} from "./actor-sheet.js";
import {System} from "../config.js";

export class OnyriaCharacterSheet extends OnyriaActorSheet {

    static defaultHeight() {
        let height;
        if(game.settings.get("onyria", "onyriaVersion") == "onyria")
            height = 920;
        if(game.settings.get("onyria", "onyriaVersion") == "stars")
            height = 850;
        if(game.settings.get("onyria", "onyriaVersion") == "contemporain")
            height = 780;
        return height;
    }

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["onyria", "sheet", "actor", "character"],
            template: System.templatesPath + "/actors/character/character-sheet.hbs",
            width: 910,
            height: this.defaultHeight(),
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }

    
}
