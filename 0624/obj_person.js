function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var newPerson = new Person("Indiana", "Jones");
console.log("The new person is: " + newPerson.getFullName());