// index.js
import './style.css';
import addScore from './modules/add-score.js';
import { getFromStorage, updateStorage } from './modules/local-storage.js';

const submitButton = document.getElementById('submit');
const table = document.getElementById('scores');
const yourName = document.getElementById('your-name');
const yourScore = document.getElementById('your-score');

let leaderBoard = getFromStorage();

leaderBoard = [
  {
    name: 'Anita',
    score: 90,
  },
  {
    name: 'Raj',
    score: 100,
  },
  {
    name: 'Yog',
    score: 80,
  },
];

const showScore = () => {
  updateStorage(leaderBoard);
  leaderBoard.sort((a, b) => b.score - a.score);
  table.innerHTML = '';
  leaderBoard.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${item.name}</td>
    <td>:</td>
    <td>${item.score}</td>`;
    table.appendChild(tr);
  });
};

showScore();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  leaderBoard = addScore(yourName.value, yourScore.value, leaderBoard);
  updateStorage(leaderBoard);
  showScore();
  yourName.value = '';
  yourScore.value = '';
});