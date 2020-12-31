var generateBtn = document.querySelector("#generate");
const charRange = document.getElementById ("charRange")
const charNumber = document.getElementById ("charNumber")
const includeUppercase = document.getElementById ("includeUppercase")
const includeNumbers = document.getElementById ("includeNumbers")
const includeSymbols = document.getElementById ("includeSymbols")
// const card = document.getElementById("passwordForm")
// const password = document.getElementById("password")

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


generateBtn.addEventListener("click", writePassword)
charNumber.addEventListener("input", syncCharacterAmount)
charRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(i) {
  const value = i.target.value
  charNumber.value=value
  charRange.value=value
}

// On button click, run this function
function generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    const charAmount = charNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

//    math not working
   const passwordChars = []
   for (let z= 0; z < charAmount; z++) {
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
       passwordChars.push(String.fromcharCode(characterCode))
   }
   return passwordChars.join("")
}


// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

//   Loops through possible character choices
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let x= low; x <=high; x++) {
        array.push(x)
    }
    return array
}
