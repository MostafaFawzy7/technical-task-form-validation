const API_URL = 'https://private-b2e6827-robustatask.apiary-mock.com';
const API_PATH_SIGNUP = '/auth/register';
const API_PATH_SIGNIN = '/auth/login';


// Register/Login Switching Functionality (Desktop)

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


