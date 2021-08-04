// Assignment Code
let generateBtn = document.querySelector("#generate");
// Added specified characters for functions
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];
let lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let password = "";

  // Created if statement for all the logic
  let charCount = charCheck();
  if (charCount) {
    // build list of possible options for passwords generated
    let options = buildOptions();
    if (options.length != 0) {
      // loop through number of characters expected and grab random option from criteria list
      for (let i = 0; i < charCount; i++) {
        let index = Math.floor(Math.random() * options.length);
        password = password + options[index];
      }
    }
  }
  return password;
}

// <-------------------------------Prompt/Alerts for random password chosen criteria in sequential order ----------------------------->
// If statement for prompt and alert length option
function charCheck() {
  let num = prompt("Preferred password length between 8 - 128?");
  let numberChar;
  if (num) {
    num = parseInt(num);
    if (num >= 8 && num <= 128) {
      numberChar = num;
    } else {
      alert("Length of the password must be  between 8 - 128");
      numberChar = charCheck();
    }
  }
  return numberChar;
}

// if statement and function for criteria character options for the user
function buildOptions() {
  let containsLowercase = confirm(
    "Allow lowercase characters?"
  );
  let containsUppercase = confirm(
    "Allow uppercase characters?"
  );
  let containsNumeric = confirm(
    "Allow numeric characters?"
  );
  let containsSpecial = confirm(
    "Allow special characters?"
  );

  let options = [];

  if (
    containsLowercase ||
    containsUppercase ||
    containsNumeric ||
    containsSpecial
  ) {
    // build list of valid options to generate password from
    if (containsLowercase) {
      options = options.concat(lowerCaseChar);
    }

    if (containsUppercase) {
      options = options.concat(upperCaseChar);
    }

    if (containsNumeric) {
      options = options.concat(numbers);
    }

    if (containsSpecial) {
      options = options.concat(specialChar);
    }
  } else {
    // Allow user to try questions again or exit password generation
    let tryAgain = confirm(
      "Requires at least one criteria for random password generate!"
    );
    if (tryAgain) {
      options = buildOptions();
    }
  }
  return options;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

