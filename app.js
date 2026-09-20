let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg2');
const userScorePara = document.getElementById('user-score');
const computerScorePara = document.getElementById('computer-score');
const restartBtn = document.getElementById('restart-btn');

const genCompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game Was Draw!!")
    msg2.innerText = "Game Was Draw!!";
    msg2.style.backgroundColor = "purple";
}

const ShowWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg2.innerText = `You Win!! ${userChoice} beats ${computerChoice}`;
        msg2.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg2.innerText = `You Lose!! ${computerChoice} beats ${userChoice}`;
        msg2.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`User Choice: ${userChoice}`);
    const computerChoice = genCompchoice();
    console.log(`Computer Choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        ShowWinner(userWin, userChoice, computerChoice);
    }
}

restartBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;

    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";

    console.log("Game Restarted!");
});

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log("Button Clicked!!", userChoice);
        playGame(userChoice);
    });
});