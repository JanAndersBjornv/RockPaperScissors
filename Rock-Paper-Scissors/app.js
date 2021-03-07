let userScore = 0; 
let computerScore = 0;

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function ConvertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	if(letter === "s") return "Scissors";
}

function userWin(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const playerUser = "user".fontsize(3).sup();
	const playerComp = "computer".fontsize(3).sup();
	result_div.innerHTML = `${playerUser}${ConvertToWord(userChoice)} beats ${playerComp}${ConvertToWord(computerChoice)}... YOU WIN!!!`;
}

function userLose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const playerUser = "user".fontsize(3).sup();
	const playerComp = "computer".fontsize(3).sup();
	result_div.innerHTML = `${playerUser}${ConvertToWord(userChoice)} loses to ${playerComp}${ConvertToWord(computerChoice)}... YOU LOSE...`;
}

function Draw(userChoice, computerChoice){
	const playerUser = "user".fontsize(3).sup();
	const playerComp = "computer".fontsize(3).sup();
	result_div.innerHTML = `${playerUser}${ConvertToWord(userChoice)} equals ${playerComp}${ConvertToWord(computerChoice)}... IT'S A DRAW...`;
}


function getCompChoice(){
	const Choices = ['r', 'p', 's'];
	const randNumb = Math.floor(Math.random() * 3);
	return Choices[randNumb];
}


function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case "rs":
		case "pr":
		case "sp":
		{
			userWin(userChoice, compChoice);
			break;
		}	
		case "rp":
		case "ps":
		case "sr":
		{					
			userLose(userChoice, compChoice);
			break;
		}
		case "rr":
		case "pp":
		case "ss":
		{					
			Draw(userChoice, compChoice);
			break;
		}	
	}
}

function main(){

	rock_div.addEventListener('click', function()
	{
		game("r");
	});

	paper_div.addEventListener('click', function()
	{
		game("p");
	});

	scissors_div.addEventListener('click', function()
	{
		game("s");
	});
}

main();