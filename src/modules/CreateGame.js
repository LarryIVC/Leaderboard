import { API_URL } from "./Vars.js";

// Script to create game
const createGame = async () => {
  try {
    const response = await fetch(API_URL+ 'games/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Call of Duty Mobile'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};

createGame();
// { result: 'Game with ID: LbMCd0gR1f5Ed86nvEJM added.' }
// { result: 'Game with ID: xtbfhjU4cmz4SUgU69Xt added.' }
