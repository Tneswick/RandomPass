// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {
  var chars1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var chars2 = chars1.toLowerCase;
  var chars3 = "0123456789";
  var chars4 = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"'
  var passLength = prompt("Select a password length: Mininum 8, Maximum 128.");
  passLength = parseInt(passLength);
  var passTypeUpper = confirm("Do you want to include UPPERCASE letters?");
  if (passTypeUpper) {
    charset = chars1
  };
  var passTypeLower = confirm("Do you want to include lowercase letters?");
  if (passTypeLower) {
    charset = charset + chars2
  };
  var passTypeNum = confirm("Do you want to include numbers?");
  if (passTypeNum) {
    charset = charset + chars3
  }
  var passTypeSpec = confirm("Do you want to include special characters?");
    if(passTypeSpec) {
      charset = charset + chars4
    }
  console.log(charset)
  return passLength + passTypeUpper + passTypeLower + passTypeNum + passTypeSpec;
};