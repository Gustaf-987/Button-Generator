const charRange = document.getElementById("charRange")
const charNumber = document.getElementById("charNumber")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("password")
const includeUppercaseElement = document.getElementById ("includeUppercase")
const includeNumbersElement = document.getElementById ("includeNumbers")
const includeSymbolsElement = document.getElementById ("includeSymbols")

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

// syncing character slider and selection box
charRange.addEventListener("input", syncCharacterAmount)
charNumber.addEventListener("input", syncCharacterAmount)

// When clicking red button, run "generate password" fuction
form.addEventListener("submit", e=> {
    e.preventDefault()
    const characterAmount = charNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters =[]
    for (let i= 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))}

    return passwordCharacters.join("")     
}

// Pulling numbers/letters/characters from ASCII
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let y= low; y <= high; y++) {
        array.push(y)
    }
    return array
}

function syncCharacterAmount(x) {
    const value = x.target.value
    charRange.value = value
    charNumber.value = value

}

