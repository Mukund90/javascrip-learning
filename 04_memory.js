//stack => primitive dtatype
//heap => non primitive datatype


//satck memory=> me tumhea copy millega 
//heap memory=> me tumhea reference millega

let userone = {
    email : "jhamukund9866@gmail.com"
 
}

let anotheruser = userone

 anotheruser.email = " jhamukund986@gmail.com"

console.table([userone , anotheruser])


