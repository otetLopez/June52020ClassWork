
function summation(min, max, step) {
    var sum = 0;
    for(i=max; i>min; i-=step) {
        sum += i;
    }
    console.log("This is the answer: " + sum);
    return sum;
return sum;
}


sum = summation(5, 100, 7);
// sum =summation_2(1,100,6)
console.log("This is the returned answer: " + sum);

document.getElementById('sum').innerHTML = sum;