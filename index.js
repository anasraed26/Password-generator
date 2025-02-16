let characters = [];

const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols =["~","","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let plength = document.getElementById("passlength")
let output1El = document.getElementById("output1")
let output2El = document.getElementById("output2")
let swL = document.getElementById("lswitch")
let swN = document.getElementById("nswitch")
let swS = document.getElementById("sswitch")
let ssL = 0
let ssN = 0
let ssS = 0
function sletter() {
    ssL += 1
    if ((ssL % 2)===1) {
        swL.style.background = "#55F991"; // USED GOOGLE TO SEE HOW TO CHANGE CSS
        swL.style.padding = "0px 0px 0px 30px"; // This one is an original idea to change the padding for the switch so it looks like its moving
    } else {
        swL.style.background = "#F95555";
        swL.style.padding = "0px 30px 0px 0px";
    }
}
function snumber() {
    ssN += 1
    if ((ssN % 2)===1) {
        swN.style.background = "#55F991";
        swN.style.padding = "0px 0px 0px 30px";
    } else {
        swN.style.background = "#F95555";
        swN.style.padding = "0px 30px 0px 0px";
    }
}
function ssymbol() {
    ssS += 1
    if ((ssS % 2)===1) {
        swS.style.background = "#55F991";
        swS.style.padding = "0px 0px 0px 30px";
    } else {
        swS.style.background = "#F95555";
        swS.style.padding = "0px 30px 0px 0px";
    }
}
function generatepass(){
    let pass = ""
    let pass2 = ""
    let length = parseInt(plength.value); // AI
    if (isNaN(length) || length <= 0) { // AI
        alert("Please enter a valid number for password length.");//AI
        return;//AI
    }
    if (ssL %2 && ssN %2 && ssS%2 === 1 ) {
        characters = letters.concat(numbers, symbols) //USED CHATGPT TO FIND OUT ABOUT CONCAT
    } else if (ssL %2 && ssN %2 === 1) {
        characters = letters.concat(numbers)
    } else if (ssL %2 && ssS%2 === 1) {
        characters = letters.concat(symbols)
    } else if (ssN %2 && ssS%2 === 1) {
        characters = numbers.concat(symbols)
    } else if (ssL %2 === 1) {
        characters = letters
    } else if (ssN %2 === 1) {
        characters = numbers
    } else if (ssS%2 === 1) {
        characters = symbols
    } else {
        alert("Please turn on atleast one option."); //Learned about alert and decided to use it here as well.
        return;
    }
    for (let i = 0; i < length; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)]
    }
    for (let i = 0; i < length; i++) {
        pass2 += characters[Math.floor(Math.random() * characters.length)]
    }
    output1El.textContent = pass
    output2El.textContent = pass2
}