"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   function getAverage(scores){
    let sum = 0;
    for (let i = 0;  i < scores.length; i++){
        sum += scores[i];
    }
    return (sum / scores.length).toFixed(2);
 }

for (
    let i = 0; i < students.length; i++ 
    ){
        let student = students[i];
    let studentAverage = getAverage(student.scores);
    console.log("average scroe for " + student.name + " is " + studentAverage);
}