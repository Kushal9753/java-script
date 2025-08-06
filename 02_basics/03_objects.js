// singleton 
//object create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "kushal",
    "fullname":"kushal sahu",
    [mySym]:"mykey1",
    age: 19,
    location: "indore",
    email:"kushalsahu352@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "kushal@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "kushal@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user")
}


jsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
