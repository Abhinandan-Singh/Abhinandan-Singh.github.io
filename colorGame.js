var numSquare = 6;
var colors = getRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorRGB");
var picked = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1"); 
var reset = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

for(var i = 0;i<modebtn.length;i++){
    modebtn[i].addEventListener("click", function(){
        modebtn[0].classList.remove("selected");
        modebtn[1].classList.remove("selected");
        this.classList.add("selected");
        numSquare = this.textContent === "Easy" ? 3 : 6;
        refresh();
    });
}
 


function refresh(){
    colors = getRandomColors(numSquare);
    picked = pickColor();
    colorDisplay.textContent = picked;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = null;
    reset.textContent = "New Colors";
}



// esybtn.addEventListener("click", function(){
//     numSquare = 3;
//     esybtn.classList.add("selected");
//     hrdbtn.classList.remove("selected");
//     colors = getRandomColors(numSquare);
//     for(var i =0;i<squares.length;i++){
//         if(i<colors.length){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }     
//     }
//     picked = pickColor();
//     colorDisplay.textContent = picked;
//     h1.style.backgroundColor = "steelblue";
// });

// hrdbtn.addEventListener("click", function(){
//     numSquare = 6;
//     esybtn.classList.remove("selected");
//     hrdbtn.classList.add("selected");
//     colors = getRandomColors(numSquare);
//     for(var i =0;i<squares.length;i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     picked = pickColor();
//     colorDisplay.textContent = picked;
//     h1.style.backgroundColor = "steelblue";
// });



reset.addEventListener("click", function(){
    refresh();
    // colors = getRandomColors(numSquare);
    // picked = pickColor();
    // colorDisplay.textContent = picked;
    // for(var i = 0; i<squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    // messageDisplay.textContent = null;
    // this.textContent = "New Colors";
});


colorDisplay.textContent = picked;

for(var i = 0;i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === picked){
            messageDisplay.textContent = "Correct";
            reset.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color){
    for(var i = 0;i < squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
   var randomIndex = Math.floor(Math.random() * colors.length);
   return colors[randomIndex];
}

function getRandomColors(num){
    var ar = [];
    for(var i = 0; i<num; i++)
    {
        //call annother function for the random colors
        ar[i] = generateRandomColors();
    }
    return ar;
}

function generateRandomColors()
{
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
