import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const hideErrorMessages = (form: HTMLFormElement): void => {
    // For each element in the form, removes the error message
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach((element) => element.classList.remove(SHOW_ERROR_MESSAGE));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
    // Selects the parent element of the input, which is a div
    const formFields = input.parentElement as HTMLDivElement;
    // Selects the error message from formFields
    const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

    // Sets the error message inner text as the message received
    errorMessage.innerText = msg;
    // Adds the error message class to the form fields
    formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
    // For each input, check if it's empty
    inputs.forEach((input) => {
        // If empty, show the error message
        if (!input.value) showErrorMessage(input, 'Esse campo é obrigatório.');
    });
};

const checkEmail = (input: HTMLInputElement): void => {
    // If the email field doesn't match the mail validator, show an error message
    if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido.');
};

const checkEqualPassword = (password1: HTMLInputElement, password2: HTMLInputElement): void => {
    // Checks if the passwords are the same in both fields
    if (password1.value !== password2.value) showErrorMessage(password2, 'As senhas não são iguais.');
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
    let send = true;
    // For each input, check if there's an error message, if so, prevents the form from submitting
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(() => (send = false));
    return send;
};

// Not necessary to put the type for some things
// but it's a good practice
form.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    hideErrorMessages(form);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPassword(password, password2);
    // Could send for real! but will only show the console.log...
    if (shouldSendForm(this)) console.log('Formulário enviado!');
});
