const facebookuser={}
facebookuser.name = " mukund jha"
facebookuser.age = 87
facebookuser.IsLoggedIn = "yes"

console.log(facebookuser)

const username =  {     //nested objects
  name : " mukund jha",
  Fullname:{
    age : 90,
    Occupation:{
        Target: "softwaredevelopment"
    }
  }
}

//Acesss

console.log(username.Occupation)


const obj1 = {1:"mukund",2:67}
const obj2 = {1:56, 2:"hello"}


const obj3 = { ...obj2,...obj1}
console.log(obj3)

const myid = Symbol("key1")
const tinderuser= {
  
  fullname :"mukundjha",
  [myid] : "keys"

}

//console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('fullname'))


