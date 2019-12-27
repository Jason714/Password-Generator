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
var cardBody = document.querySelector(".card-body");

// Global variables for possible password characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*()+}{_=][';/.,]";
var number = "0123456789";

// Listener for click event to start the password creation process
generateEl.addEventListener("click", generatePassword);

// Function to get the password option that the user wants to use
function passwordOptions() {
  // Get the password length from the DOM and covert the string to an integer
  var length = parseInt(lengthEl.value);

  // Give an error message if the user chooses a length of less than 8 or more than 128
  if (length < 8 || length > 128) {
    var lengthMsg = document.createElement("div");
    lengthMsg.classList.add("error");
    lengthMsg.innerHTML = "Length must be between 8 - 128 characters!";
    optionsHeader.appendChild(lengthMsg);

    // Remove message after 1.5 seconds
    setTimeout(function() {
      lengthMsg.remove();
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
    var characterMsg = document.createElement("div");
    characterMsg.classList.add("error");
    characterMsg.innerHTML =
      "Must leave at least one character option checked!";
    optionsHeader.appendChild(characterMsg);

    // Remove message after 1.5 seconds
    setTimeout(function() {
      characterMsg.remove();
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

  return optionsChose;
}

//Function that will pull random characters from the strings
function getRandom(str) {
  var select = Math.floor(Math.random() * str.length);
  var output = str[select];
  return output;
}

//Function that will copy created password to the users clipboard
function copyToClipboard() {
  var textarea = document.createElement("textarea");
  var password = displayEl.innerText;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  // Give the user a meesage that their password has been copied to the clipboard
  var copyMsg = document.createElement("div");
  copyMsg.classList.add("success");
  copyMsg.innerHTML = "Your password has been copied to the clipboard!";
  cardBody.appendChild(copyMsg);

  // Remove message after 1.5 seconds
  setTimeout(function() {
    characterMsg.remove();
  }, 1500);
  return;
}

// Function that will take in the user chosen parameters and generate a new password
function generatePassword() {
  var options = passwordOptions();

  //Varible array that will contain the password that gets generated
  var result = [];

  //Variable array that will store which charater types the user chose
  var characterOptions = [];

  //Statement that will add upper case letters promted
  if (options.includeUpperCase) {
    characterOptions = characterOptions.concat(getRandom(upperCase));
  }

  //Statement that will add lower case letters if the user clicks OK when promted
  if (options.includeLowerCase) {
    characterOptions = characterOptions.concat(getRandom(lowerCase));
  }

  //Statement that will add special charaters if the user clicks OK when promted
  if (options.includeNumbers) {
    characterOptions = characterOptions.concat(getRandom(number));
  }

  //Statement that will add numbers if the user clicks OK when promted
  if (options.includeSpecialCharacters) {
    characterOptions = characterOptions.concat(getRandom(specialCharacter));
  }

  //Loop that will create the password using the users previously stored inputs
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(characterOptions);

    result.push(possibleCharacters);
  }

  //Turn the results of the function into a string
  return result.join("");
}
