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
  
// sync char inputs
const charRange = document.getElementById ("charRange")
const charNumber = document.getElementById ("charNumber")
const includeUppercase = document.getElementById ("includeUppercase")
const includeNumbers = document.getElementById ("includeNumbers")
const includeSymbols = document.getElementById ("includeSymbols")

charNumber.addEventListener("input", syncCharacterAmount)
charRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(i) {
  const value = i.target.value
  charNumber.value=value
  charRange.value=value
}

// Prevent page refresh on submit
const card = document.getElementById("passwordForm")

card.addEventListener("submit", e=> {
  e.preventDefault()
  const charAmount= charNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols)
})
