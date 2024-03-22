import '@testing-library/jest-dom';
import { Player } from '../app/app';

describe('Player', () => {
  test('creates players name', () => { // Test #1
    const player = new Player('Eric');
    expect(player.name).toEqual("Eric");
  });
});