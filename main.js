let body = document.body;
let form = document.getElementsByClassName('color-p');
let submit32 = document.getElementById('submit32');
//let user = document.getElementById().value;



submit32.addEventListener('click', function() {
    for (const para of form) para.classList.add('hide');
    submit32.classList.add('hide')
});

submit32.addEventListener('click', function() {
    let divContainer = document.createElement('div');
    divContainer.classList.add('flex-center');
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    let text = document.createTextNode("Hello Abdelrahman");
    divCard.appendChild(text);
    divContainer.appendChild(divCard);

    body.appendChild(divContainer);
});
const themeToggle = document.querySelector('#theme-toggle');
const body_mode = document.querySelector('body');

// Checking for  theme in local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Saving theme to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});