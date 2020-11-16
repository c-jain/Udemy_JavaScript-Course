const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
	const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}?`, "").toUpperCase();
	if (selection !== ROCK && selection != PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return;
	}
	return selection;
};

const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const add = (a, b) => a + b;

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice == ROCK && pChoice === PAPER) ||
		(cChoice === PAPER && pChoice === SCISSORS) ||
		(cChoice == SCISSORS && pChoice === ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener("click", () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log("Game is starting...");
	const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
	let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}. You `;
	if (winner === RESULT_DRAW) {
		message = message + "had a draw.";
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + "won.";
	} else {
		message = message + "lost.";
	}
	alert(message);
	gameIsRunning = false;
	console.log(winner);
});

// not related to game
// Rest operator
// rest operator should be last parameter
const sumUp = (a, ...numbers) => {
    const validateNumber = (number) => { // functions inside functions
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    return sum;
};

// arguments is a keyword used before ES6
const subtractUp = function () {
    let sum = 0;
    for (const num of arguments) { // don't use that
        sum -= num;
    }
    return sum;
};

console.log(sumUp(1, 2, 'fcvgb', 4, 5, 6));
console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(subtractUp(1, 2, 3, 4, 5, 6, 7, 8, 9));