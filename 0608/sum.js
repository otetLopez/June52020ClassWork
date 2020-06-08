
function summation(min, max) {
    var sum = 0;
    for(i=max; i>=min; i-=7) {
        sum += i;
    }
    console.log("This is the answer: " + sum);
    return sum;
}


sum = summation(1, 100);
console.log("This is the returned answer: " + sum);