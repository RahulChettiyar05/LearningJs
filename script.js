
/* Example of ternary operator

let score = 10;
let grade = score>50 ? "Pass" : "Fail" ;

console.log(grade)
*/

// JavaScript Practice Basic level questions

/*
#1 Write a program to add two numbers and print the result.

let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter 2nd number"));
let sum = a+b;
console.log(sum);


#2 Check whether a number is even or odd using the modulus (%) operator

let a = parseInt(prompt("Enter a number"));

if(a%2==0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}

#3 Given let a = 10; let b = 20;, use comparison operators to check:
Is a > b?
Is a == b?
Is a != b?


let a = 10;
let b = 20;

console.log(a>b);
console.log(a==b);
console.log(a!=b);


#4 Use logical operators to check if a number is between 10 and 50.


let a = 15;

if(a>=10 && a<=50){
    console.log("A is between 10 and 50");
}
else{
    console.log("A is not between 10 and 50");
}


#5 Write a program to swap two variables using a temporary variable.


let a,b,temp;
a = 10;
b = 20;
temp = 0;
console.log("A is :",a);
console.log("B is :",b);
console.log("After Swapping")

temp = a;
a = b;
b = temp;

console.log("A is :",a);
console.log("B is :",b);

*/

let a = 1;
while (a <= 20) {
    console.log(a);
    a++;
}

let b = 1;
while (b <= 5) {
    console.log(b);
    b++;
}
