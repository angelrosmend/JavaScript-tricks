let x = [1, 2, 3, 4, 5]

//let y = Object.assign([], x)

let y = [...x]

console.log(y)

//merge

let z = [1,2,3,4]
let a = [5,6,7]
let b = [...z,...a]

console.log(b)


//


let c = [1,2,3];

let func = function(...arg){
    return arg
}

console.log(func(...x))
console.log(func.apply(null, x))


let d = [3,4]
console.log(Math.hypot(...d))

