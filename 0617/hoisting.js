// #1
x = 1;

console.log('x = ' + x);
var x;
console.log(x);

// #2
console.log(Sum(5, 5)); // 10
function Sum(val1, val2)
{
    return val1 + val2;
}

// #3
// console.log(Add(5, 5)); // error
var Add = function Sum(val1, val2)
{
    return val1 + val2;
}
console.log(Add(5, 5)); // error

// #4
console.log(UseMe);  // Printing function reference
console.log(UseMe()); // Doing the functionality of the function
var UseMe = "I am a value";

function UseMe()
{            
    console.log("UseMe function called");
    return 0;
}

console.log(UseMe); 
// console.log(UseMe()); 


