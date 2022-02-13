// Assignment Code
var generateBtn = document.querySelector("#generate");

// define all characters
var chars1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars2 = "abcdefghijklmnopqrstuvwxyz";
var chars3 = "0123456789";
var chars4 = "~!@#$%^&*()_+{}:?><;.,";

// empty string to create charset and password variables
var charset = "";
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password generator logic
var generatePassword = function() {
 
  // check password length parameter
  var passLength = prompt("Select a password length: Mininum 8, Maximum 128.");
  if (passLength <= 7 || passLength >= 129) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  };
  if (isNaN(passLength)) {
    alert("Your response must be a number, please try again.");
    generatePassword();
  };
  // convert string to number
  passLength = parseInt(passLength);
  
  // check for uppercase
  var passTypeUpper = confirm("Do you want to include UPPERCASE letters?");
  // add uppercase to charset if wanted
  if (passTypeUpper) {
    charset += chars1
  };
  console.log(charset);
  // check for lowercase
  var passTypeLower = confirm("Do you want to include lowercase letters?");
  // add lowercase to charset if wanted
  if (passTypeLower) {
    charset += chars2
  };
  console.log(charset);
  // check for numbers
  var passTypeNum = confirm("Do you want to include numbers?");
  // add numbers to charset if wanted
  if (passTypeNum) {
    charset += chars3
  };
  console.log(charset);
  // check for specials
  var passTypeSpec = confirm("Do you want to include special characters?");
  // add specials to charset if wanted
  if(passTypeSpec) {
    charset += chars4
  };
  console.log(charset);
  if (!passTypeUpper && !passTypeLower && !passTypeNum && !passTypeSpec){
    alert("You must select at least one set of characters.");
    generatePassword();
  }

  // iterator to run through charset and select the password
  for (var i = 0; i < passLength; i++) {
    password += charset[Math.floor(Math.random() * charset.length)]
  };
  console.log(password);
  return password;
};
