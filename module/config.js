export const System = {};

System.label = "Onyria";
System.abbrev = "Onyr";
System.name = "onyria";
System.rootPath = "/systems/" + System.name;
System.dataPath = System.rootPath + "/_data";
System.templatesPath = System.rootPath + "/templates";
System.logPrefix = System.abbrev;
System.debugMode = true;

export const ONYRIA = {};

ONYRIA.itemProperties = {
    "equipable": "ONYRIA.properties.equipable",
    "stackable": "ONYRIA.properties.stackable",
    "unique": "ONYRIA.properties.unique",
    "ranged": "ONYRIA.properties.ranged",
    "equipment": "ONYRIA.properties.equipment",
    "weapon": "ONYRIA.properties.weapon",
    "protection": "ONYRIA.properties.protection",
    "2Handed": "ONYRIA.properties.2Handed"
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
    "trapping" : "ONYRIA.category.other",
    "ingredient" : "ONYRIA.category.ingredient",
    "mount" : "ONYRIA.category.mount",
    "ammunition" : "ONYRIA.category.ammunition",
    "potion" : "ONYRIA.category.potion",
    "cloath" : "ONYRIA.category.cloath"
};

// Languages
ONYRIA.languages = {
    "common": "ONYRIA.languages.Common",
    "pondunien": "ONYRIA.languages.Pondunien",
    "arsinor": "ONYRIA.languages.Arsinor",
    "seranide": "ONYRIA.languages.Seranide",
    "myrmune": "ONYRIA.languages.Myrmune",
    "lavyre": "ONYRIA.languages.Lavyre",
    "puncor": "ONYRIA.languages.Puncor",
    "yuadim": "ONYRIA.languages.Yuadim",
    "inconnue": "ONYRIA.languages.Inconnue",
    "selisien": "ONYRIA.languages.Selisien",
    "armancien": "ONYRIA.languages.Armancien",
    "astorien": "ONYRIA.languages.Astorien"
  };

ONYRIA.professions = [];
ONYRIA.origines = [];
ONYRIA.competences = [];
ONYRIA.competencesSpe = [];

// Mise en cache des données de profession
ONYRIA.getProfessions = async function () {
    let professions;
    let professionsactualplay;
    let professionsexceptions;

    if(game.settings.get("onyria", "onyriaVersion") == "onyria"){
        professions = await game.packs.get("onyria.professions").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        professionsactualplay = await game.packs.get("onyria.professionsactualplay").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        professionsexceptions = await game.packs.get("onyria.professionsexceptions").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        ONYRIA.professions = professions.concat(professionsactualplay).concat(professionsexceptions);
    }else{
        if(game.settings.get("onyria", "onyriaVersion") == "stars"){
            professions = await game.packs.get("onyria.professionsstars").getDocuments().then(index => index.map(entity => entity.toObject(false)));
            ONYRIA.professions = professions;
        }else{
            professions = await game.packs.get("onyria.professionscont").getDocuments().then(index => index.map(entity => entity.toObject(false)));
            ONYRIA.professions = professions;
        }
    }
    
    console.debug("Professions loaded");
};

// Mise en cache des données d'origine
ONYRIA.getOrigines = async function () {
    let origines;
    
    if(game.settings.get("onyria", "onyriaVersion") == "onyria"){
        origines = await game.packs.get("onyria.origines").getDocuments().then(index => index.map(entity => entity.toObject(false)));
    }else{
        if(game.settings.get("onyria", "onyriaVersion") == "stars"){
            origines = await game.packs.get("onyria.originesstars").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        }else{
            origines = await game.packs.get("onyria.originescont").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        }
    }
    ONYRIA.origines = origines;
    console.debug("Origines loaded");
};


// Mise en cache des données de compétences
ONYRIA.getCompetences = async function () {
    let competences;

    if(game.settings.get("onyria", "onyriaVersion") == "onyria"){
        competences = await game.packs.get("onyria.competences").getDocuments().then(index => index.map(entity => entity.toObject(false)));
    }else{
        if(game.settings.get("onyria", "onyriaVersion") == "stars"){
            competences = await game.packs.get("onyria.competencesstars").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        }else{
            competences = await game.packs.get("onyria.competencescont").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        }
    }
    ONYRIA.competences = competences;
    console.debug("Competences loaded");
};

// Mise en cache des données de compétences
ONYRIA.getCompetencesSpe = async function () {
    let competencesspepretire;
    let competencesspeexception;
    
    if(game.settings.get("onyria", "onyriaVersion") == "onyria"){
        competencesspepretire = await game.packs.get("onyria.competencesspepretire").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        competencesspeexception = await game.packs.get("onyria.competencesspeexception").getDocuments().then(index => index.map(entity => entity.toObject(false)));
        ONYRIA.competencesSpe = competencesspepretire.concat(competencesspeexception);
    }else{
        if(game.settings.get("onyria", "onyriaVersion") == "stars"){
            competencesspepretire = await game.packs.get("onyria.competencesspepretirestars").getDocuments().then(index => index.map(entity => entity.toObject(false)));
            ONYRIA.competencesSpe = competencesspepretire;
        }else{
            competencesspepretire = await game.packs.get("onyria.competencesspepretirestars").getDocuments().then(index => index.map(entity => entity.toObject(false)));
            ONYRIA.competencesSpe = competencesspepretire;
        }
    }
    
    console.debug("Competences loaded");
};

ONYRIA.itemTypes = {
    "origine": "ONYRIA.category.origines",
    "profession": "ONYRIA.category.profession",
    "competence": "ONYRIA.category.competence",
    "spell": "ONYRIA.category.spell",
    "trait": "ONYRIA.category.trait",
    "savoir": "ONYRIA.category.savoir"
};


ONYRIA.spellTypes = {
    "offensif": "ONYRIA.magic.type.offensif",
    "defensif": "ONYRIA.magic.type.defensif",
    "support": "ONYRIA.magic.type.support",
    "materialisation": "ONYRIA.magic.type.materialisation",
    "invocation": "ONYRIA.magic.type.invocation",
    "rituel": "ONYRIA.magic.type.rituel",
    "control": "ONYRIA.magic.type.control"
}

ONYRIA.spellSchools = {
    "arsin": "ONYRIA.magic.school.arsin",
    "ingramor": "ONYRIA.magic.school.ingramor",
    "obscuris": "ONYRIA.magic.school.obscuris",
    "alaham": "ONYRIA.magic.school.alaham",
    "polurah": "ONYRIA.magic.school.polurah",
    "marsino": "ONYRIA.magic.school.marsino",
    "myrthur": "ONYRIA.magic.school.myrthur",
    "vesara": "ONYRIA.magic.school.vesara"
}

ONYRIA.charStats = {
    "fo" : "ONYRIA.stats.fo.label",
    "at" : "ONYRIA.stats.at.label",
    "in" : "ONYRIA.stats.in.label",
    "pe" : "ONYRIA.stats.pe.label",
    "di" : "ONYRIA.stats.di.label",
    "ct" : "ONYRIA.stats.ct.label",
    "ch" : "ONYRIA.stats.ch.label",
    "lc" : "ONYRIA.stats.lc.label",
    "cac": "ONYRIA.stats.cac.label",
    "dis": "ONYRIA.stats.dis.label",
    "mag": "ONYRIA.stats.mag.label",
    "esq": "ONYRIA.stats.esq.label"
}