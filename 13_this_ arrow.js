const user= {
    username : "mukund jha",
    price: 999,

     WelcomeMessage:function()
    {
      
        console.log(`Username is ${ this.username } price is ${this.price}`)
        console.log(this)

    }
}

console.log(this)


function eat()
{

    eatname = "burger"
    eatname = "burger"
    console.log(this.username);
}

eat()

const chai = function()
{
   username = "mukundjha"

    console.log(this.username)

}
chai()

const chai1 = () =>{
    username = "mukundjha"
    console.log(this.username)
}

chai()

const hero = (num1, num2)=>{
    return num1+num2

}
console.log(hero(2,3))


const add = (num1,num2)=>(num1+num2)
console.log(add(2,3))

const addtwo = ()=> ({username:"mukund"})
console.log(addtwo())















