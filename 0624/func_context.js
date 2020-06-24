var person = {
    name : "John",
    lname: "Jones"
};

function printName()
{
    console.log(this.lname);
}

var boundPrintName = printName.bind(person);
boundPrintName();    // prints out "John"
printName.call(person);