function a() {}
function b() {}
function keepGoing() { return true; } 

function happy() {
    for (a(); keepGoing(); b()) {
        console.log("Are you happy?");
    }
}

var counter = 0;
function another() {
    return counter++;
}

function dbg2() {
    while(another() >= 0) {

    }
}


// MAIN program
// happy()
dbg2();
