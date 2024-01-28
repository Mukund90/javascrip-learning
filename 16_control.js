const user_name = "false"

if(user_name)
{
    console.log("code executed!")
}

const arr = [1 , 3 , 2 , 5 , 6 ]

for (const num  of arr) {
    console.log(arr)
}

let str1 = "mukundjha"
for (let i of str1) {
    console.log(str1)
    
}

//map

const create = new Map()
create.set('a',1)
create .set('b',3)

//console.log(create.get('b'))
console.log(`The size of the map is => ${create.size}`)
console.log(create.has('b'))

console.log(create.entries())

create.delete('b')
create.delete('a')

console.log(create.entries())

console.log(`The size of the map is => ${create.size}`)

for (const cut of create) {
    console.log(create)
    break
    
}


const user = new Map()

user.set("mukundjha" , 87)
user.set ("rakhi",76)

console.log(user.size)

for (const unit of user) {
    console.log(user)
    break
    
}

const short ={
    cpp : "c++",
    js : "javscript",
    py : "python"

}

for (const key in short) {
    console.log(`${key} shortcut is for ${short[key]}`)
}





