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
   
   // Which candies costs less than $4.00?
   for (let i = 0; i < products.length; i++){
    if(products[i].price <= 4.00){
        console.log("$4 and under: " + products[i].product);
    }
}
// Which candies has "M&M" its name?
for (let i = 0; i < products.length; i++){
    if(products[i].product.includes("M&Ms")){
        console.log("M&Ms: " + products[i].product);
    }
}
// Do we carry "Swedish Fish"?
for (let i = 0; i < products.length; i++){
if (products[i].product === "Swedish Fish"){
    console.log("Yes, we carry " + products[i].product);
}
}