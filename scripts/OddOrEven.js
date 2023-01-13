// url input: oddoreven/{number}

let numberInput = document.getElementById('numberInput');
let submitBtn = document.getElementById('submitBtn');
let showOutput = document.getElementById('showOutput');

let savedNumberInput = '';
let oddOrEvenUrl = '';


submitBtn.addEventListener('click', function(){
    callOddOrEvenEnpoint(numberInput)
});


const callOddOrEvenEnpoint = numberInput => {
    savedNumberInput = numberInput.value;
    if(savedNumberInput)
    {
        oddOrEvenUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/oddoreven/${savedNumberInput}`;
        callUrl(oddOrEvenUrl);
    }
    else
    {
        //In the website you see 'Invalid Entry' instead of the text below. That is because the function is 
        //retrieving that data from the endpoint in minichallengeapi
        showOutput.textContent = 'Please enter a number';
    }
    // fetch('https://pedrosallforone.azurewebsites.net/minichallenges/oddoreven/13').then(
    //     response => response.text()
    // ).then(
    //     data => console.log(data)
    // )
}

const callUrl = (url) => {
    fetch(url).then(response => response.text()).then(data => showOutput.textContent = data);
}