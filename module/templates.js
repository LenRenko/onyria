/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {

    // Define template paths to load
    const templatePaths = [
        // ACTOR
        "systems/onyria/templates/actors/character/parts/character-header.hbs",
        "systems/onyria/templates/actors/character/parts/character-description.hbs",
        
        "systems/onyria/templates/actors/character/parts/stats/character-attacks.hbs",
        "systems/onyria/templates/actors/character/parts/stats/character-hp.hbs",
        "systems/onyria/templates/actors/character/parts/stats/character-hp-init.hbs",
        "systems/onyria/templates/actors/character/parts/stats/character-initiative.hbs",
        "systems/onyria/templates/actors/character/parts/stats/character-attributes.hbs",

        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-pe.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-fo.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-at.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-in.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-di.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-ct.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-ch.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-lc.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-cac.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-dis.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-mag.hbs",
        "systems/onyria/templates/actors/character/parts/stats/attributes/character-attributes-esq.hbs",

        "systems/onyria/templates/actors/character/parts/stats/character-stats.hbs",

        "systems/onyria/templates/actors/character/parts/competences/character-competences.hbs",
        "systems/onyria/templates/actors/character/parts/competences/details/character-competences-trait.hbs",
        "systems/onyria/templates/actors/character/parts/competences/details/character-competences-savoir.hbs",

        "systems/onyria/templates/actors/character/parts/inventory/character-inventory.hbs",
        "systems/onyria/templates/actors/character/parts/inventory/character-inventory-item.hbs",

        "systems/onyria/templates/actors/loot/parts/inventory/loot-inventory.hbs",
        "systems/onyria/templates/actors/loot/parts/inventory/loot-inventory-item.hbs",
        "systems/onyria/templates/actors/loot/parts/loot-header.hbs",

        // ITEMS DETAILS
        "systems/onyria/templates/items/item-sheet.hbs",
        "systems/onyria/templates/items/parts/details/item-details.hbs",
        "systems/onyria/templates/items/parts/details/competence-details.hbs",
        "systems/onyria/templates/items/parts/details/profession-details.hbs",
        "systems/onyria/templates/items/parts/details/protection-details.hbs",
        "systems/onyria/templates/items/parts/details/ranged-details.hbs",
        "systems/onyria/templates/items/parts/details/origines-details.hbs",
        "systems/onyria/templates/items/parts/details/equipment-details.hbs",
        "systems/onyria/templates/items/parts/details/weapon-details.hbs",
        "systems/onyria/templates/items/parts/details/spell-details.hbs",
        "systems/onyria/templates/items/parts/details/trait-details.hbs",
        "systems/onyria/templates/items/parts/details/savoir-details.hbs"
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};
