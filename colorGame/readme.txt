this is the color game project in this project the main function is to improve user rgb color understanding.

this is a web app whis is made by using HTML5, CSS3, and JavaScript languages and it can work in any web browser

the source code is given in the later section .

HTML

<!DOCTYPE html>
<html>
<head>
	<title>color game</title>
	<link rel="stylesheet" type="text/css" href="colorgame.css">
</head>
<body>
	<h1>The 
		<br>
		<span id="colorDisplay">RGB</span> 
		<br>
	color game</h1>
	<div id="stripe">
		<button id="resetButton">New Color</button>
		<span id="message"></span>
		<button class="mode">Easy</button>
		<button  class="mode selected">Hard</button>
	</div>
	<div id="container">
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
	</div>
	<span id="inst"><p>INSTRUCTIONS-</p><p>the color given in the top is in RGB red green blue. you have to choose the correct interpretation from the given colors which are randomly generated</p> </span>
	
	<script type="text/javascript" src="colorgame.js"></script>
</body>
</html>





CSS




body {
	background-color: #232323;
	margin: 0;
	font-family: "Avenir","Montserrat";
}

h1{
	color: white;
	text-align: center;
	background-color: steelblue;
	margin: 0;
	font-weight: normal;
	text-transform: uppercase;
	line-height: 1.1;
	padding: 20px 0;

}

.square{
	width: 30%;
	background: purple;
	padding-bottom: 30%;
	float: left;
	margin:1.66%;
	border-radius: 15%;
	transition: background .6s;
	-webkit-tansition: background .6s;
	-moz-transition:background .6s;
}

#container{
	width: 600px;
	margin: 20px auto;
}

#stripe{
	background-color: white;
	height: 30px;
	text-align: center;
}

#colorDisplay{
	font-size: 2em;
}

#message{
	display:inline-block;
	width: 20%
}

.selected{
	background-color:steelblue;
	color:white;
}
button{
	border : none;
	background: none;
	text-transform: uppercase;
	font-weight: 700;
	height: 100%;
	color:steelblue;
	letter-spacing: 1px;
	font-size: inherit;
	transition: all .3s;
	outline: none;
}

button:hover{
	color:white;
	background-color: steelblue;

}
span#inst{
	color:white;
	text-transform: capitalize;
	text-align: center;
	padding-left: 15px;
	margin-left: 5px;
	
}





JAVASCRIPT




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
