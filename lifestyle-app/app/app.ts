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

  inventorySpace(): number {
    let slotsFree = 0;
    for(let i = 0; i < this.inventory.length; i++) {
      if(typeof this.inventory[i] === 'object' && Object.keys(this.inventory[i].holds).length === 0) {
        slotsFree += 1;
      }
      if(typeof this.hotBar[i] === 'object' && Object.keys(this.hotBar[i].holds).length === 0) {
        slotsFree += 1;
      }
    }
    return slotsFree === 0 ? -1 : slotsFree
  }
}

export class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}