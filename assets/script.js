// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
// step 1. prompt user of password criteria
// - 8 - 128 charcter password
// - upper, lower, numeric, and special characters allowed
  let HowMany = prompt('How many characters would you like the password to be (up to 128)?');
    console.log(HowMany);
    if ( 8 <= HowMany > 128) {
        console.log('invalid');
    }

  let upper = confirm('Would you like uppercase characters in your password?');
    console.log(upper);
  let lower = confirm('Would you like lowercase characters in your password?');
    console.log(lower);
  let special = confirm('Would you like special characters in your password?');
    console.log(special);



// step 2. Validate the user chosen password contraints



// step 3. Generate Pass word


  return "Hello"

}
// Displays passwords
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
