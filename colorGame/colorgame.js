var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var ardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//setting up event listners to everything
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			//first removing selected from both the buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//adding the selectde to the clicked button;
			this.classList.add("selected");
			//setting numSquares value acc to the picked options
			this.textContent === "Easy"? numSquares = 3 : numSquares = 6;//ternary operator
			reset();
		})
	};
};

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//click listeners to the squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked color
			var clickedColor = this.style.backgroundColor;
			//compare color of picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				//if picked => action fading
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	};
};

function reset(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick new randomcolor 
	pickedColor = pickColor();
	//change colordisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	messageDisplay.textContent = "";
	//change colors of square
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	
	}
	h1.style.backgroundColor = "steelblue";
	

};

resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		// change color to match given color
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//make an array
	var arr = [];
	// add num random color to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that  array at very end
	return arr;
};

function randomColor(){
	//generate a random "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//generate a random "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);	
	//generate a random "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	//picking three new colors
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	//setting new picked color value
// 	pickedColor = pickColor();
// 	//changing text in h1
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else{//to hide bottom 3 square
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	messageDisplay.textContent = "";
// });
// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	//setting new picked color value
// 	pickedColor = pickColor();
// 	//changing text in h1
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		} 
// 	}
// 	messageDisplay.textContent = "";
// });
