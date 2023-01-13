// url input: than/{numberONe}/{numberTwo}

let numberOneInput = document.getElementById('numberOneInput');
let numberTwoInput = document.getElementById('numberTwoInput');
let submitBtn = document.getElementById('submitBtn');
let showOutput = document.getElementById('showOutput');

let savedNumberOneInput = '';
let savedNumberTwoInput = '';
let greaterThanUrl = '';

submitBtn.addEventListener('click', function(){
    callGreaterThanOrLessThanEndpoint(numberOneInput, numberTwoInput)
});

const callGreaterThanOrLessThanEndpoint = (numberOneInput, numberTwoInput) => {
    savedNumberOneInput = parseInt(numberOneInput.value);
    savedNumberTwoInput = parseInt(numberTwoInput.value);
    if(Number.isInteger(savedNumberOneInput) || Number.isInteger(savedNumberTwoInput))
    {
        greaterThanUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/than/${savedNumberOneInput}/${savedNumberTwoInput}`;
        callUrl(greaterThanUrl);
    }
    else
    {
        showOutput.textContent = 'Please enter a number';
    }
}

const callUrl = url => {
    fetch(url).then(response => response.text()).then(data => showOutput.textContent = data);
}