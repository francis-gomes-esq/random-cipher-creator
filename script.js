// Array of special characters to be included in password
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.',
]

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
	var passwordLength = prompt('Please enter the length of your password')
	// console.log(passwordLength)
	if (passwordLength < 8 || passwordLength > 128) {
		alert('Please enter a number between 8 and 128')
		return generatePassword()
	}
	// console.log('Valid number')
	var options = getPasswordOptions()
	console.log(options)

	var allCharacters = []
	var password = ''

	if (options.hasLowercase) {
		allCharacters = allCharacters.concat(lowerCasedCharacters)
		password += getRandom(lowerCasedCharacters)
	}

	if (options.hasUppercase) {
		allCharacters = allCharacters.concat(upperCasedCharacters)
		password += getRandom(upperCasedCharacters)
	}

	if (options.hasNumeric) {
		allCharacters = allCharacters.concat(numericCharacters)
		password += getRandom(numericCharacters)
	}

	if (options.hasSpecial) {
		allCharacters = allCharacters.concat(specialCharacters)
		password += getRandom(specialCharacters)
	}

	for (var i = password.length; i < passwordLength; i++) {
		password += getRandom(allCharacters)
	}

	return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	var password = generatePassword()
	var passwordText = document.querySelector('#password')

	passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
