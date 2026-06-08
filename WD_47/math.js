function square(a) {
    let c = a * a
    return c
}

function power(a, b) {
    let p = 1
    for (let i = 1; i <= b; i++) {
        p = p * a
    }
    return p
}

function sum(a, b) {
    let c = a + b
    return c
}

module.exports = { square, power, sum }