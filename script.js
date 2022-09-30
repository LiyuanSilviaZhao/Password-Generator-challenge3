// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var result = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var num = prompt("How many characters would you like your password to contain?");
  if (num < 8 || num > 128){
    alert(" At least 8 characters and no more thatn 128 characters");
    num = prompt("How many characters would you like your password to contain?");
  }
  var specialChar = confirm("Click OK to confirm including special characters");
  var numChar = confirm("Click OK to confirm including numerica characters");
  var upCase = confirm("Click OK to confirm including upperercase characters");
  var loCase = confirm("Click OK to confirm including lowercase characters");

  var charPool = "";

  if (specialChar) {
    charPool = charPool.concat("!@#$%^&*_-+={[}]|:;<,>.?");
  } 
  if (numChar) {
    charPool = charPool.concat("0123456789");
  } 
  if (upCase) {
    charPool = charPool.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (loCase) {
    charPool = charPool.concat("abcdefghijklmnopqrstuvwxyz");
  }
  
  for(var i = 0; i < num; i++){
    console.log(charPool.length);
    var a = charPool.charAt(Math.floor(Math.random() * (charPool.length)));
    result = result.concat(a);
  }

  console.log("result is " + result);

  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
