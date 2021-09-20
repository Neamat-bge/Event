function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// handle blue Button click by setting function name

const blueBUtton = document.getElementById('make-button-blue')
// Just set the name of the function
blueBUtton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const greenButton = document.getElementById('make-button-green')
// Anonymous Function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// Handle by using addEventListener
const goldenButton = document.getElementById('make-golden-rod');
goldenButton.addEventListener('click', makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

const hotPinkButton = document.getElementById('make-hotpink')
hotPinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = ' hotpink';
})


document.getElementById('make-light-blue').addEventListener('click', function makeLightBlue() {
    document.body.style.backgroundColor = 'lightblue';
})
