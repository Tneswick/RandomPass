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
  var passLength = 0;    
  // check password length parameter
  passLength = prompt("Select a password length: Mininum 8, Maximum 128.")

  if (passLength >= 8 && passLength <= 128) {
  console.log(passLength);
  } else {
    alert("Please be sure your response is a number between 8 and 128.")
    return "";
  }
  
  // check for uppercase
  var passTypeUpper = confirm("Do you want to include UPPERCASE letters?")
  // add uppercase to charset if wanted
  if (passTypeUpper) {
    charset += chars1
  }
  

  // check for lowercase
  var passTypeLower = confirm("Do you want to include lowercase letters?")
  // add lowercase to charset if wanted
  if (passTypeLower) {
    charset += chars2
  }
  

  // check for numbers
  var passTypeNum = confirm("Do you want to include numbers?")
  // add numbers to charset if wanted
  if (passTypeNum) {
    charset += chars3
  }
  

  // check for specials
  var passTypeSpec = confirm("Do you want to include special characters?")
  // add specials to charset if wanted
  if(passTypeSpec) {
    charset += chars4
  }
  

  if (!passTypeUpper && !passTypeLower && !passTypeNum && !passTypeSpec){
    alert("You must select at least one set of characters.")
    return "";
  }

  // iterator to run through charset and select the password
  for (var i = 0; i < passLength; i++) {
    password += charset[Math.floor(Math.random() * charset.length)]
  };

  return password;
}
