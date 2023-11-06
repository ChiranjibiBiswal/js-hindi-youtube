const mySym = Symbol("key1")

const user = {
    name: "Chiranjibi",
    "fullName": "Radhe Krishna",
    [mySym]: "myKey 1",
    roll: "2102070016",
    branch: "ETC",
    isStudent: true,
    lastLoginDays: ["ThursDay", "SaturDay"]
}

// console.log(user.name)
// console.log(user["fullName"])

// user.name = "Rishi"
// Object.freeze(user)
// user.name = "Chintu"
// console.log(user)

user.greetingOne = function (){
    console.log("Hello User.")
}

// console.log(user.greetingOne())

user.greetingTwo = function(){
    console.log(`Hello User from ${this.branch}`)
}

console.log(user.greetingTwo())