const fun1 = () => {
    console.log("I am a fun function.")
}

const callFunctionAfterGreet = (thefunction) => {
    console.log("good Morning!")
    thefunction()
}

callFunctionAfterGreet(fun1)


setTimeout(()=> {
    console.log("This runs after 2 seconds.")
}, 2000)

console.log("This runs first tho at the end.")