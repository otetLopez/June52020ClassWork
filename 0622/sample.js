let a = 0;
 
for ( ; keepGoing(); ) {
    console.log(a++)
}

function keepGoing() {
    return true;
}