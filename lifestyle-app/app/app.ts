export class InventorySlot {
  holds: {[key: string]: any};
  label: string;

  constructor(label: string) {
    this.label = label;
    this.holds = {};
  }
}

export class Player {
  name: string;
  hotBar: Array<InventorySlot>;
  inventory: Array<InventorySlot>;
  constructor(name: string) {
    this.name = name;
    this.hotBar = [];
    this.inventory = [];

    for(let i = 0; i < 5; i++) { // Loop 5x
      const slot = new InventorySlot('hot_bar');
      this.hotBar.push(slot);
    }
    for(let i = 0; i < 15; i++) { // Loop 15x
      const slot = new InventorySlot('starting_slot');
      this.inventory.push(slot);
    }
  }
}