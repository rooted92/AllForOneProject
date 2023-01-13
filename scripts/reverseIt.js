// url input: reverse/{wordNum}
// you can input word or number

let userInput = document.getElementById('userInput');
let submitBtn = document.getElementById('submitBtn');
let showOutput = document.getElementById('showOutput');

let savedInput = '';
let reverseItUrl = '';

submitBtn.addEventListener('click', function(){
    callReverseItEnpoint(userInput);
});

const callReverseItEnpoint = (userInput) => {
    savedInput = userInput.value;
    reverseItUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/reverse/${savedInput}`;
    callUrl(reverseItUrl);
}

const callUrl = url => {
    fetch(url).then(
        response => response.text()
    ).then(
        data => showOutput.textContent = data
    )
}