// Dates

let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleDateString());
// console.log(typeof myDates);

// let myCreatedDate = new Date(2025,0,23,5,6,9)
// let myCreatedDate = new Date(2023,0,25)
// let myCreatedDate = new Date("2025-2-14")
let myCreatedDate = new Date("01-14-2025")


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getSeconds());

// `${newDate.getDate()}and time is`

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    
}))




