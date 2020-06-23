// In Class
function countDown() {
    // let i;
    for (i=5; i>=0; i--) {
        var count = i;
        var timer = 5 - i;
        // setTimeout(f(i), (timer) * 100);     
        setTimeout(function() {
            debugger;
            console.log(count === 0 ? "GO": i)
        }, (5-count) * 100);
    }
}

function countDown_Interval() {
    let i = 5;
    var start = setInterval(function() {
        console.log(i);
        i -= 1;
        if (i < 0) {
            clearInterval(start);
        }
    }, 1000);

}

// countDown();
countDown_Interval();
function f(i) {
    // debugger;
    console.log(i === 0 ? "GO": i);
    return 0;
}