console.log("JavaScript Objects")
let key = "yoe"
let obj = {
    name: "John Doe", salary: 50000, language: "JavaScript", isAdmin: false, "father name": "Biden Doe", "yoe" : 6
}
console.log(obj)
obj.name = "Sumit Bag"
console.log(obj)
console.log(obj["father name"])
obj["father name"] = "Rajen Bag"
console.log(obj)
console.log(obj[name]) // doesn't work
console.log(obj.name)
console.log(obj[key])
// console.log(obj[yoe]) // doesn't work
obj.friend = "harry"
console.log(obj.friend)
delete obj.friend
console.log(obj)
