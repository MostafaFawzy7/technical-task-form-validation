const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
const API_PATH_SIGNUP = "/auth/register";
const API_PATH_SIGNIN = "/auth/login";

// Implementation Of Checking Validation

function checkValidity(formData) {
  const fullName = formData.get("name");
  const email = formData.get("email");
  const userName = formData.get("username");
  const password = formData.get("password");

  if (!fullName) {
    document.querySelector(".errorName").style.display = "block";
    document.getElementById("name").classList.add("error");
  }

  if (!email) {
    document.querySelector(".errorEmail").style.display = "block";
    document.getElementById("email").classList.add("error");
  }

  if (!userName) {
    document.querySelector(".errorUser").style.display = "block";
    document.getElementById("username").classList.add("error");
  }

  if (!password) {
    document.querySelector(".errorPass").style.display = "block";
    document.getElementById("password").classList.add("error");
  }

  const allInvalidElems = document
    .getElementById("signUpForm")
    .querySelectorAll(".error");
  if (allInvalidElems.length) {
    allInvalidElems.forEach((elem) => {
      elem.addEventListener("input", function () {
        this.classList.remove("error");
        this.nextElementSibling.style.display = "none";
      });
    });

    return;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  // Register/Login Switching Functionality (Desktop)

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  // Register/Login Switching Functionality (Mobile)

  const mobLogIn = document.querySelector(".mobLogIn");
  const mobRegister = document.querySelector(".mobRegister");
  const signInContainer = document.querySelector(".sign-in-container");
  const signUpContainer = document.querySelector(".sign-up-container");

  mobLogIn.addEventListener("click", () => {
    signUpContainer.style.display = "none";
    signInContainer.style.display = "block";
  });

  mobRegister.addEventListener("click", () => {
    signInContainer.style.display = "none";
    signUpContainer.style.display = "block";
  });

  // Login Form Submission Request

  const signInForm = document.getElementById("signInForm");
  const logInVerify = document.getElementById("logInVerify");
  const logInButton = document.querySelector(".signInButton");
  const logInSpinner = document.querySelector(".logInSpinner");

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    logInSpinner.style.display = "block";

    const formData = new FormData(signInForm);

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
