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

let students = document.getElementById('students');//id of the select tag
let studentDirectoryUrl = '';

//testing select dropdown list vvv
students.addEventListener('change', function(){
    fetchStudentData(students);
})

const fetchStudentData = (studentData) => {
    studentDirectoryUrl = `https://pedrosallforone.azurewebsites.net/minichallenges/fetchslackname/${studentData.value}`;
    callUrl(studentDirectoryUrl);
}

const populateSelectList = () => {
    fetch('https://pedrosallforone.azurewebsites.net/minichallenges/GetStudentList').then(
        response => response.json()
    ).then(
        data => {
            for(let i = 0; i < data.length; i++)
            {
                students.innerHTML += `<option class="dropdown-item" value="${data[i].slackName}">${data[i].firstName} ${data[i].lastName}</option>`;
            }
        }
    )
}
populateSelectList();// this function call will fill in the dropdown list

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