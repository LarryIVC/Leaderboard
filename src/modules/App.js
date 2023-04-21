import { getGame, createScore } from './Api.js';

// Display Scores
const renderList = async () => {
  const doc = document;
  const ul = doc.getElementById('ul-scores');
  ul.innerHTML = '';

  const game = await getGame();
  const { result } = game;

  result.forEach((item) => {
    const li = doc.createElement('li');
    const spanName = doc.createElement('span');
    const spanScore = doc.createElement('span');
    const { user, score } = item;
    spanName.textContent = `${user}:`;
    spanScore.textContent = `${score}`;
    li.appendChild(spanName);
    li.appendChild(spanScore);
    ul.appendChild(li);
  });
};

// Add new score
const addScores = () => {
  const frmScores = document.getElementById('frm-add-score');
  frmScores.addEventListener('submit', async (e) => {
    e.preventDefault();
    const output = await createScore(frmScores.name.value, frmScores.score.value);
    renderList();
    frmScores.name.value = '';
    frmScores.score.value = '';
    return output;
  });
};

// Refresh button
const refresh = () => {
  const btnRefresh = document.getElementById('btn-refresh');
  btnRefresh.addEventListener('click', () => {
    renderList();
  });
};

// Principal function
const App = () => {
  addScores();
  renderList();
  refresh();
};

export default App;