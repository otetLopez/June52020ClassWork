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
