const defaultResult = 0;
let currentResult = defaultResult; // it will not change the value because you just copy then it will read also the second line
let logEntries = []; // array

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}
// REFACTORING means splitting and restructuring code
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  }; //object
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = parseInt(usrInput.value);
  // const calcDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  // currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber; // another way like the above
  // outputResult(currentResult, calcDescription);
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  // const logEntry = {
  //   operation: "ADD",
  //   prevResult: initialResult,
  //   number: enteredNumber,
  //   result: currentResult,
  // }; //object
  // logEntries.push(enteredNumber);//array
  // logEntries.push(logEntry); //array
  // console.log(logEntries[0]); // reading the single value
  // console.log(logEntry.operation); // shows the operation
  // console.log(logEntries); // reading the entire value
}

function subtract() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} - ${enteredNumber}`;
  // currentResult = currentResult - enteredNumber;
  currentResult -= enteredNumber; // another way
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;

  // currentResult = currentResult * enteredNumber;
  currentResult *= enteredNumber; // another way like above
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = parseInt(usrInput.value);
  const initialResult = currentResult;

  // currentResult = currentResult / enteredNumber;
  currentResult /= enteredNumber; // another way like above
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
