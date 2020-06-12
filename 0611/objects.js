
// var myCar = new Object();
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
}
myCar['make'] = 'Ford'; 
myCar['model'] = 'Mustang'; 
myCar['year'] = 1969;

console.log(myCar);
var a = 1;

// four variables are created and assigned in a single go, // separated by commas
var myObj = new Object(),
            str = 'myString', 
            rand = Math.random(), 
            obj = new Object();
myObj.type     = 'Dot syntax';
myObj['date created']  = 'String with space';
myObj[str]  = 'String value';
myObj[rand]   = 'Random Number';
myObj[obj]    = 'Object';
myObj[''] = 'Even an empty string';
console.log(myObj);

var propertyName = 'make';
myCar[propertyName] = 'Ford';
propertyName = 'model';
myCar[propertyName] = 'Mustang';

console.log(myCar["make"]); // String
console.log(myCar.make); //Field
        


           
           
    