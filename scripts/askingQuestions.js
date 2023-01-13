// url input: asking/{name}/{time}

let nameInput = document.getElementById('nameInput');
let timeInput = document.getElementById('timeInput');
let submitBtn = document.getElementById('submitBtn');
let showOuput = document.getElementById('showOutput');

let savedNameInput = '';
let savedTimeInput = '';
let askingQuestionsUrl = '';

submitBtn.addEventListener('click', function(){
    callAskingQuestionsEndpoint(nameInput, timeInput);
});

const callAskingQuestionsEndpoint = (nameInput, timeInput) => {
    var regex = /^[A-Za-z]+\s*$/;
    if(nameInput.value.match(regex))
    {
        savedNameInput = nameInput.value;
        savedTimeInput = timeInput.value;
        askingQuestionsUrl = `https://pedrosallforone.azurewebsites.net/MiniChallenges/asking/${savedNameInput}/${savedTimeInput}`;
        callUrl(askingQuestionsUrl);
    }
    else
    {
        showOuput.textContent = 'Please enter a valid name';
    }
    
}

const callUrl = (url) => {
    fetch(url).then(
        response => response.text()
        ).then(
            data => showOuput.textContent = data
        )
}