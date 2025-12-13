let gameNumber = 25;
let userNumber = Number(prompt("Guess a number"));

while (userNumber !== gameNumber) {

    if (userNumber < gameNumber) {
        alert("Try a bigger number");
    } else {
        alert("Try a smaller number");
    }

    if (gameNumber % 2 === 0) {
        alert("Hint: The correct number is even");
    } else {
        alert("Hint: The correct number is odd");
    }

    userNumber = Number(prompt("Guess a number"));
}

document.getElementById("result").innerText = "Congratulations! You guessed the correct number🎉🎉🎉🎉🎉🎉: " + gameNumber;