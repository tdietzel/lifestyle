import '@testing-library/jest-dom';
import { Player, Animal, Dog } from '../app/app';

describe('Player', () => {
  let player: any;
  beforeEach(() => {
    player = new Player('Eric');
  });

  /*1*/test('assigns name to player', () => {
    expect(player.name).toEqual("Eric");
  });
  /*2*/test('spawn with 20 inventory slots total', () => {
    expect(player.inventory.length).toEqual(15);
    expect(player.hotBar.length).toEqual(5);
  });
  /*3*/test('checks inventory space available', () => {
    expect(player.inventorySpace()).toBe(19);
  });
  /*4*/test('spawn with pet dog named Zeus', () => {
    expect(player.animals[0].name).toBe('Zeus');
    expect(player.animals[0] instanceof Dog).toBe(true);
  });
  /*5*/test('spawn with sword in 1st hot bar slot', () => {
    expect(player.hotBar[0].holds).toEqual({item: 'sword'});
  });
  /*6*/test('buying items', () => {
    player.buy('cat');
    player.buy('wood');
    expect(player.inventory[0].holds).toEqual({"redeemEgg": 'cat'});
    expect(player.inventory[1].holds).toEqual({"item": 'wood'});
  });
  /*7*/test('consume items', () => {
    player.buy('cat');
    expect(player.consume(5)).toEqual(true);
    expect(player.inventory[0].holds).toEqual({});
  });
});

describe('Animal', () => {
  let animal: any;
  beforeEach(() => {
    animal = new Animal('Oreo');
  });

  /*1*/test('initializing pet', () => {
    const name = 'Oreo';
    expect(animal['name']).toEqual(name);
  });
  /*2*/test('pet movements', () => {
    animal.walkF(5);
    expect(animal.positionX).toEqual(5);
    animal.walkB(10);
    expect(animal.positionX).toEqual(-5);
    animal.jump(5);
    expect(animal.positionY).toEqual(5);
    animal.fall(5);
    expect(animal.positionY).toEqual(0);
  });
  /*3*/test('eating', () => {
    animal.health = 90;
    expect(animal.eat()).toBe(100);
    animal.health = 91;
    expect(animal.eat()).toBe(100);
  });
  /*4*/test('sleeping', () => {
    animal.energy = 50;
    expect(animal.sleep()).toEqual(100);
  });
  /*5*/test('playing', () => {
    animal.energy = 19;
    expect(animal.play()).toEqual("Too tired to play!");
    animal.energy = 20;
    expect(animal.play()).toEqual(0);
  });
});