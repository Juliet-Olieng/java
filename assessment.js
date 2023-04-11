// Write a function that takes in a string and returns it when reversed
// let food = “eating”
// function text(food){
// //    console.log( food.reverse())

// }
// let food="eating"
// text(food)
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function mergeSortTopDown(num){
    const middle= Math.floor(num.length/2)
    const left=num.slice(0,middle)
    const right=num.slice(middle)
return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
const num3=[];
while(left.length && right.length ){
    if (left <=right) {
    num3.push(left.shift())
}
else{
    num3.push(right.shift())
}
return num3.concat(left.slice()).concat(right.slice())
}

}
function binaryArray(num3,target){
let left=0;
let right =num3.length-1;
while(left<=right){
    let middle=Math.floor((left+right)/2);
    if (num3[middle] ===target){
        return middle
    }
    else if(num3[middle]< target){
        left=middle + 1;

    }
    else{
        right= middle - 1;
    }
}
return null
}
let num = [2,8,0,23,5,45,76]
    let num4=mergeSortTopDown(num)
let target=23;
console.log(binaryArray(num4,target))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (num(0<=100);i=0;i++){
    if((num[i]%3)=0){
        console.log("Buzz")

    }
    elseif((num[i]%5)=0);{ 
        console.log("Fizz")
    }

}
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function numArr(numArray){
    num.forEach (numArray=>
        numArray*=4
        )
        console.log(numArray)
    }
    let numArray = [12,87,45,75,23,64,73]
    numArr(numArray)

    // Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function numbers(nums){
    for (i<num.length-1;i=0;i++){
        console.log(nums)
    }
}
let nums = ["10","24","45","56","67"]
numbers(nums)
