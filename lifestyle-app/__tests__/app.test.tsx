import '@testing-library/jest-dom';
import { Player, Animal, Dog, Cat } from '../app/app';

describe('Player', () => {
  let player: any;
  beforeEach(() => {
    player = new Player('Eric');
  });

  /*1*/test('creates players name', () => {
    expect(player.name).toEqual("Eric");
  });
  /*2*/test('player spawns with 20 inventory slots total', () => {
    expect(player.inventory.length).toEqual(15);
    expect(player.hotBar.length).toEqual(5);
  });
  /*3*/test('checks inventory space available', () => {
    expect(player.inventorySpace()).toBe(20);
  });
});

describe('Animal', () => {
  /*1*/test('initializing pet', () => {
    const name = 'Oreo';
    const adam = new Animal(name);
    expect(adam['name']).toEqual(name);
  });
  /*2*/test('pet movements', () => {
    const pet = new Animal('Oreo');
    pet.walkF(5);
    expect(pet.positionX).toEqual(5);
    pet.walkB(10);
    expect(pet.positionX).toEqual(-5);
    pet.jump(5);
    expect(pet.positionY).toEqual(5);
    pet.fall(5);
    expect(pet.positionY).toEqual(0);
  });
  /*3*/test('eating', () => {
    const pet = new Animal('Oreo');
    pet.health = 70;
    expect(pet.eat()).toBe(80);
  });
});