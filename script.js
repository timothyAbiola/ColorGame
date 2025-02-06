const colors = ["red", "blue", "green", "aqua", "rebeccapurple", "orange"]; 
let target = ""; 
let score = 0; 
const colorBox = document.getElementById("colorBox"); 
const gameStatus = document.getElementById("gameStatus"); 
const gridColor = document.getElementById("gridColor"); 
const scoreDisplay = document.getElementById("score"); 
const newGame = document.getElementById("newGame");

function startGame(){ 
    target = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = target; 
    gridColor.innerHTML = "";
// Clear previous buttons 
    colors.forEach(color => { 
        const button = document.createElement("button"); 
        button.style.backgroundColor = color;
        button.dataset.testid = "colorOption";
        button.classList = 'btn';
        button.addEventListener("click", () =>
        checkGuess(color)); 
        gridColor.appendChild(button); 
});
    gameStatus.textContent = "Make a guess!"; 
}; 
function checkGuess(selectedColor) { 
    if (selectedColor === target) {
    gameStatus.textContent = "Correct! 🎉🔥🔥"; 
    score++; 
    scoreDisplay.textContent = score; 
    setTimeout(() => {
        startGame();
    }, 2000);
    } else{
        gameStatus.textContent = "Wrong! Try again. ❌"; 
    } 
}

 // Restart game when "New Game" button is clicked 
    newGame.addEventListener("click", ()=>{
    score = 0;
    scoreDisplay.textContent = score; 
    startGame()
}); 

// Initialize the game 
    startGame(); 
