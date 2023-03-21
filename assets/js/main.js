const formName = document.querySelector('#floatingName')
const formSurname = document.querySelector('#floatingSurname')
const formColor = document.querySelector('#floatingColor')
const form = document.querySelector('#form')

let newPasswordDiv = document.querySelector('#new-password')

form.addEventListener('submit', function (invioForm) {
    //Evito che si ricarichi il sito
    invioForm.preventDefault();

    // valori input form
    const nameForm = formName.value;
    const surname = formSurname.value;
    const color = formColor.value;

    let infoPassword = [nameForm, surname, color]
    console.log(infoPassword)

    let shuffledInfo = infoPassword.sort(function () {
        return Math.random() - 0.5;
    });

    console.log(shuffledInfo)

    // funzione per innerHTML
    function generatePassword( ) {
    newPasswordDiv.innerHTML =
    `
    <span class="fs-3">La tua nuova password è:</span>
    <h2>${shuffledInfo.join('')}</h2>
    `
    }

    generatePassword();

});


// Tasto per resettare il form

const resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', function resetFunction(params) {
    form.reset ();
})

