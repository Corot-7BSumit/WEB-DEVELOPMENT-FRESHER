const func1 = async() => {
    return "I am good."
}

console.log("Hey I am this.")

const promise1 = await func1()
console.log(promise1)

// const promise1 = func1()
// promise1.then((v) => {
//     console.log(v)
// })

console.log("Hey program reached to an end")