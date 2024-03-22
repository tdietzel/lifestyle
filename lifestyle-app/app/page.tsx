"use client";
import React, { useState } from 'react';
import { Player } from './app';

function Home() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerName, setPlayerName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const createPlayer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPlayer = new Player(playerName);
    setPlayerName('');
    setPlayer(newPlayer);
  };

  return (
    <>
      <div>
        <h1>Hello</h1>
        <form onSubmit={createPlayer}>
          <label>
            Player Name
            <input
              name="player-name"
              id="name"
              type="text"
              value={playerName}
              onChange={handleNameChange}
            />
          </label>
          <button name="player-creation" type="submit">Create Player</button>
        </form>
      </div>
      <div>
        {player ? (
          <>
            <hr style={{marginTop:'3rem'}}/>
            <div>
              Pets
              {player.animals.map((animal, index) => (
                <h1 key={index}>{animal.name}</h1>
              ))}
            </div>
            <hr style={{marginBottom:'3rem'}}/>
            <div>
              Hot Bar
              {player.hotBar.map((slot, index) => (
                <h1 key={index}>{slot.label}</h1>
              ))}
              <hr style={{marginBottom:'3rem'}}/>
              Inventory
              {player.inventory.map((slot, index) => (
                <h1 key={index}>{slot.label}</h1>
              ))}
            </div>
            <hr style={{marginTop:'3rem'}}/>
          </>
        ) : null}
      </div>
    </>
  );
}
export default Home;