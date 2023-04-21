import { API_URL } from './Vars.js';

// Script to create game
const createGame = async () => {
  try {
    const response = await fetch(`${API_URL}games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Call of Duty Mobile',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    document.getElementById('ul-scores').innerHTML = json;
  } catch (error) {
    document.getElementById('ul-scores').innerHTML = error;
  }
};

createGame();
// { result: 'Game with ID: LbMCd0gR1f5Ed86nvEJM added.' }
// { result: 'Game with ID: xtbfhjU4cmz4SUgU69Xt added.' }
