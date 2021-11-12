// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array of characters based on type.
var specialCharacters = [ "~","`","!","@","#","$","%","^","&","*","_","-","+","=","{","[","}","]","|",":",";","'","<",",",">",".","?"];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// open string  to eventually assign the generated password
var createPassword = "";

// password length, and the boolean variables 
// (special, numbers, lowercase, and uppercase) to know what to include in the password.
var pLength;
var specialFinal;
var numbersFinal;
var lowercaseFinal;
var uppercaseFinal;

// Function for getting the length the password
//  chosen by the user and a check to confirm 
//  its the valid amount of characters. (8-128)
function getpLength() {
  pLength = prompt(
    'How many characters would you like you password to be (must be between 8 and 128 characters)');

  if (pLength < 8) {
    alert('Invalid choice. Try again.')
    getpLength();
  } else if (pLength > 129) {
    alert('Invalid choice. Try again.')
    getpLength();
  } else if (isNaN(pLength)) {
    alert('Invalid choice. Try again.')
    getpLength();
  } else {
    alert("Now, Lets choose what type of characters we will be including in our password.");
  }
  
// Now we have the length of the password
  return pLength;
}

// Functions for each type of character to prompt the user of the character type they would like to include.
// Also returning the boolean values (TF).
function getSpecial () {
  specialFinal = confirm('Click Ok if you would like to include special characters');
  return specialFinal;
}

function getNumbers (){
  numbersFinal = confirm('Click Ok if you would like to include number characters');
  return numbersFinal;
}

function getLowercase (){
  lowercaseFinal = confirm('Click Ok if you would like to include lowercase characters');
  return lowercaseFinal;
}
function getUppercase (){
  uppercaseFinal = confirm('Click Ok if you would like to include uppercase characters');
  return uppercaseFinal;
}

// Declaring the previous functions to be used for generating the password. 
// Along with the empty string of "passwordCharacters" for the initial password before
// running the Math.floor(math.random * x) function to mix the characters 
function generatePassword() {
  getpLength();
  console.log(pLength);
  getSpecial();
  console.log(specialFinal);
  getNumbers();
  console.log(numbersFinal);
  getLowercase();
  console.log(lowercaseFinal);
  getUppercase();
  console.log(uppercaseFinal);

  var passwordCharacters = "";
  
  if (specialFinal) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  if (numbersFinal) {
    passwordCharacters = passwordCharacters.concat(numberCharacters);
  }
  if (lowercaseFinal) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
  }
  if (uppercaseFinal) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
  }

// for loop to run through each character function (if true or selected) until the 
// initial password length is chosen is reached.
  for (i = 0; i < pLength; i++) {
    createPassword = 
      createPassword + 
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
// returns the created password once loop is finished
    console.log(createPassword);
    return createPassword;
  
}

// Displays passwords 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


