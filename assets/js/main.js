const formName = document.querySelector('#floatingName')
const formSurname = document.querySelector('#floatingSurname')
const formColor = document.querySelector('#floatingColor')
const form = document.querySelector('#form')

let newPasswordDiv = document.querySelector('#new-password')

form.addEventListener('submit', function (invioForm) {

    invioForm.preventDefault();

    const name = formName.value;
    const surname = formSurname.value;
    const color = formColor.value;

    //let infoPassword = {name, surname, color}
    //console.log(infoPassword)

    newPasswordDiv.innerHTML =
    `
    <span class="fs-3">La tua nuova password è:</span>
    <h2>${name}${surname}${color}</h2>
    `

    form.reset ();
});