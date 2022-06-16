import './style.css';

const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const ApiID = 'rDBXUmKAIgUrA0R4BiuE';
const completeUrl = `${urlAPI + ApiID}/scores/`;

const refBtn = document.getElementById('refresh');
const subBtn = document.getElementById('formId');

const LeaderTable = document.getElementById('leaderBoard');

function display(playList) {
  LeaderTable.innerHTML += `<li> ${playList.user}:  ${playList.score} </li>`;
}

async function sendData() {
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rDBXUmKAIgUrA0R4BiuE/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  
  const sent = await response.json();
  return sent;
}

async function receiveData() {
  LeaderTable.innerHTML = '';

  const response = await fetch(completeUrl, {
    method: 'GET',
    header: {
      'content-type': 'application/json; charset: UTF-8',
    },
  });

  const gamelist = await response.json();
  for (let i = 0; i < gamelist.result.length; i += 1) {
    display(gamelist.result[i]);
  }
  // display(gamelist)
  return gamelist;
}

subBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  sendData();
  /
});
receiveData();

refBtn.addEventListener('click', () => {
  receiveData();
});
