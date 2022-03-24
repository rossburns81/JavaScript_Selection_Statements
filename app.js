console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let numToGuess = 5;

let userNum = prompt("Guess a number between 1 and 10.");

if (numToGuess > userNum) {
    alert("Too low");
} else if (numToGuess < userNum) {
    alert("Too high");
} else {
    alert ("Congratulations!");
}

// Exercise 2
let userBirthMonth = prompt(
    "What month were you born?\nType in the abbreviated month (ex: January -> Jan):"
    );

    switch (userBirthMonth) {
        case "Dec":
        case "Jan":
        case "Feb":
            alert("You were born in winter.")
            break;
        case "Mar":
        case "Apr":
        case "May":
            alert("You were born in spring.")
            break;
        case "Jun":
        case "Jul":
        case "Aug":
            alert ("You were born in summer.")
            break;
        case "Sept":
        case "Oct":
        case "Nov":
            alert ("You were born in fall.")
            break;
        default:
            alert("You gave me an incorrect month format.")   
    }
