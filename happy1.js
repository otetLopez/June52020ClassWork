// Function
function a() {
    var sum = 0;
    for (i=0;i<10;++i) {
       // console.log("Happy Summer!!!" + i);
        sum += i;
        if(i == 5) {
            break;
        }
    }
    return sum;
}

// Function passing parameters
function b(start, stop, stepvalue) {
    var sum = 0;
    for (i=start;i>stop;++i) {
       console.log("Happy Summer!!!" + i);
        sum = sum + stepvalue;
        if(i == 5) {
            break;
        }
    }
    return sum;
}
// console.log("sum is " + a());
console.log("sum is " + b(1000, 10, -17));



