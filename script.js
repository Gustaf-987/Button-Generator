// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
  

const charRange = document.getElementById ("charRange")
const charNumber = document.getElementById ("charNumber")
const includeUppercase = document.getElementById ("includeUppercase")
const includeNumbers = document.getElementById ("includeNumbers")
const includeSymbols = document.getElementById ("includeSymbols")
const card = document.getElementById("passwordForm")
const password = document.getElementById("password")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
     arrayFromLowToHigh(91, 96)
    ).concat(
     arrayFromLowToHigh(123,126)
    )


charNumber.addEventListener("input", syncCharacterAmount)
charRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(i) {
  const value = i.target.value
  charNumber.value=value
  charRange.value=value
}

function generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

//    math not working
   const passwordChars = []
   for (let z= 0; z < charAmount; z++) {
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
       passwordChars.push(String.fromCharCode(characterCode))
   }
   return passwordChars.join("")
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let x= low; x <=high; x++) {
        array.push(x)
    }
    return array
}

// change to generate id?
card.addEventListener("submit", e=> {
  e.preventDefault()
  const charAmount= charNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols)
  password.innerText = password
})
