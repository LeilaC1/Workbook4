"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Milky Chocolate M&Ms", price: 1.79},
    {product: "Bottle Pop", price: 2.79},
    {product: "Sweet Tarts", price: 4.79},
    {product: "Sour Patch", price: 5.25},
    {product: "Airheads", price: 2.20},
    {product: "Dots", price: 1.39},
   ];

   products.sort();
let sortedProducts = products.length;
for(let i = 0; i < sortedProducts; i++) {
 console.log(products[i].product);
}
console.log("--------------------------------------");
let sortedPrices = products.length;
for(let i = 0; i < sortedPrices; i++) {
    console.log(products[i].price);}
