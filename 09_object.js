//singelton =>jo literals se object bantea hsii usssea singelton nhi kahetea haii;
//Object.create//
  const mysum = Symbol("key1")
const person = {
    "Fullname": " mukund jha",
     [mysum]: "key1",
     age : 28,
     profession: "software development",
     email:"jhamukund986@gmal.com",
     isloggedin: false,
   
}

person.email = "mukund@345gmail.com"
console.log(person["email"])
console.log(person["Fullname"])
console.log( typeof person[mysum])

person.greeting = function()
{
    console.log("Hello js user!")
}

person.greeting2 = function()
{
    console.log(`Hello js user ${this.Fullname}`)

}
console.log(person.greeting())
console.log(person.greeting2())

Object.freeze(person)
















