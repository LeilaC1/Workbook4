"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

 function getAverage(score){
    let sum = 0;
    for (let i = 0;  i < score.length; i++){
        sum += score[i];
    }
    return (sum / score.length).toFixed(2);
 }

 let myAvg = getAverage(myScores);
 let yourAvg = getAverage(yourScores);

 console.log("my average: " + myAvg);
 console.log("your average: " + yourAvg);
 
 function getMedian(score){
 let oddNum = score.length % 2 === 1;
 if (oddNum) {
    let median = score[Math.floor(myScores.length / 2)];
    return median;
    
 } else {
    let numOne = Math.floor((score.length - 1) / 2);
    let numTwo = numOne + 1;
    let avg = (score[numOne] + score[numTwo]) / 2;
    return avg;
    
 }
}
let myMedian = getMedian(myScores);
let yourMedian = getMedian(yourScores);
console.log("my median: " + myMedian);
 console.log("your median: " + yourMedian);