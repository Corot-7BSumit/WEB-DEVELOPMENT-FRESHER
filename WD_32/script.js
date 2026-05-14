console.log("Functions in Js")
function aPlusOne(a, b) {
    let sum = a + b
    let avg = sum / 2
    return (++avg)
}
let a = 5, b = 10
averagePlusOne = aPlusOne(a, b)
console.log(averagePlusOne)
const sum = function (a, b) {
    let s = a + b
    console.log(s)
}
let x = 597, y = 1299
sum(x, y)
sum(2, 25)
const prod =(a,b) => {
    return a*b
}
console.log(prod(56,3))