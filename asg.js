// Marks Sheet//

let  MathsMarks = parseFloat(prompt("Enter a Marks in Maths: "));
let  PhysicsMarks = parseFloat(prompt("Enter a Marks in Physics: "));
let  ChemistryMarks = parseFloat(prompt("Enter a Marks in Chemistry: "));

//  claculate total marks an percentage
let totalMarks = MathsMarks + PhysicsMarks + ChemistryMarks;
let percentage = (totalMarks /300) *100;

// determine the garde based on the percentage//
 let garde

 if (percentage >=90) {
    garde = 'A+';
 } else if (percentage >=80){
    garde = 'A'
 }else if (percentage >=70){
    garde = 'B'
 }else if (percentage >=60){
    garde = 'C'
 }else if (percentage >=50){
    garde = 'D'
 } else {
    garde = 'F'
 }
//  Marks Sheet display..
console.log("Maths" + MathsMarks);
console.log("Physics" + PhysicsMarks);
console.log("Chemistry" + ChemistryMarks);
console.log("total" + totalMarks);
console.log("Percentage" + percentage.toFixed(2) + "%");
console.log("Grade" + garde);
  