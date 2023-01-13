// To search by firstname use fetchfirstname/{studentData}
// To search by lastname use fetchlastname/{studentData}
// To search by slackname use fetchslackname/{studentData}
// To search by email use fetchemail/{studentData}

// You can also search for all of the above using one endpoint studentdirectory/{studentData}

//inputs
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let slackNameInput = document.getElementById('slackNameInput');
let emailInput = document.getElementById('emailInput');

//submit buttons
let fNameSubBtn = document.getElementById('fNameSubBtn');
let lNameSubBtn = document.getElementById('lNameSubBtn');
let sNameSubBtn = document.getElementById('sNameSubBtn');
let emailSubBtn = document.getElementById('emailSubBtn');

//display text
let showFirstName = document.getElementById('showFirstName');
let showLastName = document.getElementById('showLastName');
let showSlackName = document.getElementById('showSlackName');
let showEmail = document.getElementById('showEmail');
let showHobbies = document.getElementById('showHobbies');

let studentData = '';

let busbyBtn = document.getElementById('busbyBtn');// <-- testing dropdown list by 'hardcoding'
let leBtn = document.getElementById('leBtn');
let lamzonBtn = document.getElementById('lamzonBtn');
let burrBtn = document.getElementById('burrBtn');
let decoitoBtn = document.getElementById('decoitoBtn');
let castanedaBtn = document.getElementById('castanedaBtn');
let laphamBtn = document.getElementById('laphamBtn');
let dekokBtn = document.getElementById('dekokBtn');
let fujimuraBtn = document.getElementById('fujimuraBtn');
let aguilarBtn = document.getElementById('aguilarBtn');
let contrerasBtn = document.getElementById('contrerasBtn');
let nilssonBtn = document.getElementById('nilssonBtn');
let lazarBtn = document.getElementById('lazarBtn');
let wilkinsBtn = document.getElementById('wilkinsBtn');
let gowanBtn = document.getElementById('gowanBtn');
let leyvaBtn = document.getElementById('leyvaBtn');
let garciaBtn = document.getElementById('garciaBtn');
let ramirezBtn = document.getElementById('ramirezBtn');
let martinezBtn = document.getElementById('martinezBtn');
let lagunaBtn = document.getElementById('lagunaBtn');
let fergusonBtn = document.getElementById('fergusonBtn');
let magpantayBtn = document.getElementById('magpantayBtn');
let goodwinBtn = document.getElementById('goodwinBtn');
let mannBtn = document.getElementById('mannBtn');
let rodriguezBtn = document.getElementById('rodriguezBtn');
let johnsonBtn = document.getElementById('johnsonBtn');
let ortegaBtn = document.getElementById('ortegaBtn');
let hanaBtn = document.getElementById('hanaBtn');
let mashrahBtn = document.getElementById('mashrahBtn');
let aguirreReyesBtn = document.getElementById('aguirre-reyesBtn');

let studentDropdownItems = document.getElementsByClassName('dropdown-item');

let studentNames = [];
let studentDirectoryUrl = '';

// for(let i = 0; i < studentDropdownItems.length; i++)
// {
//     callStudentDirectoryEndpoint(studentDropdownItems[i].textContent);
// }

//testing dropdown list vvv
busbyBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Busby').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

leBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Le').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

lamzonBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Lamzon').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

burrBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Burr').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

decoitoBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Decoito').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

castanedaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Castaneda').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

laphamBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Lapham').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

dekokBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Dekok').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

fujimuraBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Fujimura').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
        
    )
});

aguilarBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Aguilar').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

contrerasBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Contreras').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

nilssonBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Nilsson').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

lazarBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Lazar').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

wilkinsBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Wilkins').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

gowanBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Gowan').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

leyvaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Leyva').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

garciaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Garcia').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

ramirezBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Ramirez').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

martinezBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Martinez').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

lagunaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Laguna').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

fergusonBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Ferguson').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

magpantayBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Magpantay').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

goodwinBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Goodwin').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

mannBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Mann').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

rodriguezBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Rodriguez').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

johnsonBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Johnson').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

ortegaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Ortega').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

hanaBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Hana').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

mashrahBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Mashrah').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

aguirreReyesBtn.addEventListener('click', function(){
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Aguirre-Reyes').then(
        response => response.json()
    ).then(
        data => {
        showFirstName.textContent = data.firstName;
        showLastName.textContent = data.lastName;
        showSlackName.textContent = data.slackName;
        showEmail.textContent = data.email;
        showHobbies.textContent = data.hobbies;
        console.log(data);
        }
    )
});

fNameSubBtn.addEventListener('click', function(){
    fetchFirstName(firstNameInput);
});

lNameSubBtn.addEventListener('click', function(){
    fetchLastName(lastNameInput);
});

sNameSubBtn.addEventListener('click', function(){
    fetchSlackName(slackNameInput);
});

emailSubBtn.addEventListener('click', function(){
    fetchEmail(emailInput);
});

const fetchFirstName = (firstNameInput) => {
    studentData = firstNameInput.value;
    studentDirectoryUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/fetchfirstname/${studentData}`;
    callUrl(studentDirectoryUrl);
}

const fetchLastName = lastNameInput => {
    studentData = lastNameInput.value;
    studentDirectoryUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/fetchlastname/${studentData}`;
    callUrl(studentDirectoryUrl);
}

const fetchSlackName = slackNameInput => {
        studentData = slackNameInput.value;
        studentDirectoryUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/fetchslackname/${studentData}`;
        callUrl(studentDirectoryUrl);
}

const fetchEmail = emailInput => {
    studentData = emailInput.value;
    studentDirectoryUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/fetchemail/${studentData}`;
    callUrl(studentDirectoryUrl);
}

// const callStudentDirectoryEndpoint = studentData => {
    // callUrl('https://pedrosallforone.azurewebsites.net/minichallenges/fetchfirstname/pedro')
    // for(let person of studentNames)
    // {
    //     if(`${person.firstNameInput}`  === studentData)
    //     {
    //         showFirstName.textContent = person.firstNameInput;
            
    //     }
    // }
//     fetch('https://pedrosallforone.azurewebsites.net/minichallenges/studentdirectory/Pedro Castaneda').then(
//         response => response.text()
//     ).then(
//         data => console.log(data)
//     )
// }

// callStudentDirectoryEndpoint();

const callUrl = url => {
    fetch(url).then(response => response.json()).then(
        data => {
            showFirstName.textContent = data.firstName;
            showLastName.textContent = data.lastName;
            showSlackName.textContent = data.slackName;
            showEmail.textContent = data.email;
            showHobbies.textContent = data.hobbies;
            console.log(data);
        }
        );
}