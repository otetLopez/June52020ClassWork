function getSum(min, max, step) {
    var sum = 0;
    for(i=max; i>=min; i-=step) {
        sum += i;
    }
    return sum;
}

document.getElementById('answer').innerText = getSum(100, 1000, 17);


