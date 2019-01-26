"use strict";
//should these be in a class?
let item1 = {
    name: "chicken",
    price: 3.99
}
let item2 = {
    name: "bread",
    price: 2.50
}
let item3 = {
    name: "milk",
    price: 1.50
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
    price: 2
}
let item8 = {
    name: "ice cream",
    price: 3
}

let groceryList = [item1, item2, item3, item4, item5, item6, item7, item8];
//function

//for of loop which goes through properties of objects
for (let groceries of groceryList) {
    console.log(groceries)
}
let getPrice = groceryList.price;
// function getPrice() {
    console.log(getPrice);


// getPrice();
// console.log(groceryList);

//for of loop which goes through properties of objects


// function groceryPrice() {
//     groceryList.reduce(priceSum, 0);
// }
// console.log(groceryPrice);



