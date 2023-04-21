import { API_URL, KEY } from './Vars.js';

export const getGame = async () => {
  try {
    const response = await fetch(`${API_URL}games/${KEY}/scores/`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const createScore = async (user, score) => {
  try {
    const response = await fetch(`${API_URL}games/${KEY}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
