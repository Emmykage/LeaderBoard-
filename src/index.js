import './style.css';
import Scores from './modules/scores';


const LeaderTable = document.getElementById('leaderBoard');

for(let i = 0 ; i<Scores.length; i ++){
    LeaderTable.innerHTML += `<li> ${Scores[i].Name}:  ${Scores[i].score} </li>`    
}
