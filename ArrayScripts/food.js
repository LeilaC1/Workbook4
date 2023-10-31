"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let food = 0;
    for(
        let i = 0; i < lunch.length; i++
    ){
        food += lunch[i].price;
    }
    console.log("Food total: " + food.toFixed(2))

    let tax =  food * 0.8;
    console.log("tax: " + tax.toFixed(2));

    let tip = food * 0.18;
    console.log("tip: " + tip.toFixed(2));

    let total = food + tip + tax;

    // final bill = total + tax +tip
    console.log("Total: " + total.toFixed(2));
