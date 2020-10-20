//prevent an user from adding properties

let profile = { 
    name: 'techsith',
    age : 33
};

Object.freeze(profile)
Object.seal(profile)
Object.defineProperty( profile, 'age', {
    value: 33,
    writable: false
})