//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let Numbers25 = [ ]

Numbers25 = numbers.filter( (number)=>{return number >= 25} )
console.log(Numbers25)



let Numbersby5 = []
Numbersby5 = numbers.filter( (number)=>{return number%5==0} )
console.log(Numbersby5)




// /*****************************************************************
// Part 2: Mapping

// Write code to perform the following tasks using the map method:

// Q3) Create a new array that contains each number squared.
// Q4) Create a new array that contains each number multiplied by 2.
// ******************************************************************/
// 
let sqaured = []
sqaured = numbers.map ( (number)=>{return number*number} )
console.log(sqaured)


let multiplied = [ ]
multiplied = numbers.map( (number)=>number*2 ) 
console.log(multiplied)



// /*****************************************************************
// Part 3: Combining Filtering and Mapping

// Combine the filter and map methods to perform the following tasks:

// Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
// Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
// ******************************************************************/

let Q5 = []
Q5 = numbers.filter((num)=>{return num>=20}).map((num)=>{return num*num} ) 

console.log(Q5)





let Q6 =[]
Q6 = numbers.filter((x)=>x%5==0  ).map((x)=>x*3 ) 
console.log(Q6)


