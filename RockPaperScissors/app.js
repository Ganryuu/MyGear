let userScore = 0 ; 
let computerScore = 0 ; 
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("comp-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p"); 
const scissors_div = document.getElementById("s"); 
//  cashing the DOM 



function Convert(x){
    switch(x){
        case "r":
            return "Rock";
        case "s":
            return "Scissors"; 
        case "p": 
            return "Paper"; 
    }
}



function botChoice() {
    const choices =['r','p','s']; 
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]; 
    
}



function win(user ,bot){
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    if (user == "s"){
        result_p.innerHTML = Convert(user) + " beat " + Convert(bot) + " , You win !";    
    }else {
        result_p.innerHTML = Convert(user) + " beats " + Convert(bot) + " , You win !";
    }
    document.getElementById(user).classList.add('green-glow'); 
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 250); 
}



function lose(user ,bot){
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    if (user =="s"){
        result_p.innerHTML = Convert(user) + " lose to " + Convert(bot) + " , you lost . ";
    }else{
        result_p.innerHTML = Convert(user) + " loses to " + Convert(bot) + " , you lost . ";
    }
    document.getElementById(user).classList.add('red-glow'); 
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 250);
}





function draw(user){
    result_p.innerHTML = `it's a draw ! .`
    document.getElementById(user).classList.add('yellow-glow'); 
    setTimeout(function(){document.getElementById(user).classList.remove('yellow-glow')}, 250);
}

function game(userChoice) {
    const choice = botChoice();
     
    switch(userChoice + choice ){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, choice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, choice);
            break; 
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, choice);
            break; 
    }
}




main();
function main(){
rock_div.addEventListener('click', function() {
    game("r")
})

paper_div.addEventListener('click', function() {
    game("p") 
})

scissors_div.addEventListener('click', function() {
    game("s") 
})
}