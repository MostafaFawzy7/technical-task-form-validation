
// Switch Between Registeration & Login Forms

const formSwitch = () => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
}


// Switch Between Registeration & Login Forms in Responsive

const formMobileSwitch = () => {
	const mobLogIn = document.querySelector('.mobLogIn');
	const mobRegister = document.querySelector('.mobRegister');
	const signInContainer = document.querySelector('.sign-in-container');
	const signUpContainer = document.querySelector('.sign-up-container');

	mobLogIn.addEventListener('click', () => {
		signUpContainer.style.display = 'none';
		signInContainer.style.display = 'block';
	});

	mobRegister.addEventListener('click', () => {
		signInContainer.style.display = 'none';
		signUpContainer.style.display = 'block';
	});
}