export class OnyriaItemSheet extends ItemSheet {
  get template() {
    return `systems/onyria/templates/item/${this.item.type}-sheet.hbs`;
  }


  /** @override */
  getData() {
    const data = super.getData();

    data.config = CONFIG.ONYRIA;

    return data;
  }
}
