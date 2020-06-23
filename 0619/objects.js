// Example: Class in JavaScript
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }

}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
console.log(person1.firstName + " " + person1.lastName);
console.log(person1.getFullName());

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
            
console.log(person2.firstName + " " + person2.lastName );
console.log(person2.getFullName());

// function Person() {
//     var _firstName = "unknown";

//     Object.defineProperties(this, {
//         "FirstName": {
//             get: function () {
//                 return _firstName;
//             },
//             set: function (value) {
//                 _firstName = value;
//             }
//         }
//     });
//     // this.FirstName = "unknown";
// };

// var person1 = new Person();
// person1.FirstName = "Steve";
// console.log(person1.FirstName );
            
// var person2 = new Person();
// person2.FirstName = "Bill";
// console.log(person2.FirstName );


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