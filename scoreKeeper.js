var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Display = document.getElementById("p1s");
var p2Display = document.getElementById("p2s");
var rbutton = document.querySelector("#reset");
var winum = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var winningScore = 7;
var gameOver = false;

function reset()
{
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove("winner");
    p1Display.classList.remove("winner");
}


p1button.addEventListener("click", function(){
    if(!gameOver)
    {
        p1Score++;
        if(p1Score === winningScore)
        {
            p1Display.classList.toggle("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2button.addEventListener("click", function(){
    if(!gameOver)
    {
        p2Score++;
        if(p2Score === winningScore)
        {
            p2Display.classList.toggle("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

rbutton.addEventListener("click", reset);

winum.addEventListener("change", function(){

    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();

});
