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
  animals: Array<Animal>;
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
    this.animals = [new Dog('Zeus')];
    this.hotBar[0].holds = { item: 'sword' };
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
  buy(item: string): number {
    let emptySlotIndex = () => {
      for (let i = 0; i < this.inventory.length; i++) {
        if (typeof this.inventory[i] === 'object' && Object.keys(this.inventory[i].holds).length === 0) {
          return i;
        }
      }
      return -1; // inventory full
    };
    const index = emptySlotIndex();
    if (index !== -1) {
      if (item === 'cat') {
        this.inventory[index].holds = { "redeemEgg": 'cat' };
      } else {
        this.inventory[index].holds = { "item": item };
      }
    }
    return index;
  }
}

export class Animal {
  name: string;
  health: number = 100;
  energy: number = 100;
  positionX: number = 0;
  positionY: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  walkF(num: number): number {
    return this.positionX += num;
  }
  walkB(num: number): number {
    return this.positionX -= num;
  }
  jump(num: number): number {
    return this.positionY += num;
  }
  fall(num: number): number {
    return this.positionY -= num;
  }
  eat(): number {
    this.health < 91 ? this.health += 10 : this.health;
    this.health > 90 ? this.health = 100 : this.health;
    return this.health
  }
  sleep(): number {
    this.energy = 100;
    return this.energy
  }
  play(): number | string {
    if (this.energy < 20) {
      return "Too tired to play!"
    }
    this.energy >= 20 ? this.energy -= 20: this.energy;
    return this.energy
  }
}
export class Dog extends Animal {}