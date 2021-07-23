// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added specified characters for functions
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";

  // Created if statement for all the logic
  var characterCount = characterCheck();
  if (characterCount) {
    // build list of possible options for passwords generated
    var options = buildOptions();
    if (options.length != 0) {
      // loop through number of characters expected and grab random option from criteria list
      for (var i = 0; i < characterCount; i++) {
        var index = Math.floor(Math.random() * options.length);
        password = password + options[index];
      }
    }
  }
  return password;
}

// <-------------------------------Prompt/Alerts for random password chosen criteria in sequential order ----------------------------->
// If statement for prompt and alert length option
function characterCheck() {
  var num = prompt("Preferred password length between 8 - 128?");
  var numberCharacters;
  if (num) {
    num = parseInt(num);
    if (num >= 8 && num <= 128) {
      numberCharacters = num;
    } else {
      alert("Length of the password must be a between 8 - 128");
      numberCharacters = characterCheck();
    }
  }
  return numberCharacters;
}

// if statement and function for criteria character options for the user
function buildOptions() {
  var containsLowercase = confirm(
    "Allow lowercase characters?"
  );
  var containsUppercase = confirm(
    "Allow uppercase characters?"
  );
  var containsNumeric = confirm(
    "Allow numeric characters?"
  );
  var containsSpecial = confirm(
    "Allow special characters?"
  );

  var options = [];

  if (
    containsLowercase ||
    containsUppercase ||
    containsNumeric ||
    containsSpecial
  ) {
    // build list of valid options to generate password from
    if (containsLowercase) {
      options = options.concat(lowercaseCharacters);
    }

    if (containsUppercase) {
      options = options.concat(uppercaseCharacters);
    }

    if (containsNumeric) {
      options = options.concat(numbers);
    }

    if (containsSpecial) {
      options = options.concat(specialCharacters);
    }
  } else {
    // Allow user to try questions again or exit password generation
    var tryAgain = confirm(
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
