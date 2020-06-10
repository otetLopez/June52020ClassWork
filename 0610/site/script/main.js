function getSum(min, max, step) {
    var sum = 0;
    for(i=max; i>min; ) {
        sum += i;
        i = i-17;
    }
    return sum;
}

document.getElementById('answer').innerText = getSum(100, 1000, 17);
console.log(getSum(100, 1000, 17));


