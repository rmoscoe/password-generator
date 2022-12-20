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
  const specials = ["@", "%", "+", "\\", "/", "\'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "\`", "-", "_", "."];

  //The following variables store the user's choices about the characters to be included in the password
  let pwLength = Number(prompt("Please choose a password length between 8 and 128 characters."));
  console.log(pwLength);
  console.log(Number(pwLength));
  let lowerCase = false;
  let upperCase = false;
  let numeric = false;
  let special = false;

  //Validate the user's chosen password length
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = Number(prompt("Please choose a password length between 8 and 128 characters."));
    console.log(pwLength);
    console.log(Number(pwLength));
  }
}