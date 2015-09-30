// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function(number) {
	var number = number / 2;
	return number;
}

divideByTwo(4);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
var greeting = function(name1, name2) {
	return 'Hello ' + name1 +' and ' + name2 ;
}

greeting('Bill', 'Ted');

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var amazonCashews = function(price) {
	var price = price * 6;
	return price; 
}

amazonCashews(8);

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var team1 = [];
var team2 = [];
var splitTeams = function(teammates) {
	for (i = 0; i < teammates.length; i++) {
		if (i % 2 === 0) {
			team1.push(teammates[i]);
		} else {
			team2.push(teammates[i]);
		}
	}	
	console.log(team1, team2);
}

splitTeams(teammates);
// teammates2 = ['Jon', 'Jose', 'Bill', 'Bob', 'Chuck', 'Jen'];
// splitTeams(teammates2);

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd

var quarter = function(number) {
	var number = number / 4;
		if (number % 2 === 0) {
			console.log('The number is even');
		} else {
			console.log('The number is odd');
		} 
	return number;
}

quarter(100);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function(num1, num2) {
	var totalArea = num1 * num2;
	return totalArea;
}

area(3, 5);

var perimeter = function(num1, num2) {
	var totalPerimeter = 2 * (num1 + num2);
	return totalPerimeter;
}

perimeter(3, 5);

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function(hours) {
	if (hours > 8) {
		console.log(hours);
		console.log('Congrats on ' + hours + ' of sleep.');
	} else {
		console.log('Maybe you should shoot for more than ' + hours ' of sleep.');
	}
}

sleepings(6);

// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)
var enterNumber = prompt('Please enter a six digit number').toString();
var reverseString = function(input) {
	var o = [];
	for (var i = input.length - 1, j = 0; i >= 0; i--, j++)
		o[j] = input[i];
  	return o.join('');
}

reverseString(enterNumber);

// 9. Within the fuction you wrote in #7, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.
var enterNumber = prompt('Please enter a six digit number').toString();
var reverseString = function(input) {
	var o = [];
	for (var i = input.length - 1, j = 0; i >= 0; i--, j++)
		if (input.length <=6) {
			alert('I asked for 6 digits dopey.  You are a failure');
		}
		o[j] = input[i];
  	return o.join('');
}

reverseString(enterNumber);

// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
var piggyBank = function(quarters, dimes, nickels, pennies) {
	var totalChange = (quarters * .25) + (dimes * .10) + (nickels * .05) + (pennies * .01);
	totalChange = totalChange.toFixed(2);
	return totalChange;
}

piggyBank(4, 3, 2, 1);

// 11. Develop a function that determines a person's age by prompting them for their birth year.
var personsAge = function(birthYear) {
	var age = 2015 - birthYear;
	return age;
}

personsAge(1978);

// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is
var leapYear = function(year) {
	if (year % 4 === 0 || year % 400 === 0) {
		console.log(year + ' is a leap year.');
	} else if (year % 100 === 0) {
		console.log(year + ' is close but no cigar.');
	} else {
		console.log(year + ' is not a leap year.');
	}
}

leapYear(1997);

// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number
var phoneNumberCleanUp = function(phoneNumber) {
	if (phoneNumber.length === 10) {
		console.log(phoneNumber + ' is a valid number.');
	} else if (phoneNumber.length === 11) {
		var firstDigit = phoneNumber.charAt(0)
			if (firstDigit != '1') {
				console.log(phoneNumber + ' is a bad number.');
			} else {
				phoneNumber = phoneNumber.slice(1, 10);
				console.log(phoneNumber + ' is a valid number.');
			}
	} else {
		console.log(phoneNumber + ' is not a valid number.');
	}
	return phoneNumber;
}

phoneNumberCleanUp('1234567898');

// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.
var arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
var checkNumberStatus = function(x) {
	for (var i = 0; i < x.length; i++) {
		var item = x[i];
		if (isNaN(item)) {
			console.log(item + ' Is not a number');
		} else {
			console.log(item + ' Is a number');
		}
	}
}

checkNumberStatus(arrayOfAllTheThings);

// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

var diceRoll = function(dice1, dice2) {
	var roll = [];
	roll.push(dice1, dice2);
	return roll;
}

diceRoll(dice1, dice2);


// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.

var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

var diceRollAdd = function(dice1, dice2) {
	var roll = dice1 + dice2
	return roll;
}

diceRollAdd(dice1, dice2);

var whichSide = function(roll) {
	var playerOne = 0;
	playerOne = playerOne + roll;
	if (playerOne >= 0 && playerOne <= 10) {
		console.log(playerOne + ' is on the north side of the board.');
	} else if (playerOne >= 11 && playerOne <= 20) {
		console.log(playerOne + ' is on the east side of the board.');
	} else if (playerOne >= 21 && playerOne <= 30) {
		console.log(playerOne + ' is on the south side of the board.');
	} else {
		console.log(playerOne + ' is on the west side of the board.');
	}
}

whichSide(diceRollAdd(dice1, dice2));
//TODO Figure out how to iterate upon playerOne spot on board and number 17

// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.
