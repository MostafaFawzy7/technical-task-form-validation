const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
const API_PATH_SIGNUP = "/auth/register";
const API_PATH_SIGNIN = "/auth/login";

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

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(signInForm);

    fetch(`${API_URL}${API_PATH_SIGNIN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        logInVerify.innerText = data.message;
      });
  });
});
