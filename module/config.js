export const System = {};

System.label = "Onyria";
System.abbrev = "ONY VTT";
System.name = "onyria";
System.rootPath = "/systems/" + System.name;
System.dataPath = System.rootPath + "/_data";
System.templatesPath = System.rootPath + "/templates";
System.logPrefix = System.abbrev;
System.debugMode = true;

export const ONYRIA = {};

// Data configuration
ONYRIA.itemProperties = {
  "equipable": "ONYRIA.properties.equipable",
  "stackable": "ONYRIA.properties.stackable",
  "unique": "ONYRIA.properties.unique",
  "ranged": "ONYRIA.properties.ranged",
  "equipment": "ONYRIA.properties.equipment",
  "weapon": "ONYRIA.properties.weapon",
  "protection": "ONYRIA.properties.protection",
  "2Handed": "ONYRIA.properties.2Handed",
};

ONYRIA.itemSubCategories = {
    "alchemy" : "ONYRIA.category.alchemy",
    "ranged" : "ONYRIA.category.ranged",
    "melee" : "ONYRIA.category.melee",
    "armor" : "ONYRIA.category.armor",
    "jewel" : "ONYRIA.category.jewel",
    "shield" : "ONYRIA.category.shield",
    "consumable" : "ONYRIA.category.consumable",
    "document" : "ONYRIA.category.document",
    "divers" : "ONYRIA.category.other",
    "ingredient" : "ONYRIA.category.ingredient",
    "mount" : "ONYRIA.category.mount",
    "ammunition" : "ONYRIA.category.ammunition",
    "potion" : "ONYRIA.category.potion",
    "cloath" : "ONYRIA.category.cloath",
    "book": "ONYRIA.category.book"
}

// Langages
ONYRIA.languages = {
    "common": "ONYRIA.languages.Common",
    "pondunien": "ONYRIA.languages.Pondunien",
    "seranide": "ONYRIA.languages.Seranide",
    "arsinor": "ONYRIA.languages.Arsinor",
    "myrmune": "ONYRIA.languages.Myrmune",
    "puncor": "ONYRIA.languages.Puncor",
    "hydranoi": "ONYRIA.languages.Hydranoi",
    "yuadim": "ONYRIA.languages.Yuadim",
    "lavyrion": "ONYRIA.languages.Lavyrion",
    "magique": "ONYRIA.languages.Magique",
    "inconnue": "ONYRIA.languages.Inconnue",
    "telezien": "ONYRIA.languages.Telezien"
}