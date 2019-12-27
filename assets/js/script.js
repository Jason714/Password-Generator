// Global variables to reference DOM elements
var displayEl = document.querySelector("#display");
var lengthEl = document.querySelector("#length");
var upperCaseEl = document.querySelector("#uppercase");
var lowerCaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var specialCharactersEl = document.querySelector("#special-characters");
var generateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");
var optionsHeader = document.querySelector(".options-header");

// Global variables for possible password characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*()+}{_=][';/.,]";
var number = "0123456789";

// Listener for click event to start the password creation process
generateEl.addEventListener("click", passwordOptions);

// Function to get the password option that the user wants to use
function passwordOptions() {
  // Get the password length from the DOM and covert the string to an integer
  var length = parseInt(lengthEl.value);
  console.log(length);
  // Give an error message if the user chooses a length of less than 8 or more than 128
  if (length < 8 || length > 128) {
    var msg = document.createElement("div");
    msg.classList.add("error");
    msg.innerHTML = "Length must be between 8 - 128 characters!";
    optionsHeader.appendChild(msg);
    setTimeout(function() {
      msg.remove();
    }, 1500);
    return;
  }

  // Get booleans for charater types that the user wants to include from the DOM
  var hasUpper = upperCaseEl.checked;
  var hasLower = lowerCaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSpecialCharacters = specialCharactersEl.checked;

  // If statement to make sure that the user chose at least one character type
  if (
    hasUpper === false &&
    hasLower === false &&
    hasNumber === false &&
    hasSpecialCharacters === false
  ) {
    // Give the user an error message if no charater types are chose
    var msg = document.createElement("div");
    msg.classList.add("error");
    msg.innerHTML = "Must leave at least one character option checked!";
    optionsHeader.appendChild(msg);
    setTimeout(function() {
      msg.remove();
    }, 1500);
    return;
  }

  // Object that will store the parameters that the user has chose
  var optionsChose = {
    length: length,
    includeUpperCase: hasUpper,
    includeLowerCase: hasLower,
    includeNumbers: hasNumber,
    includeSpecialCharacters: hasSpecialCharacters
  };
  console.log(optionsChose);
  return optionsChose;
}

function getRandom(str) {
  var select = Math.floor(Math.random() * str.length);
  var output = str[select];
  return output;
}
