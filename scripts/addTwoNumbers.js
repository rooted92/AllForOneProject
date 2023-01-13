// url input: add/{numberOne}/{numberTwo}

let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let submitBtn = document.getElementById('submitBtn');
let showOutput = document.getElementById('showOutput');

let savedNumberOneInput = "";
let savedNumberTwoInput = "";
let addNumbersUrl = "";

submitBtn.addEventListener('click', function(){
    callAddTwoNumbersEnpoint(numberOne, numberTwo);
});

const urlCall = (url) => {
    fetch(url).then(
        response => response.text()
    ).then(
        data => showOutput.textContent = data
    )
}

const callAddTwoNumbersEnpoint = (numberOne, numberTwo) => {
    savedNumberOneInput = parseInt(numberOne.value);
    savedNumberTwoInput = parseInt(numberTwo.value);
    if(Number.isInteger(savedNumberOneInput) ||  Number.isInteger(savedNumberTwoInput))
    {
        addNumbersUrl = `https://pedrosallforone.azurewebsites.net/MiniChallenges/add/${savedNumberOneInput}/${savedNumberTwoInput}`;
        urlCall(addNumbersUrl);
    }
    else
    {
        showOutput.textContent = 'Please enter a number';
    }
}

