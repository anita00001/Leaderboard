// import './style.css';
import addScore from './modules/add-score.js';

const refresh = document.getElementById('refresh');
const submitButton = document.getElementById('submit');
const table = document.getElementById('scores');
const yourName = document.getElementById('your-name');
const yourScore = document.getElementById('your-score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/V4nBNcUDAwYdX0EPGSQ0/scores';

const showScore = async () => {
  table.innerHTML = '';

  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const scores = json.result;
      // Can add sort function to sort score in descending order
      scores.forEach((item) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.user}</td>
          <td>:</td>
          <td>${item.score}</td>`;
        table.appendChild(tr);
      });
    });
};

refresh.addEventListener('click', () => {
  showScore();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(url, yourName.value, yourScore.value);
  showScore();
  yourName.value = '';
  yourScore.value = '';
});

showScore();