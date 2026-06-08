const waitfor5s = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Successful")
    }, 5000)
})

waitfor5s.then((value)=>{
    console.log(value)
})

waitfor5s.catch((error)=>{
    console.log("Error: " + error)
})