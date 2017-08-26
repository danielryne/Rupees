//variables to keep track of score
var wins = 0;
var losses = 0; 

//variables to keep track of values
var random = 0;
var green = 0;
var red = 0;
var blue = 0;
var silver = 0; 
var total = 0;  //total of the rupees added up 

//variable to play sound when rupee is clicked
var clicksound = new Audio('./assets/audio/rupee.wav');
var winsound = new Audio('./assets/audio/win.wav');

//resets the game in case of win or loss
function gamereset (){
	total = 0;
	$("#totalscore").html(total); 

	random = Math.floor((Math.random() * 120) + 1);
	$("#matchnumber").html(random);

	//give rupees random numbers 
	green = Math.floor((Math.random() * 11) + 1 );
	console.log("Green = " + green);
	red = Math.floor((Math.random() * 11) + 1 );
	console.log("Red = " + red);
	blue = Math.floor((Math.random() * 11) + 1 );
	console.log("Blue = " + blue);
	silver = Math.floor((Math.random() * 11) + 1 ); 
	console.log("Silver = " + silver);
}

//check to see if your total matches random number, resets board if you win or lose 
function checktotal(){

	if (total == random){ //check to see if you've won 
		$("#gametstatus").html("You won!"); //prints game status 

		wins = wins + 1; //increments wins
		$("#wins").html(wins); //prints wins 
		winsound.play();

		gamereset(); //resets game at the beginning 

	}
	else if (total >= random){ //check to see if you lost
		$("#gametstatus").html("You lost! Womp womp."); //prints game status 

		losses = losses + 1; //increments loses
		$("#losses").html(losses); //prints loses

		gamereset(); //resets game at the beginning 
	}
}

gamereset(); //resets game at the beginning 

$(document).ready(function() {

	//action when button is clicked
	$("#green").on("click", function() {
		 
		total = total + green; 	//adds to total 
		$("#totalscore").html(total); //prints to screen 
		clicksound.play();

		checktotal(); //checks to see if numbers match and if you've won or lost
	});

		//action when button is clicked
	$("#red").on("click", function() {
		 
		total = total + red; 	//adds to total 
		$("#totalscore").html(total); //prints to screen
		clicksound.play();

		checktotal(); //checks to see if numbers match and if you've won or lost
	});

	//action when button is clicked
	$("#blue").on("click", function() {
		 
		total = total + blue; 	//adds to total 
		$("#totalscore").html(total); //prints to screen 
		clicksound.play();

		checktotal(); //checks to see if numbers match and if you've won or lost
	});

	//action when button is clicked
	$("#silver").on("click", function() {
		 
		total = total + silver; 	//adds to total 
		$("#totalscore").html(total); //prints to screen 
		clicksound.play();

		checktotal(); //checks to see if numbers match and if you've won or lost
	});

});







