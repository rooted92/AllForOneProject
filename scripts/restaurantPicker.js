// url input: respicker/{category}
// Categories to choose from: american, asian, latin, european


let latinSubBtn = document.getElementById('latinSubBtn');
let asianSubBtn = document.getElementById('asianSubBtn');
let americanSubBtn = document.getElementById('americanSubBtn');
let europeanSubBtn = document.getElementById('europeanSubBtn');
let showOutput = document.getElementById('showOutput');

let restaurantUrl = '';

latinSubBtn.addEventListener('click', function(){
    fetchLatinRestaurant();
});

asianSubBtn.addEventListener('click', function(){
    fetchAsianRestaurant();
})

americanSubBtn.addEventListener('click', function(){
    fetchAmericanRestaurant();
});

europeanSubBtn.addEventListener('click', function(){
    fetchEuropeanRestaurant();
});

const fetchAsianRestaurant = () => {
    restaurantUrl = 'https://pedrosallforone.azurewebsites.net/minichallenges/respicker/asian';
    callUrl(restaurantUrl);
}

const fetchLatinRestaurant = () => {
    restaurantUrl = 'https://pedrosallforone.azurewebsites.net/minichallenges/respicker/latin';
    callUrl(restaurantUrl);
}

const fetchAmericanRestaurant = () => {
    restaurantUrl = 'https://pedrosallforone.azurewebsites.net/minichallenges/respicker/american';
    callUrl(restaurantUrl);
}

const fetchEuropeanRestaurant = () => {
    restaurantUrl = 'https://pedrosallforone.azurewebsites.net/minichallenges/respicker/european';
    callUrl(restaurantUrl);
}

// const callRestaurantPickerEndpoint = () => {
//     fetch('https://pedrosallforone.azurewebsites.net/minichallenges/respicker/asian').then(
//         response => response.text()
//     ).then(
//         data => console.log(data)
//     )
// }

const callUrl = (url) => {
    fetch(url).then(
        response => response.text()
    ).then(
        data => showOutput.textContent = data
    )
}