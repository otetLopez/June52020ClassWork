var peanut = function c(a, b) { return a * b; };
console.log(peanut(7, 9));

// Because Functions are OBJECTS in JavaScript, 
// here we are exercising our right here in Object-oriented land to assign an Object Reference (peanut) 
// to the same OBJECT as the function c.
var a = new Object(3);
b = a;

//Function Arguments
function ShowMessage() {
    for(var i = 0; i < arguments.length; i++){
        // alert(arguments[i]);
        console.log("Function Arguments: " + arguments[i]);
    }
}
ShowMessage("James", "Kirk"); 


//Function Returning a Function
function multiple(x) {
    function fn(y)
    {
        return x * y;
    }
    return fn;
}

var triple = multiple(3);
console.log("Function Returning a Function: " + triple(2)); // returns 6
console.log("Function Returning a Function: " + triple(3)); // returns 9

// Function Expression
// JavaScript allows us to assign a function to a variable and then use that variable as a function. 
// It is called function expression.
// Example: Function Expression
var add = function sum(val1, val2) {
    return val1 + val2;
};

var result1 = add(10,20);
console.log("Function Expression: " + result1);
// var result2 = sum(10,20); // not valid



// Anonymous Function
// JavaScript allows us to define a function without any name. 
// This unnamed function is called anonymous function. Anonymous function must be assigned to a variable.
var showMessage = function (){
    // alert("Hello World!");
    console.log("Anonymous Function : Hello World")
};
showMessage();
var sayHello = function (firstName) {
    // alert("Hello " + firstName);
    console.log("Anonymous Function : Hello " + firstName);
};

showMessage();
sayHello("Bill");


// Nested Functions
// In JavaScript, a function can have one or more inner functions. 
// These nested functions are in the scope of outer function. 
// Inner function can access variables and parameters of outer function. 
// However, outer function cannot access variables defined inside inner functions.
// Example: Nested Functions
function ShowMessage(firstName)
{
    function SayHello() {
        // alert("Hello " + firstName);
        console.log("Nested Functions: " + "Hello " + firstName );
    }
   return SayHello();
}
ShowMessage("Steve");
