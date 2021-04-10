//-------------- String Reversal

const stringReversal = (string) => {
    //method 1
    let reverse1 = string.split("").reverse().join("")
    
    //method 2
    let reverse2 = "";
    for(let char of string){
        reverse2 = char + reverse2
    }

    //method 3
    let reverse3 = "";
    string.split("").forEach(char => {
        reverse3 = char + reverse3;
    })
    return [reverse1, reverse2, reverse3];
}

// console.log(stringReversal("Hello World"))

//----------------- Validate Palindrome 
function validatePalindrome(string){
    string = string.replace( /\s/g,'')
    const reverse = string.split("").reverse().join("").replace( /\s/g, '');
    console.log(reverse)
    if(reverse === string){
        return true;
    }else{
        return false;
    }


}

// console.log(validatePalindrome("civic"), validatePalindrome("honda"), validatePalindrome("top spot"))

function longestWord(string) {
    stringArr = string.split(" ");
    let longestLength = 0;
    let longWord = ""
    let longestWords = [];
    for(let word of stringArr){
        if(word.length >= longWord.length){
            longWord = word;
            longestLength = word.length;
        }
    }

    for(let word of stringArr){
        if(word.length === longestLength){
            longestWords.push(word)
            
        }
    }   
    
    return longestWords;
}

// console.log(longestWord("Smith woke up too early today"))
// console.log(longestWord("I am a dog with one hundred spots"))








//--------------Highest Even Digit in an Integer
const numOfEvens = (integer) => {
    const evenArr = []
    let highEven = 0;
    const string = integer.toString();
    for (let i = 0; i < string.length; i++) {
        const toInt = parseInt(string[i])
        if (toInt % 2 === 0) {
            evenArr.push(toInt)
        }

    }

    evenArr.forEach(num => {
        if (highEven < num) {
            highEven = num
        }
    })

    if (evenArr.length === 0) {
        return "No even Numbers"
    } else {
        return highEven;
    }



}
// console.log(numOfEvens(2364983));
// console.log(numOfEvens(159))

//------------------rock paper sisors

function rockPaperSisors() {
    const entry = prompt("R P S?");
    const choice = entry.toUpperCase();
    const choices = ["R", "P", "S"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    let winner = ""
    console.log(`You: ${choice} // Cpu: ${randomChoice}`)

    if(choice === randomChoice) {
       winner = "Its a Draw";
    } else if(choice === "R" && randomChoice === "S"){
        winner = "You Win!";
    } else if(choice === "R" && randomChoice === "P"){
        winner = "You Lose!";
    } else if(choice === "S" && randomChoice === "R"){
        winner = "You Lose!"
    } else if(choice === "S" && randomChoice === "P"){
        winner = "you Win!";
    } else if(choice === "P" && randomChoice === "S"){
        winner = "You Lose!"
    }else if(choice === "P" && randomChoice === "R"){
        winner = "You Win!"
    }
    

    return winner;
}

// console.log(rockPaperSisors())

