var myVar = 100;
        
function WhoIsThis() {
    var myVar = 200;

    console.log("myVar = " + myVar); // 200
    console.log("this.myVar = " + this.myVar); // 100

    // alert("myVar = " + myVar); // 200
    // alert("this.myVar = " + this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()