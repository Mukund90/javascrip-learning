 function primenumber(a,b){ //[parameters]
    return a*b;
}

let x =  primenumber(2,3)  //arguments

console.log(x)



function instagram_user(username = "anyone")
{
    if(username === undefined)
    {
        console.log("please Enter a valid username->")
        return 

    }

   return `${username} just Logged in !!`

}

console.log(instagram_user())





function calculatecartprice(...num1)
{
  return num1
}

console.log(calculatecartprice(200,900,788,600))


const user={
   user_name : "mukund jha",
   user_password : 789,
 

}

function handelanyobject(anyobject)
{

    console.log(`username is ->${anyobject.user_name} and the user_password is->${anyobject.user_password}`)

}

console.log(handelanyobject(user))


const myarray =["mukund jha",90,78]
myarray.sort()
console.log(myarray)

function returnarray(anyarray)
{
    return anyarray[2]
}











