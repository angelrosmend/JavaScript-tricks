//let a = () => arguments

var a = function() {
    return arguments
}

let b = (...args) => args

console.log(b('hi'))