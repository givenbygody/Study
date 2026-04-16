//Declaring Numbers Data Types 

let age = 23
const gravity = 9.81 //earth gravity  in m/s2
let mass = 70 //mass in Kilograms

//const PI = 3.14 //geometrical constant

console.log(`${age},${gravity},${mass},`)

// Math Object  
// Math.PI
const PI = Math.PI
console.log(PI.toFixed(5))// if you want to see only 2 numbers afte , use toFixed
//Math.round 
console.log(Math.round(9.81))

console.log(Math.floor(PI)) // 3 roundig down (округление в меньшуб строну) 
console.log(Math.ceil(PI)) // 4 rounding up (округление в большую сторону)

console.log(Math.min(-22,-2,2,4,5,6)) // 

const randNum = Math.random()
console.log(randNum)

const num = (Math.random() * 11)
console.log(num)

Math.cos(60)

// String Concatination
let firsName = 'Bohdan'
let space = ' '
let lastName = 'Kuchuk'
let fullName = firsName + space + lastName
let persoInfo = `i am ${fullName}. and i am ${age} years old `
console.log(persoInfo) 

let a = 2 
let b = 3
console.log(`${a} is a greater then ${b}: it is ${a > b}`)

// string lenth 
let  js = 'JavaScript '
console.log(js.length) // 11

// In programming we start counting from 0, so the first letter of the string is at index 0, the second letter is at index 1 and so on.

let string = 'JavaScript'
let firstLetter = string[4]
console.log(firstLetter)

let lastIndex = string.lenght 

//string at() method returns the character at a specified index in a string:

let n = "Bohdan"
let letter = n.at(5)
console.log(letter)

// codePointAt() method returns the Unicode of the character at the specified index in a string:

let text = "HELLO WORLD"
let code = text.codePointAt(0)
console.log(code)

// toUpperCase() method converts a string to uppercase letters:
let upperCaseName = n.toUpperCase()
console.log(upperCaseName) //BOHDAN 

//toLowerCase() method converts a string to lowercase letters:

let lowerCaseWord = n.toLowerCase()
console.log(lowerCaseWord) //bohdan

// substr() It takes two arguments, the starting index and number of characters to slice.

console.log(string.substr(0, 4)) //Java

//substring() It takes two arguments, the starting index and the ending index (not included).

console.log(string.substring(0, 4)) //Java

// split() method splits a string into an array of substrings based on a specified separator:

let names = 'Bohdan, Max , Lena'
let namesList = names.split(',') // split by comma
console.log(namesList) // ['Bohdan', ' Max ', ' Lena']

let nametoArrey = n.split()
console.log(nametoArrey) // ['Bohdan']

let nameToLetterArrey = n.split('') 
console.log(nameToLetterArrey) // ['B', 'o', 'h', 'd', 'a', 'n']
let nLastLetter = n[5]
console.log(nLastLetter) //n

// trim() method removes whitespace from both ends of a string:

let nameWithSpace = '   Bohdan'
console.log(nameWithSpace.trim()) // 'Bohdan'

// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let stringIsExist = "i love JS"

console.log (stringIsExist.includes('i')) //true
console.log (stringIsExist.includes('love')) //true
console.log (stringIsExist.includes('python')) //false

//replace(): takes as a parameter the old substring and a new substring. 
//string.replace(oldsubstring, newsubstring)

let stringToReplace = "I love JavaScript"
console.log(stringToReplace.replace('I', 'Gays'))

//indexOf()Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

//string.indexOf(substring)

let stringIndexOf = "I love JavaScript"

console.log(stringIndexOf.indexOf('JavaScript')) // 7
console.log(stringIndexOf.indexOf('Python')) // -1

//concat(): it takes many substrings and joins them.
//string.concat(substring, substring, substring)

let stringConcat = 'I love'
let stringConcat2 = 'JavaScript'
let stringConcat3 = 'and Python'

console.log (stringConcat.concat(), stringConcat2.concat(), stringConcat3.concat()) 

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

