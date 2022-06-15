import './style.css';
import Scores from './modules/scores.js';

const LeaderTable = document.getElementById('leaderBoard');

for (let i = 0; i < Scores.length; i += 1) {
  LeaderTable.innerHTML += `<li> ${Scores[i].Name}:  ${Scores[i].score} </li>`;
}
