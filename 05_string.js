let account_name ="mukundjha"
let account_balance ="700000"

console.log("My account_name is ->"+ " "+account_name)
console.log("My account_balance is->"+" "+account_balance)

console.log(`My account_name is ->${account_name} And my balance is ->${account_balance}`)


//note=>
//1.``=>backticks

const sc1 = new String("mukund jha")

console.log(sc1)

console.log(sc1[0])

console.log(sc1[1])

console.log(sc1[2])

console.log(sc1[3])

console.log(sc1[4])

console.log(sc1[6])

const newstring  = sc1.substring(0,4)
console.log(`The substring of sc1 is ->${newstring}`)

const newstr = sc1.slice(-8,4)
console.log(`The slice of the string is ->${newstr} `)

console.log(`The length of the string is -> ${sc1.length}`)

console.log(`The character is at indexof ->${sc1.charAt(9)}`)

console.log(`The Uppercase  of the string is -> ${sc1.toUpperCase()}`)

console.log(`The Lowercase of the string is -> ${sc1.toLowerCase()}`)

console.log(`The concat of the string is -> is -> ${sc1.concat(" is good boy ")}`)

let newcontainer = " mukund"

console.log(newcontainer)
console.log("is \"Mukund\" is present in string or not?->"+ " "+newcontainer.includes('mukund'))
console.log("The trim of the string is ->"+""+newcontainer.trim())


let mood = "Happy"
console.log(`The life is very  ->${mood.repeat(4)}`)
