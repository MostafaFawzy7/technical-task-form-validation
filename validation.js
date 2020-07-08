// Check Register Form Valdiation

// Regex patterns

const emailPattern = /^([a-zA-Z0-9.]{1,64})+\@([a-zA-Z0-9.]{1,64})+$/;
const userNamePattern = /[^A-Za-z0-9]+/g;

// Validation Of Each Field

const validateEachField = (allInvalidElems) => {
  allInvalidElems.forEach((elem) => {
    elem.addEventListener("input", function () {
      this.classList.remove("error");
      this.nextElementSibling.style.display = "none";
    });
  });
};

// Check Regsister Form Valdiation

const checkSignUpValidity = (formData) => {
  const fullName = formData.get("name");
  const email = formData.get("email");
  const userName = formData.get("username");
  const password = formData.get("password");

  if (!fullName) {
    document.querySelector(".errorName").style.display = "block";
    document.getElementById("name").classList.add("error");
  }

  if (!email || !emailPattern.test(email)) {
    document.querySelector(".errorEmail").style.display = "block";
    document.getElementById("email").classList.add("error");
  }

  if (!userName || userNamePattern.test(userName)) {
    document.querySelector(".errorUser").style.display = "block";
    document.getElementById("username").classList.add("error");
  }

  if (!password || password.length < 8) {
    document.querySelector(".errorPass").style.display = "block";
    document.getElementById("password").classList.add("error");
  }

  const allInvalidElems = document.getElementById("signUpForm").querySelectorAll(".error");

  if (allInvalidElems.length) {
    validateEachField(allInvalidElems);

    return;
  }

  return true;
};

// Check Login Form Valdiation

const checkSignInValidity = (formData) => {
  const logInEmail = formData.get("login");
  const logInPass = formData.get("pass");

  if (!logInEmail || !emailPattern.test(logInEmail)) {
    document.querySelector(".errEmail").style.display = "block";
    document.getElementById("logInEmail").classList.add("error");
  }

  if (!logInPass || logInPass.length < 8) {
    document.querySelector(".errPass").style.display = "block";
    document.getElementById("logInPass").classList.add("error");
  }

  const allInvalidElems = document.getElementById("signInForm").querySelectorAll(".error");

  if (allInvalidElems.length) {
    validateEachField(allInvalidElems);

    return;
  }

  return true;
};
