"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

// Who is the Academy Member whose ID is 187?
for (let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].memID == 187){
        console.log("Member 187: " + academyMembers[i].name);
    }
}
// Who has have been in at least 3 films?
for (let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].films.length >= 3){
        console.log("Has been to atleast 3 films: " + academyMembers[i].name);
    }
}
// Who has a name that starts with "Bob"?
for (let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].name.includes("Bob")){
        console.log("Bobs: " + academyMembers[i].name);
    }
}

