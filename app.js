
//html targets
let notPlaying = document.getElementById('not-playing');
let isPlaying = document.getElementById('is-playing');
let humanImg = document.getElementById('human-img');
let computerImg = document.getElementById('computer-img');
let humanTotal = document.getElementById('human-total');
let computerTotal = document.getElementById('computer-total');
let winner = document.getElementById('winner');

// image urls
let rockImg = 'https://kicd-am.sagacom.com/wp-content/blogs.dir/107/files/2015/08/meteorite.jpg';
let paperImg = 'https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-512.png';
let scissorsImg = 'https://i.pinimg.com/originals/bf/8c/2b/bf8c2ba6ae2d088eebe4f1892a7617e1.jpg';
let lizardImg = 'https://filmschoolrejects.com/wp-content/uploads/2017/05/0zMD2gwXO-cRZ_QRl.jpg';
let spockImg = 'https://www.martialdevelopment.com/wp-content/uploads/spock-nerve-pinch.jpg';
let questionMarkImg = 'https://www.stickpng.com/assets/thumbs/5a4613ddd099a2ad03f9c994.png';
//

//Actions Object | who beats who
let gameActions = {
  'rock': {
    'paper': false,
    'scissors': true,
    'lizard': true,
    'spock': false,
  },
  'paper': {
    'rock': true,
    'scissors': false,
    'lizard': false,
    'spock': true,
  },
  'scissors': {
    'paper': true,
    'rock': false,
    'lizard': true,
    'spock': false,
  },
  'lizard': {
    'paper': true,
    'scissors': false,
    'rock': false,
    'spock': true,
  },
  'spock': {
    'paper': false,
    'scissors': true,
    'lizard': false,
    'rock': true,
  }
}
//Computers and Humans current state
let computerActionState = '';
let computerScore = 0;
let humanActionState = '';
let humanScore = 0;
//Actions Array
let gameArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

function startGame() {
  // Hide play game button
  notPlaying.style.display = 'none';
  //Show game
  isPlaying.style.display = 'block';
}

function endGame() {
  // Hide play game button
  notPlaying.style.display = 'flex';
  //Show game
  isPlaying.style.display = 'none';
  resetScores();
}

function takingTurn(val, player) {
  let imgUrl = '';

  switch (val) {
    case 'rock':
      imgUrl = rockImg;
      break;
    case 'paper':
      imgUrl = paperImg;
      break;
    case 'scissors':
      imgUrl = scissorsImg;
      break;
    case 'lizard':
      imgUrl = lizardImg;
      break;
    case 'spock':
      // @ts-ignore
      imgUrl = spockImg;
      break;
  }

  if (player == 'computer') {
    // @ts-ignore
    computerImg.src = imgUrl;
    computerActionState = val;
    whoWins();
  } else if (player == 'human') {
    // @ts-ignore
    humanImg.src = imgUrl;
    humanActionState = val;
  }
}

function humanTurn(val) {
  takingTurn(val, 'human');
  computerTurn();
}

function computerTurn() {
  randomImg('computer');
}

function randomImg(player) {
  let num = Math.floor(Math.random() * 5);
  takingTurn(gameArray[num], player)
}

//checking for winner
function whoWins() {
  if (gameActions[humanActionState][computerActionState] && humanActionState != computerActionState) {
    humanScore++;
    changeScores()
    winner.textContent = "Win!";
    winner.style.color = "green";
    if (humanScore == 5) {
      resetScores();
      alert('You win!')
    }
  } else if (humanActionState == computerActionState) {
    winner.textContent = "Tie...";
    winner.style.color = 'blue'
  } else {
    computerScore++;
    changeScores()
    winner.textContent = "Loser";
    winner.style.color = 'red';
    if (computerScore == 5) {
      resetScores();
      alert('You lose!')
    }
  }
}

function changeScores() {
  humanTotal.textContent = humanScore.toString();
  computerTotal.textContent = computerScore.toString();
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
  changeScores();
}