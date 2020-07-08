
const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";


// Submit Request Function

const submit = (form, verify, button, spinner, checkValidity, path) => {

	form.addEventListener('submit', e => {
		e.preventDefault();

		const formData = new FormData(form);

		const isValid = checkValidity(formData);

		if(!isValid) return;

		spinner.style.display = 'block';

		fetch(`${API_URL}${path}`, {
			method: 'POST',
			body: formData
		})
			.then(res => {
				if (!res.ok) {
					throw new Error(res.statusText);
				} else {
					return res.json();
				}
			})
			.then(data => {
				spinner.style.display = 'none';
				verify.innerText = data.message;
				button.style.cursor = "not-allowed";
				button.disabled = true;
			});
	});
}


// Submit Login Request Function

const loginSubmit = () => {
	const signInForm = document.getElementById('signInForm');
	const logInVerify = document.getElementById('logInVerify');
	const logInButton = document.querySelector('.signInButton');
	const logInSpinner = document.querySelector('.logInSpinner');
	const path = "/auth/login";

	submit (signInForm, logInVerify, logInButton, logInSpinner, checkSignInValidity, path);
}


// Submit Register Request Function

const registerSubmit = () => {
	const signUpForm = document.getElementById('signUpForm');
	const signUpVerify = document.getElementById('signUpVerify');
	const registerButton = document.querySelector('.signUpButton');
	const signUpSpinner = document.querySelector('.signUpSpinner');
	const path = "/auth/register";

	submit (signUpForm, signUpVerify, registerButton, signUpSpinner, checkSignUpValidity, path);

}

