// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("Generating my password!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){

// // Input variables:
// var confirmSpecialCharacters;
// var confirmNumbers;
// var confirmLowerLetters;
// var confirmUpperLetters;

var passwordEl = document.querySelector("#password");

// Possible password character options:
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "|",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allCharacters = specialCharacters + numbers + lowerLetters + upperLetters
var spNumLow = specialCharacters + numbers + lowerLetters
var spNumUp = specialCharacters + numbers + upperLetters
var spLowUp = specialCharacters + lowerLetters + upperLetters
var numLowUp = numbers + lowerLetters + upperLetters
var spNum = specialCharacters + numbers
var spLow = specialCharacters + lowerLetters
var spUp = specialCharacters + upperLetters
var numLow = numbers + lowerLetters
var numUp = numbers + upperLetters
var lowUp = lowerLetters + upperLetters


// Event listener for generate button
// generateBtn.addEventListener("click", writePassword) {
//   var characters =
//     (confirmSpecialCharacters === true) ? characters += specialCharacters : "";
//     (confirmNumberCharacters === true) ? characters += numbers : "";
//     (confirmLowerCharacters === true) ? characters += lowerLetters : "";
//     (confirmUpperCharacters === true) ? characters += upperLetters : "";
//     generateBtn.value = writePassword(userPWLength.value, characters);
// }

// User clicks "Generate Password" button to start generate password functiom:
// function promptUser(){
// Prompt the user for password length:
  var passwordLength = prompt("How many characters would you like in your password? The number of characters in your password must be between 8 and 128.");

  var userPWLength = parseInt(passwordLength)

// Confirm password is a number between 8 and 128:
    if(userPWLength >= 8 && userPWLength <=128){
      alert("Your password will have " + userPWLength + " characters.")
    } else {
      alert("You must enter a number to generate password length. Refresh page to try again.")
    }

// Boolean prompts to confirm if the following 4 character types are permitted in users password:
  // 1. Special characters
  var confirmSpecialCharacters = confirm("Are special characters okay in your password?");

  // .2 Numbers?
  var confirmNumberCharacters = confirm("Are numeric characters okay in your password?");

  // 3. Lower case?
  var confirmLowerCharacters = confirm("Are lowercase characters okay in your password?");

  // 4. Upper case?
  var confirmUpperCharacters = confirm("Are uppercase characters okay in your password?");


// If user answers false for all 4 character sets:
if (!confirmSpecialCharacters && !confirmNumberCharacters && !confirmLowerCharacters && !confirmUpperCharacters) {
  alert("You must choose at least one character type.");
}




// Conditionals for user character selections:

// 4 true options:
if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === true) && (confirmLowerCharacters === true) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters.charAt(character, character + 1);
  }
}
// 3 true, special characters false:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === true) && (confirmLowerCharacters === true) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * numLowUp.length);
    newPassword += numLowUp.charAt(character, character + 1);
  }
}
// 3 true, numbers false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === false) && (confirmLowerCharacters === true) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spLowUp.length);
    newPassword += spLowUp.charAt(character, character + 1);
  }
}
// 3 true, lowerLetters false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === true) && (confirmLowerCharacters === false) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spNumUp.length);
    newPassword += spNumUp.charAt(character, character + 1);
  }
}
// 3 true, upperLetters false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === true) && (confirmLowerCharacters === true) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spNumLow.length);
    newPassword += spNumLow.charAt(character, character + 1);
  }
}
// 2 true (Special Characters, Numbers), 2 false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === true) && (confirmLowerCharacters === false) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spNum.length);
    newPassword += spNum.charAt(character, character + 1);
  }
}
// 2 true (Special Characters, lowerLetters), 2 false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === false) && (confirmLowerCharacters === true) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spLow.length);
    newPassword += spLow.charAt(character, character + 1);
  }
}
// 2 true (Special Characters, UpperLetters), 2 false:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === false) && (confirmLowerCharacters === false) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * spUp.length);
    newPassword += spUp.charAt(character, character + 1);
  }
}
// 2 true (Numbers, lowerLetters), 2 false:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === true) && (confirmLowerCharacters === true) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * numLow.length);
    newPassword += numLow.charAt(character, character + 1);
  }
}
// 2 true (Numbers, upperLetters), 2 false:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === true) && (confirmLowerCharacters === false) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * numUp.length);
    newPassword += numUp.charAt(character, character + 1);
  }
}
// 2 true (lowerLetters, upperLetters), 2 false:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === false) && (confirmLowerCharacters === true) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * LowUp.length);
    newPassword += LowUp.charAt(character, character + 1);
  }
}
// 1 true specialCharacters:
else if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === false) && (confirmLowerCharacters === false) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * specialCharacters.length);
    newPassword += specialCharacters.charAt(character, character + 1);
  }
}
// 1 true numbers
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === true) && (confirmLowerCharacters === false) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * numbers.length);
    newPassword += numbers.charAt(character, character + 1);
  }
}
// 1 true lowerLetters:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === false) && (confirmLowerCharacters === true) && (confirmUpperCharacters === false)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * lowerLetters.length);
    newPassword += lowerLetters.charAt(character, character + 1);
  }
}
// 1 true upperLetters:
else if ((confirmSpecialCharacters === false) && (confirmNumberCharacters === false) && (confirmLowerCharacters === false) && (confirmUpperCharacters === true)) {
  for (i=0; i < userPWLength; i++) {
    let character = Math.floor(Math.random() * upperLetters.length);
    newPassword += upperLetters.charAt(character, character + 1);
  }
}

  return newPassword;
})

// function writePassword(userPWLength, characters){
//   var password = "";

//   for(var i = 0; i < userPWLength; i++){
//     password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }

//   return password;
// }


// Instructor provided:

// var allCharacters = [specialCharacters, numbers, lowerLetters, upperLetters]

// if ((confirmSpecialCharacters === true) && (confirmNumberCharacters === true) && (confirmLowerCharacters === true) && (confirmUpperCharacters === true)) {
//   for (i = 0; i < userPWLength; i++) {
//     let character = Math.floor(Math.random() * allCharacters.length);
//     newPassword += allCharacters.charAt(character, character + 1);
// }

// function writePassword(userPWLength, allCharacters) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);