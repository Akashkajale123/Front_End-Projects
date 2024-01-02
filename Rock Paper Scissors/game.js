const noOfTurnsInput = document.getElementById('no_of_turns');
const playBtn = document.getElementById('play_game');
const roundLeft = document.getElementById('round-left');
const userPoints = document.getElementById('user-points');
const computerPoints = document.getElementById('computer-points');
const roundResult = document.getElementById('round-result');
const gameResult = document.getElementById('game-result');
const choices = document.querySelectorAll('.choice');
let user_points=document.getElementById('user');
let comp_points=document.getElementById('comp');
user_points.innerHTML=0;
comp_points.innerHTML=0;

console.log(choices);

let Rounds;
let options=['rock','paper','scissor'];
playBtn.addEventListener('click',()=>{
    let no_of_turns_left=noOfTurnsInput.value;
    playBtn.style.color='blue';
    if(noOfTurnsInput.value<=0){
        alert("Enter Valid Input")
    }else{
        roundLeft.innerHTML="Turns Left :"+noOfTurnsInput.value;
        Rounds=noOfTurnsInput.value;
        
    }
    
    
})
function start_game(){
    for(let a of choices){
        a.addEventListener('click',()=>{
            if(Rounds>0){
            let user_choice=a.getAttribute('data-ns-test');
            var randomNum = getRandomNumber(1, 3);
            let comp_choice=options[randomNum-1];
            console.log(user_choice,comp_choice);
            game_Result(user_choice,comp_choice);
            Rounds--;
            roundLeft.innerHTML="Turns Left: "+Rounds;
            
         }else{
            if(comp_points.innerHTML>user_points.innerHTML){
                roundResult.innerHTML="Computer Won"
                document.getElementById('game_over').innerHTML='Game Over'

            }else if(comp_points.innerHTML<user_points.innerHTML){
                roundResult.innerHTML="User Won"
                document.getElementById('game_over').innerHTML='Game Over'

            }else{
                roundResult.innerHTML="Its Tie"
                document.getElementById('game_over').innerHTML='Game Over'

                }

         }
       
            
        })   
      
    }
}
start_game();

function game_Result(user,comp){
    if(user==="rock" && comp==='rock'){
      roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Its Tie`;
    }else if(user==="paper" && comp==='paper'){

        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Its Tie`;
    }else if(user==="scissor" && comp==='scissor'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Its Tie`;
    }else if(user==="paper" && comp==='rock'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : User Won`;
        user_points.innerHTML=Number(user_points.innerHTML)+1;
    }else if(user==="rock" && comp==='scissor'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : User Won`;
        user_points.innerHTML=Number(user_points.innerHTML)+1;
    }else if(user==="scissor" && comp==='paper'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : User Won`;
        user_points.innerHTML=Number(user_points.innerHTML)+1;
    }else if(user==="scissor" && comp==='rock'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Computer Won`;
        comp_points.innerHTML=Number(comp_points.innerHTML)+1;
    }else if(user==="paper" && comp==='scissor'){
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Computer Won`;
        comp_points.innerHTML=Number(comp_points.innerHTML)+1;
    }else {
        roundResult.innerHTML=`User Choose- ${user} & Computer Choose- ${comp} : Computer Won`;
        comp_points.innerHTML=Number(comp_points.innerHTML)+1;
    }
}


// Generate a random number between 1 and 3 (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Usage:
//   var randomNum = getRandomNumber(1, 3);
  