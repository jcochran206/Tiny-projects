//global variables 

//get access to boxes 
const boxes = Array.from(document.getElementsByClassName('box'));
//get h1 text
const playText = document.getElementById('playText');
//restart button 
const restartBtn = document.getElementById('reset');

//Spaces array to avoid collisions
const spaces = [];

//variables for inputs of X and O by player 
const Otext = "O"
const Xtext = "X"
let currentPlayer;

//drawing of box
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if(index < 3){
            styleString += 'border-bottom: 3px solid var(--accent2);' 
        }
        if(index % 3 === 0){
            styleString += 'border-right: 3px solid var(--accent2);'
        }
        if(index % 3 === 2){
            styleString += 'border-left: 3px solid var(--accent2);'
        }
        if(index > 5){
            styleString += 'border-top: 3px solid var(--accent2);'
        }
        box.style = styleString;
        //add eventlistener for clicks for user interaction on board
        box.addEventListener('click', boxClicked);
    })
}
//function boxClicked
//identify box clicked 
const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        //if player has won 
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won`;
            return;
        }

        currentPlayer = currentPlayer === Xtext ? Otext : Xtext;

    }
}
//conditions to win game
const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins on top`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins on left`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins on diagonal`);
            return true;
        }
    } 
    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins on right`);
            return true;
        }
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins on bottom`);
            return true;
        }
    }
    if(spaces[4] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins on middle`);
            return true;
        }
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins on center`);
            return true;
        }
    }
    
}

const reset = () => {
    spaces.forEach((space, index)=>{
        spaces[index] =null
    })
    boxes.forEach(box => {
        box.innerText = '';
    })
    playText.innerText = "Tic Tac Toe";
    currentPlayer = Xtext;
}

restartBtn.addEventListener('click', reset);
reset();
drawBoard();


//drawing board
