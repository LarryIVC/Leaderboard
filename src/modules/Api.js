import { API_URL, KEY } from './Vars.js';

// function to GET scores
export const getGame = async () => {
  try {
    const response = await fetch(`${API_URL}games/${KEY}/scores/`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

// function to POST new score
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
