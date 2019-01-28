"use strict";
//should these be in a class?
let item1 = {
    name: "chicken",
    price: 3.99
}
let item2 = {
    name: "bread",
    price: 2.5
}
let item3 = {
    name: "milk",
    price: 1.5
}
let item4 = {
    name: "beer",
    price: 8.99
}
let item5 = {
    name: "cheese",
    price: 3
}
let item6 = {
    name: "avocado",
    price: 2
}
let item7 = {
    name: "apples",
    price: 2.75
}
let item8 = {
    name: "ice cream",
    price: 3
}

let groceryList = [item1, item2, item3, item4, item5, item6, item7, item8];


let total = 0;
for (let i = 0; i < groceryList.length; i++) {
  console.log(`name: ${groceryList[i].name} price: ${groceryList[i].price}`)
  total += groceryList[i].price;
  
}
console.log(total);


// debugger
// //for of loop which goes through properties of objects
// for (let item of groceryList) {
//     console.log(item)
//     debugger
// }

// //to print the prices of array use a for loop
// for (var j = 0; j < groceryList.length; j++){
//     console.log(groceryList[j]);
//   }
//for loop to cycle through array and add .price to total until
//done cycling through length of groceryList
// let total = 0;
// for (var j = 0; j < groceryList.length; j++) {
//     total += groceryList[j].price;
//     console.log(total);
// }
//print or manipulate items in array using loop

// for (var i = 0; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


