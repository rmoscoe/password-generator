// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //The following arrays list the available characters in each category
  const lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specials = ["@", "%", "+", "\\", "/", "\'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "\)", "{", "}", "[", "]", "~", "\`", "-", "_", "."];

  //The following variables store the user's choices about the characters to be included in the password
  let pwLength = Number(prompt("Please choose a password length between 8 and 128 characters."));
  let lowerCase = false;
  let upperCase = false;
  let numeric = false;
  let special = false;

  //Validate the user's chosen password length
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = Number(prompt("Please choose a password length between 8 and 128 characters."));
  }

  //Enable the user to select the type(s) of characters to include and validate the selection(s)
  while (lowerCase === false && upperCase === false && numeric === false && special === false) {
    lowerCase = confirm("Click OK to include lower case letters in your password; otherwise click Cancel.");
    upperCase = confirm("Click OK to include upper case letters in your password; otherwise click Cancel.");
    numeric = confirm("Click OK to include numbers (0-9) in your password; otherwise click Cancel.");
    special = confirm("Click OK to include special characters (\"@%+\\/\'!#$^?:,(){}[]~\`-_.); otherwise click Cancel.");
    if (lowerCase === false && upperCase === false && numeric === false && special === false) {
      alert("You must select at least one type of character to include in your password.");
    }
  }

  //Assemble array of characters to allow in password
  let allCharacters = [];

  if (lowerCase) {
    for (let i = 0; i < lcLetters.length; i++) {
      allCharacters.push(lcLetters[i]);
    }
  }

  if (upperCase) {
    for (let i = 0; i < ucLetters.length; i++) {
      allCharacters.push(ucLetters[i]);
    }
  }

  if (numeric) {
    for (let i = 0; i < nums.length; i++) {
      allCharacters.push(nums[i]);
    }
  }

  if (special) {
    for (let i = 0; i < specials.length; i++) {
      allCharacters.push(specials[i]);
    }
  }
  
  //Generate and return the password
  let pwArray = [];
  for (let i = 0; i < pwLength; i++) {
    pwArray.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }

  return pwArray.join("");
}  