let userConsent = confirm("Do you want to play the game?");

if (userConsent) {
    let chances = 1;
    let GameNumber = 25;

while (chances <= 3) {
        let userInput = prompt("Guess your number please");

        if (userInput == GameNumber) {
            alert("Congratulations! You guessed the correct number.");
            break;
        } else {
            let message = `Wrong guess. This is your attempt ${chances} of 3.`;
            if (chances === 2) {
                message = `Wrong guess. This is your LAST attempt${chances} of 3.`;
            }
            alert(message);
        } 
        chances++;
        if (chances === 3) {

            alert(`Sorry, you've used all 3 attempts. The correct number was ${GameNumber}.`);

            break;
        }
    }

}
 else 
    {
    alert("Maybe next time!");
}