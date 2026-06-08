export function square(a) {
    let c = a * a
    return c
}

export function power(a, b) {
    let p = 1
    for (let i = 1; i <= b; i++) {
        p = p * a
    }
    return p
}

export function sum(a, b) {
    let c = a + b
    return c
}

