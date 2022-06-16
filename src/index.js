import './style.css';
// import getID from './modules/ID';
// import Scores from './modules/scores.js';

const urlAPI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const ApiID = "rDBXUmKAIgUrA0R4BiuE";
const completeUrl = `${urlAPI + ApiID}/scores/`;

const refBtn = document.getElementById("refresh");
const subBtn = document.getElementById("formId");


const LeaderTable = document.getElementById('leaderBoard');

// let Scores = [];


// class ListObj {
//   constructor(user, score){
//     this.user = user;
//     this.score = score;
//   }
// }


// function addlist(user, score){
//   const newList = new ListObj(user, score);
//   // Scores.push(newList)
//   // console.log(Scores);
//   return newList

// }
function display (playList){
  
   
  LeaderTable.innerHTML += `<li> ${playList.user}:  ${playList.score} </li>`;

}

async function sendData(){

  const user = document.getElementById("name");
const score = document.getElementById("score");
  const response = await fetch ( "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rDBXUmKAIgUrA0R4BiuE/scores/" , {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value
    }),
    headers: {
      'content-type': 'application/json'
    }
  }
  );
  // console.log(play)
  const sent = await response.json();
  return sent

}


async function receiveData(){
  LeaderTable.innerHTML = "";

  const response = await fetch(completeUrl,{
    method: 'GET',
    header: {
      'content-type': 'application/json; charset: UTF-8'
    }
  })

  const gamelist = await response.json();
  console.log(gamelist);
  for(let i = 0 ; i < gamelist.result.length; i ++){
     display(gamelist.result[i])
  }
  // display(gamelist)
  return gamelist


}


subBtn.addEventListener("submit", (e)=>{

  e.preventDefault();
  
  sendData();
  // console.log(newEntry);

});
receiveData()

refBtn.addEventListener("click", ()=>{
  receiveData()
  
})

