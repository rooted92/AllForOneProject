// url input: madlib/{adj1}/{adj2}/{noun1}/{noun2}/{noun3}/{noun4}/{noun5}/{adverb}/{verb1}/{verb2}/{verb3}/{verb4}

let adjectiveOne = document.getElementById('adjectiveOne');
let adjectiveTwo = document.getElementById('adjectiveTwo');
let nounOne = document.getElementById('nounOne');
let nounTwo = document.getElementById('nounTwo');
let nounThree = document.getElementById('nounThree');
let nounFour = document.getElementById('nounFour');
let nounFive = document.getElementById('nounFive');
let verbOne = document.getElementById('verbOne');
let verbTwo = document.getElementById('verbTwo');
let verbThree = document.getElementById('verbThree');
let verbFour = document.getElementById('verbFour');
let adverb = document.getElementById('adverb');
let submitBtn = document.getElementById('submitBtn');
let showOutput = document.getElementById('showOutput');

let words = [adjectiveOne, adjectiveTwo, nounOne, nounTwo, nounThree, nounFour, nounFive, verbOne, verbTwo, verbThree, verbFour, adverb];// created array of words to save id variables(wanted to try out using the spread operator)
let savedWords = [];//empty array for saved values of words in callMadlibEndpoint() function

let savedInput = '';
let savedAdjOne = '';
let savedAdjTwo = '';
let savedNounOne = '';
let savedNounTwo = '';
let savedNounThree = '';
let savedNounFour = '';
let savedNounFive = '';
let savedVerbOne = '';
let savedVerbTwo = '';
let savedVerbThree = '';
let savedVerbFour = '';
let savedAdverb = '';
let madlibUrl = '';

submitBtn.addEventListener('click', function(){
    callMadlibEndpoint(...words);//spread operator to pass in values in words array as individual arguments
});
                        // a, b, c,... are parameters that will be saved into the variables that will go inside the savedWords array. that array will be passed in to madlib URL and join with the '/' to join each element in the savedWords array using .join() method
const callMadlibEndpoint = (a, b, c, d, e, f, g, h, i, j, k, l) => {
    var regex = /^[A-Za-z]+$/g;
    if(a.value.match(regex) && b.value.match(regex) && c.value.match(regex) && d.value.match(regex) && e.value.match(regex) && f.value.match(regex) && g.value.match(regex) && h.value.match(regex) && i.value.match(regex) && j.value.match(regex) && k.value.match(regex) && l.value.match(regex))
    {
        savedAdjOne = a.value;
        savedAdjTwo = b.value;
        savedNounOne = c.value;
        savedNounTwo = d.value;
        savedNounThree = e.value;
        savedNounFour = f.value;
        savedNounFive = g.value;
        savedVerbOne = h.value;
        savedVerbTwo = i.value;
        savedVerbThree = j.value;
        savedVerbFour = k.value;
        savedAdverb = l.value;
        savedWords = [savedAdjOne, savedAdjTwo, savedNounOne, savedNounTwo, savedNounThree, savedNounFour, savedNounFive, savedVerbOne, savedVerbTwo, savedVerbThree, savedVerbFour, savedAdverb];
        madlibUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/madlib/${savedWords.join('/')}`;
        callUrl(madlibUrl);
    }
    else
    {
        showOutput.textContent = 'Please enter a word';
    }
}

const callUrl = url => {
    fetch(url).then(
        response => response.text()
    ).then(
        data => showOutput.textContent = data
    )
}