import '@testing-library/jest-dom';
import { Player } from '../app/app';

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
  /*3*/test('checks inventory space', () => {
    expect(player.inventorySpace()).toBe(20);
  });
});