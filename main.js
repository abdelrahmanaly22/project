let body = document.body;
let form = document.getElementsByClassName('color-p');
let submit32 = document.getElementById('submit32');


submit32.addEventListener('click', function() {
    for (const para of form) para.classList.add('hide');
    submit32.classList.add('hide')
});

submit32.addEventListener('click', function() {
    let divContainer = document.createElement('div');
    divContainer.classList.add('flex-center');
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    let text = document.createTextNode('Hello Abdelrahman');
    divCard.appendChild(text);
    divContainer.appendChild(divCard);

    body.appendChild(divContainer);
});