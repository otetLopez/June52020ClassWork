// This is a sample code to debug proovided by Professor Bear
i = 15;
counter = 0;

function keepGoing() {
    var tiger = 11;
    if (counter < 10 )  return true;
    return false;
}

while (keepGoing()){
        var dog = 3;
        for ( ; keepGoing(); ){
            var cat = 4;
            counter++;
            if (--i > 8) break;
            if (i++ == 27) break; 
            console.log("i is ", i, " counter is ", counter);
        }
        console.log("cat is ", cat);
}

console.log("dog is ", dog);
console.log("cat is ", cat);
// console.log("tiger is ", tiger)