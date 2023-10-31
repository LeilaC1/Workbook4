"use strict";
   
   let myInfo = {
    name: "Cookie Monster",
    address: "123 Sesame Street",
    city: "New York",
    state: "NY",
    zip: "11200",
    };
  

    function printContact() {
        console.log(myInfo.name);
        console.log(myInfo.address); 
       console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip) ;
       }

       printContact();