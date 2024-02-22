"use strict";
// object
// const clientInfo = {
// working structure key:value
//      firstName: "Tom",
//      age:24,
//      isMarried: false,
// };

// const colors = ["red","green","black",]
// console.log(clientInfo);
// console.log(colors),


// ------------------ example ----------------
// const person = {
//     firstName:"Bob",
//     lastName: "David",
//     age:2024 - 1990,
//     job:"actor",
//     phone:48901328,
//     friends:["Ann","John","Tom"],
// };

// console.log(`${person.firstName} has ${person.friends.length}, and his best friend is ${person.friends[person.friends.length - 1 ]}`);

// const interestedIn = prompt("What do you want to know?")
// console.log(person.interestedIn); //undefined
// console.log(person[interestedIn]); 

// -------------------- object methods example --------

// const person = {
//     firstName: "Mike",
//     lastName: "Smith",
//     phone:12345678,
//     friends: ["Tom","John","Ann"],
//     driveLicense:true,
//     //working function inside object
//     calcAge: function(birthYear) {
//         // console.log(this);
//         this.hobby = "playing football"
//         return 2024 - birthYear
//     },
// };

// console.log(person);
// console.log(person.calcAge(2004));
// console.log(`${person.firstName} has ${person.driveLicense ? "a" : "no"} drive's license`);
// ----------------- exapmle 2 -----------------
// const mark = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height:1.69,
//     calcBMI: function () {
//         this.markBMI = this.weight / this.height ** 2;
//         return this.markBMI;
//     }
// };
// const john = {
//     fullName: "John Smith",
//     weight: 92,
//     height:1.95,
//     calcBMI: function () {
//         this.johnBMI = this.weight / this.height ** 2;
//         return this.markBMI; 
//     }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(`${mark.fullName}'s BMI (${mark.markBMI}) is higher than ${john.fullName}'s BMI (${john.johnBMI})`);


// const years = [2000,2001,2002,2003];
// const ages = [];

// for (let i = 0; i < years.length;   ){

//     ages[i] = 2024 - years[i];
//     console.log(ages);
// };

// const personArr = [
//     "Bob",
//     "Adam",
//     24,
//     "English",
//     53927097,
// ];

// for (let i = 0; i < personArr.length; i++){
//     if (typeof personArr[i] === "number") break;
//     console.log(personArr[i]);
// }

const firstName = "Albert";
const surName = "Enyshtein";
const job = "physicist";
const age = 60;

console.log(`My name is ${firstName} ${surName}. I am ${age} years old. I am ${job}`);













