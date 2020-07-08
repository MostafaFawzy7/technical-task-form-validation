const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
const API_PATH_SIGNUP = "/auth/register";
const API_PATH_SIGNIN = "/auth/login";


document.addEventListener("DOMContentLoaded", function () {
  
  // Switch Between Registeration & Login Forms

	formSwitch();

  // Switch Between Registeration & Login Forms in Responsive

	formMobileSwitch();


  // Login Form Submission Request

  const signInForm = document.getElementById("signInForm");
  const logInVerify = document.getElementById("logInVerify");
  const logInButton = document.querySelector(".signInButton");
  const logInSpinner = document.querySelector(".logInSpinner");

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const formData = new FormData(signInForm);
    
    const isLoginValid = checkSignInValidity(formData);

	if (!isLoginValid) return; 

    logInSpinner.style.display = "block";

    fetch(`${API_URL}${API_PATH_SIGNIN}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        logInSpinner.style.display = "none";
        logInVerify.innerText = data.message;
        logInButton.style.cursor = "not-allowed";
        logInButton.disabled = true;
      })
      .catch((err) => console.error(err));
  });

  // Register Form Submission Request

  const signUpForm = document.getElementById("signUpForm");
  const signUpVerify = document.getElementById("signUpVerify");
  const registerButton = document.querySelector(".signUpButton");
  const signUpSpinner = document.querySelector(".signUpSpinner");

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);

    const isRegisterValid = checkValidity(formData);

    if (!isRegisterValid) return;

    signUpSpinner.style.display = "block";

    fetch(`${API_URL}${API_PATH_SIGNUP}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        signUpSpinner.style.display = "none";
        signUpVerify.innerText = data.message;
        registerButton.style.cursor = "not-allowed";
        registerButton.disabled = true;
      })
      .catch((err) => console.error(err));
  });
});
