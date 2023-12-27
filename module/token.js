/**
 * Extend the base TokenDocument class to implement system-specific HP bar logic.
 * @extends {TokenDocument}
 */
 export class OnyriaTokenDocument extends TokenDocument {

  getBarAttribute(...args) {
    const data = super.getBarAttribute(...args);
    if ( data && (data.attribute === "attributes.hp") ) {
      const hpMax = this.actor.system.attributes.hp.max || 5;
      const hp = this.actor.system.attributes.hp.value || 0;

      data.value = ( hp || 0);
      data.max = (hpMax || 0);


      if(data.value < 0)
          data.value = 0;
    }
    return data;
  }
}
