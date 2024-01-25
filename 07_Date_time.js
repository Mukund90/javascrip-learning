//Date

let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)
console.log(mydate.toDateString())


let mycreatedate = new Date(2024,1,23)
console.log(mycreatedate.toDateString())

let mydate1 = new Date("01-23-2024")
console.log(mydate1.toLocaleString())

let mydatestamp = Date.now()
console.log(mydatestamp)
console.log(mycreatedate.getTime())

