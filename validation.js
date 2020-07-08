
// Implementation Of Checking Register Form Validation

function checkValidity(formData) {
	const fullName = formData.get('name');
	const email = formData.get('email');
	const userName = formData.get('username');
	const password = formData.get('password');

    // Validate Full Name
	if(!fullName) {
		document.querySelector('.errorName').style.display = 'block';
		document.getElementById('name').classList.add('error');
	}

    // Validate Email
	const emailPattern = /^([a-zA-Z0-9.]{1,64})+\@([a-zA-Z0-9.]{1,64})+$/;
    
    if(!email || !emailPattern.test(email)) {
		document.querySelector('.errorEmail').style.display = 'block';
		document.getElementById('email').classList.add('error');
	}

    // Validate User Name
	const userNamePattern = /[^A-Za-z0-9]+/g;
    
    if(!userName || userNamePattern.test(userName)) {
		document.querySelector('.errorUser').style.display = 'block';
		document.getElementById('username').classList.add('error');
	}

    // Validate Password
	if(!password || password.length < 8) {
		document.querySelector('.errorPass').style.display = 'block';
		document.getElementById('password').classList.add('error');
	}

	const allInvalidElems = document.getElementById('signUpForm').querySelectorAll('.error');
    
    if (allInvalidElems.length) {
		allInvalidElems.forEach(elem => {
			elem.addEventListener('input', function () {
				this.classList.remove('error');
				this.nextElementSibling.style.display = 'none';
			})
		});

		return;
	}

	return true;
}


// Implementation Of Checking Login Form Validation

function checkSignInValidity(formData) {
	const logInEmail = formData.get('login');
    const logInPass = formData.get('pass');;

    const emailPattern = /^([a-zA-Z0-9.]{1,64})+\@([a-zA-Z0-9.]{1,64})+$/;
	if(!logInEmail || !emailPattern.test(logInEmail)) {
		document.querySelector('.errEmail').style.display = 'block';
		document.getElementById('logInEmail').classList.add('error');
	}

	if(!logInPass || logInPass.length < 8) {
		document.querySelector('.errPass').style.display = 'block';
		document.getElementById('logInPass').classList.add('error');
	}

	const allInvalidElems = document.getElementById('signInForm').querySelectorAll('.error');
	if (allInvalidElems.length) {
		allInvalidElems.forEach(elem => {
			elem.addEventListener('input', function () {
				this.classList.remove('error');
				this.nextElementSibling.style.display = 'none';
			})
		});

		return;
	}

	return true;
}
