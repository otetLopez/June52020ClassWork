function Person() {
    var _firstName = "unknown";

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstName;
            },
            set: function (value) {
                _firstName = value;
            }
        }
    });
    // this.FirstName = "unknown";
};

var person1 = new Person();
person1.FirstName = "Steve";
console.log(person1.FirstName );
            
var person2 = new Person();
person2.FirstName = "Bill";
console.log(person2.FirstName );


// Who's This
// var myVar = 100;

// function WhoIsThis() {
//     var myVar = 200;

//     console.log(myVar); // 200
//     console.log(this.myVar); // 100
// }

// WhoIsThis(); // inferred as window.WhoIsThis()

// var obj = new WhoIsThis();
// console.log(obj.myVar); 

var myVar = 100;
        
function WhoIsThis() {
    var myVar = 200;

    console.log("myVar = " + myVar); // 200
    console.log("this.myVar = " + this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()