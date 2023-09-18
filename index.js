//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
let newarray =[ ]
newarray = numbers.filter((x)=> {return x>= 25})
console.log(newarray)

let divisibleByfive =[ ]
divisibleByfive = numbers.filter((x)=> {return x%5 == 0 })
console.log(divisibleByfive)


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
let squaredarray = []
squaredarray = numbers.map((x)=> x*x )
console.log(squaredarray)

let multipliedarray = [ ]
multipliedarray = numbers.map ((x)=> x*2)
console.log(multipliedarray)
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
let arrayq5 = []
arrayq5 = numbers.filter((x)=> x>= 20).map((x)=> x*x )

console.log(arrayq5)

let arrayq6 =[]
arrayq6 = numbers.filter((x)=> x%5==0).map((x)=> x*3)
console.log(arrayq6)