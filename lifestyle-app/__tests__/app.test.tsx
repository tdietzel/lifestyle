import '@testing-library/jest-dom';
import { Player } from '../app/app';

describe('Player', () => {
  let player: any;
  beforeEach(() => {
    player = new Player('Eric');
  });

  test('creates players name', () => { // Test #1
    expect(player.name).toEqual("Eric");
  });
  test('player spawns with 20 inventory slots total', () => { // Test #2
    expect(player.inventory.length).toEqual(15);
    expect(player.hotBar.length).toEqual(5);
  });
});