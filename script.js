let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  console.log("Button clicked with value : ", value);
  if (isNaN(value)) {
    console.log("Value is not a number,  handling it as symbol");
    handleSymbol(value);
  } else {
    console.log("Value is a number,  handling it as number");
    handleNumber(value);
  }
  screen.innerText = buffer;
}
function handleSymbol(symbol) {
  console.log("Checking the value of symbol to know which action to take");
  switch (symbol) {
    case "C":
      console.log("Symbol is C, so clearing....");
      buffer = "0";
      runningTotal = 0;
      break;

    case "=":
      console.log("Value is =, checking previous operation to get result");
      if (previousOperator === null) {
        return;
      }
      removeOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;

    case "⬅":
      console.log("Value is ⬅, removing 1 char from buffer");
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "√":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.sqrt(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;

    case "sin":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.sin(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;
    case "cos":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.cos(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;
    case "tan":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.tan(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;
    case "ln":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.log(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;

    case "ln":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.log(buffer);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;

    case "X²":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.pow(buffer, 2);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;
    case "X³":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = Math.pow(buffer, 3);

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;

    case "π":
      console.log("RunningTotal is : ", runningTotal);
      runningTotal = 3.14159265359;

      console.log("Buffer is : ", buffer);
      buffer = runningTotal;
      break;
    case ".":
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      console.log(
        'Value is one of "+ - * / %", handling it as a math operation'
      );
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  console.log(
    "Handling Math operation, the current runningTotal is : ",
    runningTotal
  );
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    removeOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function removeOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "*") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
