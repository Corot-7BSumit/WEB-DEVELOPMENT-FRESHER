console.log("    This is to demonstrate Array-Methods in JS")
let arr = [4, 67, true, "Sumit"]
let i
console.log(arr)
arr.push(66) // to add an element to the array at the last pos.
console.log(arr)
arr.pop() // to remove the last element
console.log(arr)
arr.shift() // to remove first element
console.log(arr)
arr.unshift("Rajen") // to add an element to the array at the first pos.
console.log(arr)
for (i in arr) {
    console.log(arr[i])
}
function square(a) {
    return a * a
}
let ar = [1, 2, 3, 4]
let arNew = ar.map(square)
for (const element of arNew) {
    console.log(element)
}
let scores = [34, 45, 64, 43, 35, 78, 96, 100, 23, 88, 86, 76, 69]
function lt60(a){
    if(a < 60){
        return true;
    }
    else
        return false
}
console.log(scores.filter(lt60))
console.log(scores.includes(69))
console.log(scores.indexOf(69))
console.log(scores.join('-'))
