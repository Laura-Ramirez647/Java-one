//initial code
const pElement= document.getElementById("text");
const button = document.getElementById("button");

//The correct number
const correctNum = 4;
let attempts=0;

    //code for create a random number
   function startGame(){
    const randomNumber =  Math.floor((Math.random()* 10) + 1);
    let attempts = 0;
   }


   //check user guess
    function checkGuess(){
        const userGuess = parseInt(document.getElementById("guess").value);

        //check if the number is not in the range
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10){
            pElement.innerText = "!Please enter a number between 1 and 10!";
            pElement.style.color = "orange";
            pElement.style.fontSize = "x-large";
            pElement.style.backgroundColor = "pink";
            pElement.style.maxWidth = "500px";
            pElement.style.margin = "0 auto";
            pElement.style.marginBottom = "80px";
            pElement.style.border = "1px solid orange";
            return;
        }

        attempts++;

        //this is for the correc number
        if (userGuess === correctNum) {
            pElement.innerText = "Congratulations!! You guessed the correct number.";
            pElement.style.color = "lightGreen";
            pElement.style.fontSize = "xx-large";
            pElement.style.backgroundColor = "pink";
            pElement.style.maxWidth = "500px";
            pElement.style.margin = "0 auto";
            pElement.style.border = "1px solid lightGreen";
            pElement.style.marginBottom = "50px";
        
        //if the number is too low that is gonna happen.
        }else if (userGuess < correctNum){
            pElement.innerText = "The number is too low. Try again!";
            pElement.style.fontSize = "x-large";
            pElement.style.color = "blue";
            pElement.style.backgroundColor = "pink";
            pElement.style.maxWidth = "500px";
            pElement.style.margin = "0 auto";
            pElement.style.marginBottom = "80px";
            pElement.style.border = "1px solid blue";
            return;
        
        //if the number is too high that is gonna happen.
        }else if (userGuess > correctNum){
            pElement.innerText = "The number is too high. Try again!";
            pElement.style.fontSize = "x-large";
            pElement.style.color = "red";
            pElement.style.backgroundColor = "pink";
            pElement.style.maxWidth = "500px";
            pElement.style.margin = "0 auto";
            pElement.style.marginBottom = "80px";
            pElement.style.border = "1px solid red";
            return;
        }
    }

    //this make all funtion because make the button check the guess. 
    button.addEventListener('click', checkGuess);