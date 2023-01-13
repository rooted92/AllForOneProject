// url input: hello/{name}
let nameInput = document.getElementById('nameInput');
let sayHello = document.getElementById('sayHello');
let sayHelloBtn = document.getElementById('sayHelloBtn');
let savedInput = "";
let sayHelloUrl = "";

sayHelloBtn.addEventListener('click', function(){
    callSayHelloEndpoint(nameInput);
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
            data => 
            {
                sayHello.textContent = data
            }
    );
}

function callSayHelloEndpoint(nameInput){
    var letters = /^[A-Za-z]+$/; //we can use var within a function because it will only be related within this function. Block scope
    if(nameInput.value.match(letters))
    {
        savedInput = nameInput.value;
        sayHelloUrl = "https://pedrosallforone.azurewebsites.net/MiniChallenges/Hello/" + savedInput
        urlCall(sayHelloUrl);
    }
    else
    {
        sayHello.textContent = "Enter a valid response";
    }
}
