import {OnyriaSkillRoll} from "../system/skill-roll.js";
import {OnyriaDamageRoll} from "../system/dmg-roll.js";
import {OnyriaInitiativeRoll} from "../system/init-roll.js";

export class OnyriaRoll {
    static options() {
        return { classes: ["onyria", "dialog"] };
    }

    /**
     *  Handles skill check rolls
     * @param elt DOM element which raised the roll event
     * @param key the key of the attribute to roll
     * @private
     */
    static skillCheck(data, actor, event,multiplier,rollType = "PUBLIC",bonus = "+0") {
        const elt = $(event.currentTarget)[0];
        let base = elt.attributes["data-rolling-value"].value;
        let cmpValue = eval((eval(`${base}`)*multiplier)+(eval(`${bonus}`)));
        let label = elt.attributes["data-rolling"].value;
        label = (label) ? game.i18n.localize(label) : null;
        let calcLabel;
        if(multiplier != 1){
            if(bonus != "+0"){
                calcLabel = "("+eval(`${base}`) +"x"+multiplier+")"+bonus;
            }else{
                calcLabel = eval(`${base}`) +"x"+multiplier;
            }
        }else{
            if(bonus != "+0"){
                calcLabel = eval(`${base}`) +bonus;
            }else{
                calcLabel = eval(`${base}`);
            }
        }

        let r = new OnyriaSkillRoll(label,calcLabel,cmpValue);
        r.roll(actor,rollType);
    }

    static competencyCheck(data, actor, event,modifier,rollType = "PUBLIC") {
        const elt = $(event.currentTarget)[0];
        let key = elt.attributes["data-rolling-value"].value;
        let bonus = elt.attributes["data-rolling-bonus"].value;

        if( (bonus.charAt(0) == '-') || (bonus.charAt(0) == '+') ){

        }else{
            bonus= '+' + bonus;
        }

        if(modifier)
        {
            if( (modifier.charAt(0) == '-') || (modifier.charAt(0) == '+') ){

            }else{
                modifier= '+' + modifier;
            }
        } else{
            modifier="+0";
        }

        let keyValue = eval(`${key}`);
        let bonusValue = eval(`${bonus}`);
        let modifierValue = eval(`${modifier}`);

        let cmpValue = keyValue+ bonusValue+ modifierValue;
        let label = elt.attributes["title"].value;
        let calcLabel = eval(`${key}`);

        if(modifierValue<0)
            calcLabel = calcLabel + modifier;
        else if(modifierValue > 0)
            calcLabel = calcLabel + "+" + modifierValue;

        if(bonusValue<0)
            calcLabel = calcLabel + bonus;
        else if(bonusValue > 0)
            calcLabel = calcLabel + "+" + bonusValue;            

        let r = new OnyriaSkillRoll(label,calcLabel,cmpValue);
        r.roll(actor,rollType);
    }

    /**
     *  Handles weapon check rolls
     * @param elt DOM element which raised the roll event
     * @param key the key of the attribute to roll
     * @private
     */
    static rollWeapon(data, actor, event, rollType = "PUBLIC") {

        const elt = $(event.currentTarget)[0];
        let formula = elt.attributes["data-roll-formula"].value;
        let label = elt.attributes["data-roll-weapon-name"].value;
        let img = elt.attributes["data-roll-weapon-img"].value;

        let globalSettingCarac100 = game.settings.get("onyria","carac100"); 

        let r = new OnyriaDamageRoll(label,formula,img);
        r.roll(actor, rollType);
    }

        /**
     *  Handles initiative check rolls
     * @param elt DOM element which raised the roll event
     * @param key the key of the attribute to roll
     * @private
     */
    static rollInitiative(data, actor, event,rollType = "PUBLIC") {

        const elt = $(event.currentTarget)[0];
        let formula = elt.attributes["data-roll-formula"].value;
        let label = "Initiative";
        let img = "";

        let r = new OnyriaInitiativeRoll(label,formula,img);
        r.roll(actor,rollType);
    }
}