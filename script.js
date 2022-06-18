let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function buttonClick (value) {
    if (isNaN(value)) {handleSymbol(value);} else {handleNumber(value);

    } screen.innerText = buffer;
}
function handleSymbol(symbol){
  
    switch (symbol){
        case "C":
            buffer ="0";
        runningTotal = 0;
        break;
        
        case "=":
            if (previousOperator === null) {return;}
            removeOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;

        case"⬅":
        if (buffer.length === 1) {buffer = "0";} 
        else {buffer = buffer.substring(0, buffer.length - 1);}
        break;
        
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            case "&radic;":   function sqrt() {
                screen.value = Math.sqrt(screen.value, 2);
            }
                 
            handleMath(symbol);
            break;
    }} 
 
/*
 function sin() {
        screen.value = Math.sin(screen.value);
    }
    function cos() {
        screen.value = Math.cos(screen.value);
    }
    function tan() {
        screen.value = Math.tan(screen.value);
    }
    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }
    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }
    function log() {
        screen.value = Math.log(screen.value);
    }
    function pi() {
        screen.value = 3.14159265359;
    }
    function e() {
        screen.value = 2.71828182846;
    }
*/
function handleMath(symbol) {if (buffer === "0"){return;}
const intBuffer = parseInt(buffer);
if (runningTotal === 0) {
    runningTotal = intBuffer;

} else {
    removeOperation(intBuffer);
}
previousOperator = symbol;
buffer = "0";
}

function removeOperation(intBuffer)
{if (previousOperator ==="+"){runningTotal += intBuffer;} 
else if (previousOperator ==="-"){runningTotal -= intBuffer;} 
else if (previousOperator ==="*"){runningTotal *= intBuffer;} 
else {runningTotal  /= intBuffer;}
}


function handleNumber(numberString)
{if (buffer ==="0") 
{buffer = numberString;}
else {buffer += numberString;}} 


function init () {

    document.querySelector(".calc-buttons")
    .addEventListener("click", function(event){

        buttonClick(event.target.innerText);
    })
} 

init();
