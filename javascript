//Write a function "nameThatAnimal" that has two 
//arguments: a name and a type of animal.

//function nameThatAnimal (name,animal) {
//The function should have an alert sentence naming the animal.
//	alert("The " + animal + " is named " + name + ".")
//}
//Call your function with a funny name and a real animal name
//nameThatAnimal("Shelby", "Zebra");



//Write a function "addTwo" that has two arguments:
//a and b, both numbers.
//function addTwo (a,b) {
//The function should find the sum of a, b, and then add 2.
//	alert(a + b + 2);
//}
//addTwo(1 , 2);

//build a variable for fullName
//	var fullName= window.prompt("What is your name?", "full name");

//function that prints the variable
//	function print(thing) {
//		document.write(thing);
//	}
//call function with variable
//print(fullName);


//function square(num) {
//	return num * num;
//}

//alert(square(4));

//var squareOfFive = square(5);

//alert(squareOfFive);


//tip calculator 
//function calculateTip(total) {
//    var tipPercent = 0.15; //Can be changed
//    return (total * tipPercent);
//}

//var billPreTip = 10;
//var billTip   = calculateTip(billPreTip);
//var receipt   = 'Meal: ' + billPreTip + ' Tip: ' + billTip + 
//    ' Total: ' + (billPreTip + billTip);
//alert(receipt); 


//var friend = "Bobby";
//var bff = "Randy";

//function nameFriend () {
//	var bff = "Melanie";
//	alert(friend + " is friends with " + bff);

//}
//nameFriend();
//alert(friend + " is friends with" +bff);


//var cats = 5;
//var dogs = 5;//

//if(cats <= dogs) {
//	alert(" There are a lot of dogs! ");
//}

//if(cats === dogs) {
//	alert(" The world is ending.");

//}

//if(cats >= dogs) {
//	alert("All is right in the world");
//}

//else{

//}

//Variable for temperature.
var temperature = 52;

//If it's below 35 degrees, say you might be dying.
if(temperature < 35) { 
//If it's between 35 and 50 degrees, brrrrr.
	alert( " You might be dying. ")
}
else if(35 < temperature && temperature < 50) {
	alert(" Brrrr!")
}
//If it's between 50 and 75 degrees.....
else if(50 < temperature && temperature < 75) {
	alert(" Pineapples! ")
}
//If it's below 75 degrees and 100 degrees, say go to the beach.
else if(75 < temperature && temperature < 100) {
	alert(" Go to the beach! ")
}
//If it's above 100 degrees, say you're probably dying.
else {
	alert(" You're probably dying. ")
}











