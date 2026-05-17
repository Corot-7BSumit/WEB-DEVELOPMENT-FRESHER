console.log("This is to demonstrate string methods in JS.")
let name = "Sumit"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
let str = "     Sumit is a good boy.   Sumit   "
console.log(str)
console.log(str.trim())
console.log(str.includes("good")) // true
console.log(str.includes("girl")) // false
console.log(str.indexOf(name))
console.log(str.lastIndexOf(name))
name1 = str.slice(5,10)
console.log(name1) // substring() is similar to slice() but substring() "can't" accept negative indices whereas slice "can".
console.log(str.replace("Sumit", "S u m i t"))
let msg = "apple apple apple"
console.log(msg.replace("apple", "mango"))
console.log(msg.replace(/apple/g, "mango")) // to replace all occurences of the "to be replaced string"
let data = "HTML, CSS, JS, TAILWINDCSS, NODEJS, REACTJS"
let parts = data.split(',')
console.log(parts)
