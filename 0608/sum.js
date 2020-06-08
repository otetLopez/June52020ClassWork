
function summation(min, max, step) {
    var sum = 0;
    for(i=max; i>min; i-=step) {
        sum += i;
    }
    console.log("This is the answer: " + sum);
    return sum;
}

function classSum(min, max, step) {
    var sum = 0;
    
    for(i=max; i>min ; ) {
  
        i-=7;
        sum += i;
    }

    console.log("This is the answer: " + sum);
    return sum;
}

sum = summation(5, 100, 7);
classSum(5,100,7);
console.log("This is the returned answer: " + sum);